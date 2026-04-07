#!/usr/bin/env python3

from __future__ import annotations

import argparse
import fnmatch
import sys
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile


DEFAULT_EXCLUDED_DIRS = {
    ".git",
    "__pycache__",
    "node_modules",
    "venv",
    ".venv",
    "build",
    "dist",
    "release",
}

DEFAULT_EXCLUDED_NAMES = {
    ".DS_Store",
}

DEFAULT_EXCLUDED_SUFFIXES = {
    ".pyc",
    ".pyo",
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Create validated share/runtime project ZIP packages.")
    parser.add_argument("--mode", choices=("share", "runtime"), required=True)
    parser.add_argument("--project", required=True, help="Project root directory.")
    parser.add_argument("--output", help="Output zip path. Defaults to <parent>/<ProjectName>-<mode>.zip")
    parser.add_argument("--include", action="append", default=[], help="Runtime include path relative to project root.")
    parser.add_argument("--exclude", action="append", default=[], help="Additional exclusion pattern.")
    parser.add_argument("--require", action="append", default=[], help="Required relative path to validate in zip.")
    parser.add_argument("--ban", action="append", default=[], help="Relative path glob that must not appear in zip.")
    return parser.parse_args()


def rel_matches(rel_path: Path, pattern: str) -> bool:
    rel_posix = rel_path.as_posix()
    return (
        fnmatch.fnmatch(rel_posix, pattern)
        or fnmatch.fnmatch(rel_path.name, pattern)
        or fnmatch.fnmatch(f"./{rel_posix}", pattern)
    )


def should_exclude(rel_path: Path, extra_patterns: list[str]) -> bool:
    if any(part in DEFAULT_EXCLUDED_DIRS for part in rel_path.parts[:-1]):
        return True
    if rel_path.name in DEFAULT_EXCLUDED_NAMES:
        return True
    if rel_path.suffix in DEFAULT_EXCLUDED_SUFFIXES:
        return True
    return any(rel_matches(rel_path, pattern) for pattern in extra_patterns)


def collect_share_files(project: Path, extra_patterns: list[str]) -> list[tuple[Path, Path]]:
    files: list[tuple[Path, Path]] = []
    for path in sorted(project.rglob("*")):
        if not path.is_file():
            continue
        rel = path.relative_to(project)
        if should_exclude(rel, extra_patterns):
            continue
        files.append((path, rel))
    return files


def expand_runtime_include(project: Path, raw_include: str) -> list[tuple[Path, Path]]:
    include_path = Path(raw_include)
    abs_path = project / include_path
    if abs_path.is_file():
        return [(abs_path, include_path)]
    if abs_path.is_dir():
        return [
            (path, path.relative_to(project))
            for path in sorted(abs_path.rglob("*"))
            if path.is_file()
        ]
    raise FileNotFoundError(f"Missing include path: {abs_path}")


def collect_runtime_files(project: Path, includes: list[str]) -> list[tuple[Path, Path]]:
    if not includes:
        raise SystemExit("--mode runtime requires at least one --include path")
    seen: set[str] = set()
    files: list[tuple[Path, Path]] = []
    for raw_include in includes:
        for abs_path, rel in expand_runtime_include(project, raw_include):
            key = rel.as_posix()
            if key in seen:
                continue
            seen.add(key)
            files.append((abs_path, rel))
    files.sort(key=lambda item: item[1].as_posix())
    return files


def write_zip(project: Path, output: Path, files: list[tuple[Path, Path]]) -> None:
    output.parent.mkdir(parents=True, exist_ok=True)
    root_prefix = Path(project.name)
    with ZipFile(output, "w", compression=ZIP_DEFLATED) as zip_file:
        for abs_path, rel in files:
            zip_file.write(abs_path, arcname=str(root_prefix / rel))


def validate_zip(project: Path, output: Path, required: list[str], banned: list[str]) -> None:
    with ZipFile(output) as zip_file:
        names = set(zip_file.namelist())

    project_prefix = Path(project.name)
    errors: list[str] = []

    for raw in required:
        expected = str(project_prefix / Path(raw))
        if expected not in names:
            errors.append(f"missing required entry: {raw}")

    for name in names:
        rel = Path(name)
        if rel.parts and rel.parts[0] == project.name:
            rel = Path(*rel.parts[1:])
        rel_posix = rel.as_posix()
        for pattern in banned:
            if fnmatch.fnmatch(rel_posix, pattern) or fnmatch.fnmatch(rel.name, pattern):
                errors.append(f"banned entry present: {rel_posix} matches {pattern}")

    if errors:
        raise SystemExit("\n".join(errors))


def main() -> int:
    args = parse_args()
    project = Path(args.project).expanduser().resolve()
    if not project.is_dir():
        raise SystemExit(f"Project directory not found: {project}")

    output = Path(args.output).expanduser().resolve() if args.output else project.parent / f"{project.name}-{args.mode}.zip"

    if args.mode == "share":
        files = collect_share_files(project, args.exclude)
    else:
        files = collect_runtime_files(project, args.include)

    write_zip(project, output, files)
    validate_zip(project, output, args.require, args.ban)

    print(f"OUTPUT {output}")
    print(f"MODE {args.mode}")
    print(f"FILE_COUNT {len(files)}")
    print(f"SIZE_BYTES {output.stat().st_size}")
    print("VALIDATION passed")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except FileNotFoundError as exc:
        print(str(exc), file=sys.stderr)
        raise SystemExit(1) from exc
