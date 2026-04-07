#!/usr/bin/env python3

import argparse
import importlib.util
import os
import sys
import threading
import urllib.request
from pathlib import Path

APP_TITLE = 'Factory Droid Session Manager'
DEFAULT_WINDOW_SIZE = (1440, 960)
MIN_WINDOW_SIZE = (1120, 720)

def get_app_dir():
    if getattr(sys, 'frozen', False):
        return Path(getattr(sys, '_MEIPASS', Path(sys.executable).resolve().parent))
    return Path(__file__).resolve().parent


APP_DIR = get_app_dir()
SERVER_SCRIPT = APP_DIR / 'session-manager.py'


def load_session_manager():
    if not SERVER_SCRIPT.is_file():
        raise FileNotFoundError(f'Server script not found: {SERVER_SCRIPT}')
    spec = importlib.util.spec_from_file_location('session_manager_runtime', str(SERVER_SCRIPT))
    if spec is None or spec.loader is None:
        raise RuntimeError(f'Unable to load session manager from {SERVER_SCRIPT}')
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def start_embedded_server(module):
    server = module.create_server(port=0)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    host, port = server.server_address
    return server, thread, f'http://{host}:{port}'


def desktop_self_test(module=None):
    module = module or load_session_manager()
    server, _, url = start_embedded_server(module)
    try:
        with urllib.request.urlopen(f'{url}/api/sessions', timeout=5) as resp:
            if resp.status != 200:
                raise RuntimeError(f'Unexpected status: {resp.status}')
        print(f'Self-test passed: {url}')
        return 0
    finally:
        server.shutdown()
        server.server_close()


def parse_args(argv=None):
    parser = argparse.ArgumentParser(description=f'Launch the {APP_TITLE} desktop app.')
    parser.add_argument('--self-test', action='store_true')
    parser.add_argument('--sessions-dir')
    return parser.parse_args(argv)


def main():
    args = parse_args()
    module = load_session_manager()
    if args.sessions_dir:
        module.set_sessions_dir(args.sessions_dir)
    if args.self_test:
        return desktop_self_test(module)
    try:
        import webview
    except ImportError:
        print('pywebview is required for the desktop app.')
        if os.name == 'nt':
            print('Install with: py -3 -m pip install pywebview')
        else:
            print('Install with: python3 -m pip install pywebview')
        return 1

    server, _, url = start_embedded_server(module)
    webview.settings['ALLOW_DOWNLOADS'] = True
    webview.create_window(
        APP_TITLE,
        url,
        width=DEFAULT_WINDOW_SIZE[0],
        height=DEFAULT_WINDOW_SIZE[1],
        min_size=MIN_WINDOW_SIZE,
    )
    try:
        start_kwargs = {'debug': False}
        if os.name == 'nt':
            start_kwargs['gui'] = 'edgechromium'
        webview.start(**start_kwargs)
        return 0
    finally:
        server.shutdown()
        server.server_close()


if __name__ == '__main__':
    raise SystemExit(main())
