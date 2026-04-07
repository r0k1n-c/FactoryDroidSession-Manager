#!/usr/bin/env python3

import argparse
import os
import shlex
import shutil
import subprocess
import sys
import tarfile
from pathlib import Path

APP_NAME = 'FactoryDroidSessionManager'
APP_TITLE = 'Factory Droid Session Manager'
ROOT = Path(__file__).resolve().parent
ENTRYPOINT = ROOT / 'session-manager-desktop.py'
SERVER_SCRIPT = ROOT / 'session-manager.py'
FRONTEND_DIR = ROOT / 'frontend'
FRONTEND_INDEX = FRONTEND_DIR / 'index.html'
FRONTEND_STYLE = FRONTEND_DIR / 'assets' / 'style.css'
FRONTEND_SCRIPT = FRONTEND_DIR / 'assets' / 'app.js'
DIST_DIR = ROOT / 'dist'
BUILD_DIR = ROOT / 'build'
RELEASE_DIR = ROOT / 'release'
REQUIREMENTS_DESKTOP = ROOT / 'requirements-desktop.txt'
REQUIREMENTS_BUILD = ROOT / 'requirements-build.txt'


def platform_tag():
    if sys.platform == 'win32':
        return 'windows'
    if sys.platform == 'darwin':
        return 'macos'
    return 'linux'


def add_data_arg(source, target='.'):
    return f'{source}{os.pathsep}{target}'


def output_name():
    return f'{APP_NAME}-{platform_tag()}'


def bundle_path(base_dist_dir):
    if sys.platform == 'darwin':
        return base_dist_dir / f'{APP_NAME}.app'
    if sys.platform == 'win32':
        return base_dist_dir / f'{APP_NAME}.exe'
    return base_dist_dir / APP_NAME


def archive_bundle(bundle, archive_base):
    RELEASE_DIR.mkdir(parents=True, exist_ok=True)
    if sys.platform == 'linux':
        archive_path = RELEASE_DIR / f'{archive_base}.tar.gz'
        with tarfile.open(archive_path, 'w:gz') as tar:
            tar.add(bundle, arcname=bundle.name)
        return archive_path
    archive_path = shutil.make_archive(str(RELEASE_DIR / archive_base), 'zip', root_dir=bundle.parent, base_dir=bundle.name)
    return Path(archive_path)


def validate_project_files():
    missing = [
        path for path in (
            ENTRYPOINT,
            SERVER_SCRIPT,
            FRONTEND_INDEX,
            FRONTEND_STYLE,
            FRONTEND_SCRIPT,
            REQUIREMENTS_DESKTOP,
            REQUIREMENTS_BUILD,
        ) if not path.is_file()
    ]
    if missing:
        missing_text = ', '.join(str(path) for path in missing)
        raise FileNotFoundError(f'Missing required project files: {missing_text}')


def format_command(parts):
    return ' '.join(shlex.quote(str(part)) for part in parts)


def run_step(label, cmd):
    print(f'[{label}] {format_command(cmd)}')
    subprocess.run(cmd, check=True)


def install_requirements():
    run_step(
        'install',
        [
            sys.executable,
            '-m',
            'pip',
            'install',
            '--user',
            '-r',
            str(REQUIREMENTS_DESKTOP),
            '-r',
            str(REQUIREMENTS_BUILD),
        ],
    )


def run_desktop_self_test():
    run_step('self-test', [sys.executable, str(ENTRYPOINT), '--self-test'])


def build(archive=True):
    tag = platform_tag()
    work_dir = BUILD_DIR / tag
    dist_dir = DIST_DIR / tag
    spec_dir = BUILD_DIR / 'spec'

    shutil.rmtree(work_dir, ignore_errors=True)
    shutil.rmtree(dist_dir, ignore_errors=True)
    spec_dir.mkdir(parents=True, exist_ok=True)
    dist_dir.mkdir(parents=True, exist_ok=True)

    cmd = [
        sys.executable, '-m', 'PyInstaller',
        '--noconfirm',
        '--clean',
        '--windowed',
        '--name', APP_NAME,
        '--distpath', str(dist_dir),
        '--workpath', str(work_dir),
        '--specpath', str(spec_dir),
        '--collect-all', 'webview',
        '--add-data', add_data_arg(SERVER_SCRIPT),
        '--add-data', add_data_arg(FRONTEND_DIR, 'frontend'),
    ]

    if sys.platform != 'darwin':
        cmd.append('--onefile')
    else:
        cmd += ['--osx-bundle-identifier', 'ai.factory.session-manager']

    cmd.append(str(ENTRYPOINT))
    run_step('build', cmd)

    bundle = bundle_path(dist_dir)
    if not bundle.exists():
        raise FileNotFoundError(f'Expected bundle not found: {bundle}')

    archive_path = None
    if archive:
        archive_path = archive_bundle(bundle, output_name())

    print(f'Built bundle: {bundle}')
    if archive_path:
        print(f'Created archive: {archive_path}')


def parse_args(argv=None):
    parser = argparse.ArgumentParser(description=f'Build desktop artifacts for {APP_TITLE}.')
    parser.add_argument('--skip-install', action='store_true')
    parser.add_argument('--skip-self-test', action='store_true')
    parser.add_argument('--no-archive', action='store_true')
    return parser.parse_args(argv)


def main(argv=None):
    args = parse_args(argv)
    validate_project_files()
    if not args.skip_install:
        install_requirements()
    if not args.skip_self_test:
        run_desktop_self_test()
    build(archive=not args.no_archive)
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
