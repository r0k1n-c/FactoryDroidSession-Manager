@echo off
setlocal
set "SCRIPT_DIR=%~dp0"

where py >nul 2>nul
if %ERRORLEVEL% EQU 0 (
  set "PYTHON_CMD=py -3"
) else (
  where python >nul 2>nul
  if %ERRORLEVEL% NEQ 0 (
    echo Python not found.
    exit /b 1
  )
  set "PYTHON_CMD=python"
)

call %PYTHON_CMD% "%SCRIPT_DIR%build-desktop.py" %*
exit /b %ERRORLEVEL%
