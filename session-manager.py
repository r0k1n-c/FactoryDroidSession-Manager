#!/usr/bin/env python3
"""Factory Droid Session Manager - Web-based visualization & management tool."""

import json
import mimetypes
import os
import re
import shlex
import signal
import shutil
import subprocess
import sys
import time
import webbrowser
from collections import deque
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs, unquote
from datetime import datetime

PORT = 18901
SCRIPT_PATH = os.path.realpath(__file__)
SCRIPT_DIR = os.path.dirname(SCRIPT_PATH)
SCRIPT_NAME = os.path.basename(SCRIPT_PATH)
FRONTEND_DIR = os.path.join(SCRIPT_DIR, 'frontend')
FRONTEND_INDEX = os.path.join(FRONTEND_DIR, 'index.html')
SESSIONS_DIR_ENV_VARS = ('FSM_SESSIONS_DIR', 'DROID_SESSIONS_DIR', 'FACTORY_SESSIONS_DIR')
FACTORY_HOME_ENV_VARS = ('FSM_FACTORY_HOME', 'DROID_HOME', 'FACTORY_HOME')
DROID_BIN_ENV_VARS = ('FSM_DROID_BIN', 'DROID_BIN', 'FACTORY_DROID_BIN')
SYSTEM_BLOCK_RE = re.compile(r'<system-(?:reminder|notification)>.*?</system-(?:reminder|notification)>', re.DOTALL)
SYSTEM_TAG_RE = re.compile(r'</?system-[^>]+>')
SESSION_PREVIEW_CANDIDATE_LIMIT = 32
SESSION_SUMMARY_CACHE = {}


def normalize_path(path):
    if not path:
        return ''
    return os.path.abspath(os.path.expandvars(os.path.expanduser(path)))


def unique_paths(paths):
    seen = set()
    result = []
    for path in paths:
        norm = normalize_path(path)
        if not norm or norm in seen:
            continue
        seen.add(norm)
        result.append(norm)
    return result


def normalize_preview_text(text):
    if not text:
        return ''
    text = strip_system_text(text)
    return ' '.join(text.split()).strip()


def strip_system_text(text):
    if not text:
        return ''
    text = SYSTEM_BLOCK_RE.sub('', text)
    if text.lstrip().startswith('<system-'):
        text = SYSTEM_TAG_RE.sub('', text)
    return text.strip()


def unwrap_serialized_text_payload(text):
    if not text:
        return ''
    stripped = text.lstrip()
    try:
        parsed, index = json.JSONDecoder().raw_decode(stripped)
    except Exception:
        return text

    inner_text = None
    if isinstance(parsed, dict) and parsed.get('type') == 'text' and isinstance(parsed.get('text'), str):
        inner_text = parsed['text']
    elif (
        isinstance(parsed, list)
        and len(parsed) == 1
        and isinstance(parsed[0], dict)
        and parsed[0].get('type') == 'text'
        and isinstance(parsed[0].get('text'), str)
    ):
        inner_text = parsed[0]['text']

    if inner_text is None:
        return text

    rest = re.sub(r'^[\s\]\}]+', '', stripped[index:])
    return f'{inner_text}{rest}'.strip()


def truncate_preview_text(text, limit):
    if len(text) <= limit:
        return text
    return text[:max(0, limit - 1)].rstrip() + '…'


def stringify_tool_value(value):
    if value is None:
        return ''
    if isinstance(value, str):
        return normalize_preview_text(value)
    try:
        return normalize_preview_text(json.dumps(value, ensure_ascii=False))
    except Exception:
        return normalize_preview_text(str(value))


def summarize_tool_input(tool_name, tool_input):
    if isinstance(tool_input, dict):
        if tool_name == 'Execute':
            return truncate_preview_text(normalize_preview_text(tool_input.get('command', '')), 180)
        if tool_name == 'Read':
            return truncate_preview_text(tool_input.get('file_path', ''), 180)
        if tool_name == 'LS':
            return truncate_preview_text(tool_input.get('directory_path', ''), 180)
        if tool_name == 'Grep':
            pattern = normalize_preview_text(tool_input.get('pattern', ''))
            path = tool_input.get('path', '')
            return truncate_preview_text(f'{pattern} @ {path}'.strip(' @'), 180)
        if tool_name == 'Glob':
            return truncate_preview_text(stringify_tool_value(tool_input.get('patterns', '')), 180)
        if tool_name == 'FetchUrl':
            return truncate_preview_text(tool_input.get('url', ''), 180)
        if tool_name == 'TodoWrite':
            todos = normalize_preview_text(tool_input.get('todos', '').splitlines()[0] if tool_input.get('todos') else '')
            return truncate_preview_text(todos, 180)
        if tool_name == 'AskUser':
            questionnaire = tool_input.get('questionnaire', '')
            first_line = normalize_preview_text(questionnaire.splitlines()[0] if questionnaire else '')
            return truncate_preview_text(first_line, 180)
    return truncate_preview_text(stringify_tool_value(tool_input), 180)


def tool_call_detail_from_content(content):
    tool_name = content.get('name', 'tool')
    tool_input = content.get('input', {})
    return {
        'id': content.get('id', ''),
        'name': tool_name,
        'summary': summarize_tool_input(tool_name, tool_input),
        'inputPreview': truncate_preview_text(stringify_tool_value(tool_input), 360),
    }


def tool_result_detail_from_content(content):
    preview = truncate_preview_text(stringify_tool_value(content.get('content', '')), 360)
    return {
        'toolUseId': content.get('tool_use_id', ''),
        'isError': bool(content.get('is_error', False)),
        'preview': preview,
    }


def factory_home_candidates():
    home = os.path.expanduser('~')
    candidates = [os.environ.get(name, '') for name in FACTORY_HOME_ENV_VARS]
    candidates.append(os.path.join(home, '.factory'))
    if os.name == 'nt':
        appdata = os.environ.get('APPDATA', '')
        localappdata = os.environ.get('LOCALAPPDATA', '')
        userprofile = os.environ.get('USERPROFILE', home)
        if appdata:
            candidates.append(os.path.join(appdata, 'Factory'))
        if localappdata:
            candidates.append(os.path.join(localappdata, 'Factory'))
        if userprofile:
            candidates.append(os.path.join(userprofile, '.factory'))
    return unique_paths(candidates)


def sessions_dir_from_index(factory_home):
    index_path = os.path.join(factory_home, 'cache', 'session-discovery-index.json')
    if not os.path.isfile(index_path):
        return ''
    try:
        with open(index_path, 'r') as f:
            data = json.load(f)
    except Exception:
        return ''
    return normalize_path(data.get('sessionsDir', ''))


def resolve_sessions_dir(preferred=''):
    preferred = normalize_path(preferred)
    if preferred:
        return preferred

    env_candidates = unique_paths(os.environ.get(name, '') for name in SESSIONS_DIR_ENV_VARS)
    if env_candidates:
        return env_candidates[0]

    candidates = []
    for factory_home in factory_home_candidates():
        sessions_from_index = sessions_dir_from_index(factory_home)
        if sessions_from_index:
            candidates.append(sessions_from_index)
        candidates.append(os.path.join(factory_home, 'sessions'))

    normalized = unique_paths(candidates)
    for path in normalized:
        if os.path.isdir(path):
            return path

    if normalized:
        return normalized[0]
    return os.path.join(os.path.expanduser('~'), '.factory', 'sessions')


def set_sessions_dir(path):
    global SESSIONS_DIR
    SESSIONS_DIR = resolve_sessions_dir(path)
    return SESSIONS_DIR


SESSIONS_DIR = resolve_sessions_dir()


def resolve_session_file_path(workspace, sid, suffix, require_exists=True):
    workspace = (workspace or '').strip()
    sid = (sid or '').strip()
    if not workspace or not sid:
        raise FileNotFoundError('Session not found.')

    base_dir = os.path.realpath(SESSIONS_DIR)
    full_path = os.path.realpath(os.path.join(base_dir, workspace, sid + suffix))
    try:
        inside_base_dir = os.path.commonpath([base_dir, full_path]) == base_dir
    except ValueError:
        inside_base_dir = False
    if not inside_base_dir:
        raise FileNotFoundError('Invalid session path.')
    if require_exists and not os.path.isfile(full_path):
        raise FileNotFoundError('Session not found.')
    return full_path


def load_session_summary(workspace, sid):
    real_settings_path = resolve_session_file_path(workspace, sid, '.settings.json')
    real_jsonl_path = resolve_session_file_path(workspace, sid, '.jsonl')
    canonical_workspace = os.path.basename(os.path.dirname(real_settings_path)) or workspace
    cache_key = (sid, real_settings_path, real_jsonl_path)
    return build_session_summary(cache_key, canonical_workspace, sid, real_settings_path, real_jsonl_path)


def normalize_command_path(value):
    if not value:
        return ''
    if any(sep in value for sep in ('/', '\\')) or value.startswith('~'):
        return normalize_path(value)
    return value


def resolve_droid_executable():
    for name in DROID_BIN_ENV_VARS:
        value = normalize_command_path(os.environ.get(name, ''))
        if value:
            return value
    for candidate in ('droid', 'droid.cmd'):
        found = shutil.which(candidate)
        if found:
            return found
    raise RuntimeError('droid CLI not found. Please install Droid or set FSM_DROID_BIN.')


def shell_resume_command(cwd, sid, droid_bin):
    if os.name == 'nt':
        return f'cd /d {subprocess.list2cmdline([cwd])} && {subprocess.list2cmdline([droid_bin, "-r", sid])}'
    return f'cd {shlex.quote(cwd)} && {shlex.quote(droid_bin)} -r {shlex.quote(sid)}'


def escape_applescript(text):
    return text.replace('\\', '\\\\').replace('"', '\\"')


def available_linux_terminal_launchers(command):
    candidates = [
        ('x-terminal-emulator', ['x-terminal-emulator', '-e', 'bash', '-lc', command]),
        ('gnome-terminal', ['gnome-terminal', '--', 'bash', '-lc', command]),
        ('konsole', ['konsole', '-e', 'bash', '-lc', command]),
        ('mate-terminal', ['mate-terminal', '--', 'bash', '-lc', command]),
        ('tilix', ['tilix', '-e', 'bash', '-lc', command]),
        ('xfce4-terminal', ['xfce4-terminal', '--command', f'bash -lc {shlex.quote(command)}']),
        ('lxterminal', ['lxterminal', '-e', f'bash -lc {shlex.quote(command)}']),
    ]
    return [launcher for exe, launcher in candidates if shutil.which(exe)]


def launch_terminal_command(command, cwd):
    if os.environ.get('FSM_CLI_LAUNCH_TEST') == '1':
        if os.name == 'nt':
            return {'launcher': ['cmd.exe', '/c', 'start', 'Factory Droid', 'cmd.exe', '/K', command], 'command': command}
        if sys.platform == 'darwin':
            return {'launcher': ['osascript', '-e', f'tell application "Terminal"\nactivate\ndo script "{escape_applescript(command)}"\nend tell'], 'command': command}
        linux_launchers = available_linux_terminal_launchers(command)
        if not linux_launchers:
            raise RuntimeError('No supported terminal emulator found for launching Droid.')
        return {'launcher': linux_launchers[0], 'command': command}

    if os.name == 'nt':
        subprocess.Popen(
            ['cmd.exe', '/c', 'start', 'Factory Droid', 'cmd.exe', '/K', command],
            cwd=cwd,
            close_fds=True,
        )
        return {'command': command}

    if sys.platform == 'darwin':
        applescript = f'tell application "Terminal"\nactivate\ndo script "{escape_applescript(command)}"\nend tell'
        subprocess.Popen(['osascript', '-e', applescript], cwd=cwd, close_fds=True)
        return {'command': command}

    for launcher in available_linux_terminal_launchers(command):
        try:
            subprocess.Popen(launcher, cwd=cwd, close_fds=True)
            return {'command': command}
        except FileNotFoundError:
            continue
    raise RuntimeError('No supported terminal emulator found for launching Droid.')


def cli_launch_data_for_session(workspace, sid):
    session = load_session_summary(workspace, sid)

    cwd = normalize_path(session.get('cwd', ''))
    if not os.path.isdir(cwd):
        cwd = os.path.expanduser('~')

    droid_bin = resolve_droid_executable()
    command = shell_resume_command(cwd, sid, droid_bin)
    return {'command': command, 'cwd': cwd, 'sessionId': sid}


def listening_pids_on_port(port):
    if os.name == 'nt':
        return listening_pids_on_port_windows(port)
    try:
        result = subprocess.run(
            ['lsof', f'-tiTCP:{port}', '-sTCP:LISTEN'],
            capture_output=True,
            text=True,
            check=False,
        )
    except FileNotFoundError:
        return []
    pids = []
    for line in result.stdout.splitlines():
        line = line.strip()
        if line.isdigit():
            pids.append(int(line))
    return pids


def listening_pids_on_port_windows(port):
    try:
        result = subprocess.run(
            ['netstat', '-ano', '-p', 'tcp'],
            capture_output=True,
            text=True,
            check=False,
        )
    except FileNotFoundError:
        return []

    pids = []
    port_suffix = f':{port}'
    for raw_line in result.stdout.splitlines():
        line = raw_line.strip()
        if not line:
            continue
        parts = line.split()
        if len(parts) < 5:
            continue
        local_addr = parts[1]
        state = parts[3].upper()
        pid = parts[-1]
        if state != 'LISTENING' or not pid.isdigit():
            continue
        if local_addr.endswith(port_suffix) or local_addr.endswith(f']:{port}'):
            pids.append(int(pid))
    return pids


def command_for_pid(pid):
    if os.name == 'nt':
        return command_for_pid_windows(pid)
    try:
        result = subprocess.run(
            ['ps', '-o', 'command=', '-p', str(pid)],
            capture_output=True,
            text=True,
            check=False,
        )
    except FileNotFoundError:
        return ''
    return result.stdout.strip()


def command_for_pid_windows(pid):
    for powershell in ('powershell', 'powershell.exe'):
        try:
            result = subprocess.run(
                [
                    powershell,
                    '-NoProfile',
                    '-Command',
                    f'(Get-CimInstance Win32_Process -Filter "ProcessId = {pid}").CommandLine',
                ],
                capture_output=True,
                text=True,
                check=False,
            )
        except FileNotFoundError:
            continue
        cmd = result.stdout.strip()
        if cmd:
            return cmd
    return ''


def is_session_manager_process(pid):
    if pid == os.getpid():
        return False
    cmd = command_for_pid(pid)
    if not cmd:
        return False
    cmd_lower = cmd.lower()
    return (
        SCRIPT_PATH.lower() in cmd_lower
        or (SCRIPT_NAME.lower() in cmd_lower and ('python' in cmd_lower or 'py.exe' in cmd_lower))
    )


def session_manager_pids_on_port(port):
    return [pid for pid in listening_pids_on_port(port) if is_session_manager_process(pid)]


def stop_pid(pid, force=False):
    if os.name == 'nt':
        cmd = ['taskkill', '/PID', str(pid), '/T']
        if force:
            cmd.append('/F')
        subprocess.run(cmd, capture_output=True, text=True, check=False)
        return
    sig = signal.SIGKILL if force else signal.SIGTERM
    os.kill(pid, sig)


def stop_existing_session_manager(port):
    pids = session_manager_pids_on_port(port)
    if not pids:
        return []

    for pid in pids:
        try:
            stop_pid(pid, force=False)
        except ProcessLookupError:
            pass

    deadline = time.time() + 3
    while time.time() < deadline:
        if not session_manager_pids_on_port(port):
            return pids
        time.sleep(0.1)

    remaining = session_manager_pids_on_port(port)
    for pid in remaining:
        try:
            stop_pid(pid, force=True)
        except ProcessLookupError:
            pass

    deadline = time.time() + 2
    while time.time() < deadline:
        if not session_manager_pids_on_port(port):
            return pids
        time.sleep(0.1)

    raise RuntimeError(f'Failed to stop existing session-manager process on port {port}')


def message_obj_has_tool_use(obj):
    msg = obj.get('message', {})
    contents = msg.get('content', []) if isinstance(msg, dict) else []
    if not isinstance(contents, list):
        return False
    return any(isinstance(item, dict) and item.get('type') == 'tool_use' for item in contents)


def preview_entry_from_message_obj(obj, limit):
    entry = message_entry_from_obj(obj)
    if not entry:
        return None, ''
    preview_text = normalize_preview_text(entry.get('text', ''))
    if not preview_text or entry.get('role') == 'tool':
        return entry, ''
    return entry, truncate_preview_text(preview_text, limit)


def build_session_summary(cache_key, canonical_workspace, sid, real_settings_path, real_jsonl_path):
    settings_stat = os.stat(real_settings_path)
    jsonl_stat = os.stat(real_jsonl_path)
    cache_signature = (
        canonical_workspace,
        settings_stat.st_mtime_ns,
        settings_stat.st_size,
        jsonl_stat.st_mtime_ns,
        jsonl_stat.st_size,
    )
    cached = SESSION_SUMMARY_CACHE.get(cache_key)
    if cached and cached.get('signature') == cache_signature:
        return dict(cached['session'])

    try:
        with open(real_settings_path, 'r') as sf:
            settings = json.load(sf)
    except Exception:
        settings = {}

    first_line = {}
    msg_count = 0
    first_user_obj = None
    recent_non_tool = deque(maxlen=SESSION_PREVIEW_CANDIDATE_LIMIT)
    recent_tool = deque(maxlen=SESSION_PREVIEW_CANDIDATE_LIMIT)
    try:
        with open(real_jsonl_path, 'r') as jf:
            for line in jf:
                try:
                    obj = json.loads(line)
                except Exception:
                    continue
                if not first_line and isinstance(obj, dict):
                    first_line = obj
                if obj.get('type') != 'message':
                    continue
                msg_count += 1
                msg = obj.get('message', {})
                role = msg.get('role', '') if isinstance(msg, dict) else ''
                if role == 'user' and first_user_obj is None:
                    first_user_obj = obj
                if role != 'tool':
                    recent_non_tool.append(obj)
                    if message_obj_has_tool_use(obj):
                        recent_tool.append(obj)
    except Exception:
        pass

    first_user_message = ''
    if first_user_obj is not None:
        _entry, first_user_message = preview_entry_from_message_obj(first_user_obj, 120)

    latest_message_preview = ''
    latest_tool_preview = ''
    for obj in reversed(recent_non_tool):
        entry, preview_text = preview_entry_from_message_obj(obj, 140)
        if not preview_text:
            continue
        if entry.get('toolCalls') and preview_text.startswith('Used tool'):
            if not latest_tool_preview:
                latest_tool_preview = preview_text
            continue
        latest_message_preview = preview_text
        break

    if not latest_tool_preview:
        for obj in reversed(recent_tool):
            entry, preview_text = preview_entry_from_message_obj(obj, 140)
            if preview_text and entry.get('toolCalls') and preview_text.startswith('Used tool'):
                latest_tool_preview = preview_text
                break

    if not latest_message_preview:
        latest_message_preview = latest_tool_preview

    cwd = first_line.get('cwd', canonical_workspace.replace('-', '/')) if isinstance(first_line, dict) else canonical_workspace.replace('-', '/')
    session = {
        'id': sid,
        'workspace': canonical_workspace,
        'cwd': cwd,
        'title': first_line.get('sessionTitle', first_line.get('title', 'Untitled')) if isinstance(first_line, dict) else 'Untitled',
        'owner': first_line.get('owner', '') if isinstance(first_line, dict) else '',
        'model': settings.get('model', 'unknown'),
        'reasoningEffort': settings.get('reasoningEffort', ''),
        'autonomyLevel': settings.get('autonomyLevel', ''),
        'tokenUsage': settings.get('tokenUsage', {}),
        'assistantActiveTimeMs': settings.get('assistantActiveTimeMs', 0),
        'fileSize': jsonl_stat.st_size,
        'messageCount': msg_count,
        'firstUserMessage': first_user_message,
        'latestMessagePreview': latest_message_preview,
        'lastModified': datetime.fromtimestamp(jsonl_stat.st_mtime).isoformat(),
        'lastModifiedTs': jsonl_stat.st_mtime,
    }
    SESSION_SUMMARY_CACHE[cache_key] = {'signature': cache_signature, 'session': session}
    return dict(session)


def scan_sessions():
    sessions = []
    seen = set()
    active_cache_keys = set()
    if not os.path.isdir(SESSIONS_DIR):
        return sessions
    for workspace_entry in os.scandir(SESSIONS_DIR):
        workspace = workspace_entry.name
        if not workspace_entry.is_dir() or workspace.startswith('.'):
            continue
        ws_path = workspace_entry.path
        for entry in os.scandir(ws_path):
            if not entry.is_file() or not entry.name.endswith('.settings.json'):
                continue
            sid = entry.name.replace('.settings.json', '')
            settings_path = entry.path
            jsonl_path = os.path.join(ws_path, sid + '.jsonl')
            if not os.path.isfile(jsonl_path):
                continue
            # De-duplicate sessions that are symlinked from another workspace.
            real_settings_path = os.path.realpath(settings_path)
            real_jsonl_path = os.path.realpath(jsonl_path)
            key = (sid, real_settings_path, real_jsonl_path)
            if key in seen:
                continue
            seen.add(key)
            active_cache_keys.add(key)

            canonical_workspace = os.path.basename(os.path.dirname(real_settings_path)) or workspace
            try:
                sessions.append(build_session_summary(key, canonical_workspace, sid, real_settings_path, real_jsonl_path))
            except OSError:
                continue
    stale_cache_keys = [key for key in SESSION_SUMMARY_CACHE.keys() if key not in active_cache_keys]
    for key in stale_cache_keys:
        SESSION_SUMMARY_CACHE.pop(key, None)
    # If a session id exists in multiple workspaces (e.g. due to copies),
    # keep the most recently modified one.
    by_id = {}
    for s in sessions:
        cur = by_id.get(s['id'])
        if cur is None or s['lastModifiedTs'] > cur['lastModifiedTs']:
            by_id[s['id']] = s
    sessions = list(by_id.values())
    sessions.sort(key=lambda s: s['lastModifiedTs'], reverse=True)
    return sessions


def find_session(workspace, sid):
    try:
        return load_session_summary(workspace, sid)
    except FileNotFoundError:
        pass
    for session in scan_sessions():
        if session['workspace'] == workspace and session['id'] == sid:
            return session
    return None


def launch_cli_for_session(workspace, sid):
    launch_info = cli_launch_data_for_session(workspace, sid)
    cwd = launch_info['cwd']
    command = launch_info['command']
    launch_info = launch_terminal_command(command, cwd)
    launch_info.update({'cwd': cwd, 'sessionId': sid, 'command': command})
    return launch_info


def message_entry_from_obj(obj):
    if obj.get('type') != 'message':
        return None

    msg = obj.get('message', {})
    ts = obj.get('timestamp', '')
    role = msg.get('role', '')
    contents = msg.get('content', [])
    text_parts = []
    thinking_parts = []
    tool_calls = []
    tool_call_details = []
    tool_results = []

    for c in contents:
        if isinstance(c, str):
            txt = strip_system_text(c)
            if role == 'user':
                txt = unwrap_serialized_text_payload(txt)
            if txt:
                text_parts.append(txt)
        elif isinstance(c, dict):
            t = c.get('type', '')
            if t == 'text':
                txt = strip_system_text(c.get('text', ''))
                if role == 'user':
                    txt = unwrap_serialized_text_payload(txt)
                if txt:
                    text_parts.append(txt)
            elif t == 'thinking':
                for item in c.get('summary', []):
                    if isinstance(item, dict) and item.get('type') == 'summary_text':
                        txt = item.get('text', '').strip()
                        if txt:
                            thinking_parts.append(txt)
            elif t == 'tool_use':
                detail = tool_call_detail_from_content(c)
                tool_calls.append(detail['name'])
                tool_call_details.append(detail)
            elif t == 'tool_result':
                tool_results.append(tool_result_detail_from_content(c))

    text = '\n'.join(text_parts).strip()
    if not text:
        if thinking_parts:
            text = '\n'.join(thinking_parts)
        elif tool_calls:
            label = 'tool' if len(tool_calls) == 1 else 'tools'
            text = f"Used {label}: {', '.join(tool_calls)}"
        elif tool_results:
            label = 'Tool result' if len(tool_results) == 1 else 'Tool results'
            previews = [detail['preview'] for detail in tool_results if detail.get('preview')]
            text = f"{label}: {' | '.join(previews[:2])}" if previews else label

    if not text and not tool_calls and not tool_results:
        return None

    display_role = role
    if tool_results and not text_parts and not thinking_parts and not tool_calls:
        display_role = 'tool'

    return {
        'timestamp': ts,
        'role': display_role,
        'text': text,
        'toolCalls': tool_calls,
        'toolCallDetails': tool_call_details,
        'toolResults': tool_results,
    }


def read_session_messages(workspace, sid):
    try:
        jsonl_path = resolve_session_file_path(workspace, sid, '.jsonl')
    except FileNotFoundError:
        return []
    messages = []
    with open(jsonl_path, 'r') as f:
        for line in f:
            try:
                obj = json.loads(line)
                entry = message_entry_from_obj(obj)
                if entry:
                    messages.append(entry)
            except Exception:
                pass
    return messages


def search_sessions_by_message(query):
    needle = (query or '').strip().casefold()
    if not needle:
        return []

    matches = []
    for session in scan_sessions():
        summary_haystack = '\n'.join([
            session.get('firstUserMessage', ''),
            session.get('latestMessagePreview', ''),
        ]).casefold()
        if summary_haystack and needle in summary_haystack:
            matches.append({'workspace': session['workspace'], 'id': session['id']})
            continue

        if not session.get('messageCount'):
            continue

        try:
            jsonl_path = resolve_session_file_path(session['workspace'], session['id'], '.jsonl')
        except FileNotFoundError:
            continue

        matched = False
        try:
            with open(jsonl_path, 'r') as f:
                for line in f:
                    try:
                        obj = json.loads(line)
                    except Exception:
                        continue
                    entry = message_entry_from_obj(obj)
                    if not entry:
                        continue
                    if needle in entry['text'].casefold():
                        matched = True
                        break
            if matched:
                matches.append({'workspace': session['workspace'], 'id': session['id']})
        except Exception:
            continue
    return matches


def delete_session(workspace, sid):
    paths = []
    for suffix in ('.settings.json', '.jsonl'):
        try:
            paths.append(resolve_session_file_path(workspace, sid, suffix))
        except FileNotFoundError:
            continue
    removed = False
    for p in paths:
        if os.path.isfile(p):
            os.remove(p)
            removed = True
    return removed


def load_frontend_html():
    if not os.path.isfile(FRONTEND_INDEX):
        raise FileNotFoundError(f'Frontend entry not found: {FRONTEND_INDEX}')
    with open(FRONTEND_INDEX, 'r', encoding='utf-8') as f:
        return f.read()


load_frontend_html()


def frontend_asset_path(request_path):
    rel_path = request_path.lstrip('/')
    if not rel_path:
        rel_path = 'index.html'
    rel_path = unquote(rel_path)
    base_dir = os.path.realpath(FRONTEND_DIR)
    full_path = os.path.realpath(os.path.join(base_dir, rel_path))
    if os.path.commonpath([base_dir, full_path]) != base_dir:
        raise FileNotFoundError('Invalid frontend asset path.')
    if not os.path.isfile(full_path):
        raise FileNotFoundError(f'Frontend asset not found: {request_path}')
    return full_path

class Handler(BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        pass

    def _is_client_disconnect(self, exc):
        if isinstance(exc, (BrokenPipeError, ConnectionResetError, ConnectionAbortedError)):
            return True
        if isinstance(exc, OSError) and getattr(exc, 'errno', None) in (32, 54):
            return True
        return False

    def _send_bytes(self, status, content_type, payload=b''):
        try:
            self.send_response(status)
            if content_type:
                self.send_header('Content-Type', content_type)
            self.end_headers()
            if payload:
                self.wfile.write(payload)
        except Exception as exc:
            if self._is_client_disconnect(exc):
                return False
            raise
        return True

    def _send_empty(self, status):
        return self._send_bytes(status, None, b'')

    def _read_json_body(self):
        try:
            length = int(self.headers.get('Content-Length', '0') or '0')
        except ValueError:
            length = 0
        raw = self.rfile.read(length) if length > 0 else b'{}'
        try:
            return json.loads(raw.decode('utf-8') or '{}')
        except Exception:
            return {}

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path in ('/', '', '/index.html'):
            self._send_frontend_file('index.html')
        elif parsed.path.startswith('/assets/'):
            self._send_frontend_file(parsed.path.lstrip('/'))
        elif parsed.path == '/api/sessions':
            data = scan_sessions()
            self._json_response(data)
        elif parsed.path == '/api/session':
            params = parse_qs(parsed.query)
            ws = params.get('workspace', [''])[0]
            sid = params.get('id', [''])[0]
            data = read_session_messages(ws, sid)
            self._json_response(data)
        elif parsed.path == '/api/search_messages':
            params = parse_qs(parsed.query)
            query = params.get('q', [''])[0]
            data = search_sessions_by_message(query)
            self._json_response({'ok': True, 'matches': data})
        elif parsed.path == '/api/cli_command':
            params = parse_qs(parsed.query)
            ws = params.get('workspace', [''])[0]
            sid = params.get('id', [''])[0]
            try:
                data = cli_launch_data_for_session(ws, sid)
                self._json_response({'ok': True, **data})
            except Exception as exc:
                self._json_response({'ok': False, 'error': str(exc)})
        else:
            self._send_empty(404)

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == '/api/open_cli':
            payload = self._read_json_body()
            ws = payload.get('workspace', '')
            sid = payload.get('id', '')
            try:
                data = launch_cli_for_session(ws, sid)
                self._json_response({'ok': True, **data})
            except Exception as exc:
                self._json_response({'ok': False, 'error': str(exc)})
        else:
            self._send_empty(404)

    def do_DELETE(self):
        parsed = urlparse(self.path)
        if parsed.path == '/api/delete':
            params = parse_qs(parsed.query)
            ws = params.get('workspace', [''])[0]
            sid = params.get('id', [''])[0]
            ok = delete_session(ws, sid)
            self._json_response({'ok': ok})
        elif parsed.path == '/api/delete_empty':
            sessions = scan_sessions()
            removed = 0
            for s in sessions:
                if s['messageCount'] == 0:
                    if delete_session(s['workspace'], s['id']):
                        removed += 1
            self._json_response({'removed': removed})
        else:
            self._send_empty(404)

    def _json_response(self, data):
        payload = json.dumps(data, ensure_ascii=False).encode('utf-8')
        self._send_bytes(200, 'application/json', payload)

    def _send_frontend_file(self, relative_path):
        try:
            file_path = frontend_asset_path(relative_path)
        except FileNotFoundError:
            self._send_empty(404)
            return

        content_type = mimetypes.guess_type(file_path)[0] or 'application/octet-stream'
        if content_type.startswith('text/'):
            content_type = f'{content_type}; charset=utf-8'

        with open(file_path, 'rb') as f:
            self._send_bytes(200, content_type, f.read())


class ReusableHTTPServer(HTTPServer):
    allow_reuse_address = True


def create_server(host='127.0.0.1', port=PORT):
    return ReusableHTTPServer((host, port), Handler)


def parse_runtime_args(argv):
    port = PORT
    custom_port = False
    sessions_dir = ''
    i = 0
    while i < len(argv):
        arg = argv[i]
        if arg == '--sessions-dir':
            i += 1
            if i >= len(argv):
                raise SystemExit('Missing value for --sessions-dir')
            sessions_dir = argv[i]
        elif arg.startswith('--sessions-dir='):
            sessions_dir = arg.split('=', 1)[1]
        else:
            if custom_port:
                raise SystemExit(f'Unexpected argument: {arg}')
            try:
                port = int(arg)
            except ValueError as exc:
                raise SystemExit(f'Unexpected argument: {arg}') from exc
            custom_port = True
        i += 1
    return port, custom_port, sessions_dir


if __name__ == '__main__':
    port, custom_port, sessions_dir = parse_runtime_args(sys.argv[1:])
    if sessions_dir:
        set_sessions_dir(sessions_dir)
    if not custom_port:
        stopped_pids = stop_existing_session_manager(port)
        if stopped_pids:
            print(f"Stopped existing session-manager process on port {port}: {', '.join(str(pid) for pid in stopped_pids)}")
    server = create_server(port=port)
    url = f'http://127.0.0.1:{port}'
    print(f"Factory Droid Session Manager running at {url}")
    print("Press Ctrl+C to stop.")
    if os.environ.get('FSM_NO_BROWSER') != '1':
        webbrowser.open(url)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
    finally:
        server.server_close()
