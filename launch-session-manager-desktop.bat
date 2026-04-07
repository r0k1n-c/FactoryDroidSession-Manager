@echo off
setlocal
set "SCRIPT_DIR=%~dp0"

where py >nul 2>nul
if %ERRORLEVEL% EQU 0 (
  py -3 "%SCRIPT_DIR%session-manager-desktop.py" %*
  exit /b %ERRORLEVEL%
)

where python >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
  echo Python not found.
  exit /b 1
)

python "%SCRIPT_DIR%session-manager-desktop.py" %*
exit /b %ERRORLEVEL%
