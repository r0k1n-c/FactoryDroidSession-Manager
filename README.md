# Factory Droid Session Manager

Factory Droid Session Manager 是一个用于管理本地 Factory Droid 会话数据的可视化工具，支持：

- 网页端本地运行
- 桌面端本地运行
- macOS / Windows / Linux 本机原生打包

当前代码结构已按前后端分离整理：

- `session-manager.py`：后端服务与本地 API
- `frontend/index.html`：前端页面（HTML / CSS / JavaScript）
- `frontend/assets/style.css`：前端样式
- `frontend/assets/app.js`：前端交互逻辑
- `session-manager-desktop.py`：桌面端入口
- `build-desktop.py`：统一构建入口

## 功能概览

- 自动扫描本地 Droid sessions 目录
- 会话列表、搜索、排序、工作区筛选
- 会话详情查看
- 在 CLI 中打开会话、展示并复制恢复命令
- 自动刷新与刷新间隔自定义
- 模型 / 工作区 / 会话总量等数据分析
- 工作区总 token 用量排行（输入 / 输出 / 缓存分开统计）
- 删除单个会话与清理空会话

## 运行依赖

### 网页端

网页端后端仅依赖 Python 标准库，不需要额外安装第三方包。

### 桌面端

- `requirements-desktop.txt`：桌面运行依赖
- `requirements-build.txt`：桌面打包依赖

如果需要一次性安装：

```bash
python3 -m pip install --user -r requirements-desktop.txt -r requirements-build.txt
```

## 本地使用

### 网页端启动

```bash
python3 session-manager.py
```

可选：

```bash
python3 session-manager.py 18901 --sessions-dir /path/to/sessions
```

说明：

- 第一个位置参数可指定端口
- `--sessions-dir` 可覆盖自动发现的会话目录
- 默认会自动打开浏览器
- 如果不想自动打开浏览器，可设置 `FSM_NO_BROWSER=1`

也可以使用脚本：

```bash
./restart-session-manager.sh
```

### 桌面端启动

```bash
python3 session-manager-desktop.py
```

可选：

```bash
python3 session-manager-desktop.py --sessions-dir /path/to/sessions
python3 session-manager-desktop.py --self-test
```

也可以使用启动脚本：

- macOS / Linux：`./launch-session-manager-desktop.sh`
- Windows：`launch-session-manager-desktop.bat`

## 会话目录与环境变量

支持以下环境变量覆盖 sessions 路径：

- `FSM_SESSIONS_DIR`
- `DROID_SESSIONS_DIR`
- `FACTORY_SESSIONS_DIR`

也支持通过 Factory 目录自动发现：

- `FSM_FACTORY_HOME`
- `DROID_HOME`
- `FACTORY_HOME`

如果需要指定 Droid CLI 路径（用于“在 CLI 中打开”）：

- `FSM_DROID_BIN`
- `DROID_BIN`
- `FACTORY_DROID_BIN`

## 本地多机原生构建

建议分别在目标系统本机执行构建：

- macOS 机器构建 `.app`
- Windows 机器构建 `.exe`
- Linux 机器构建 Linux 可执行包

这样对 `PyInstaller + pywebview` 最稳。

## 构建脚本

三个平台脚本现在都只是薄包装，会统一转发到 `build-desktop.py`，因此行为保持一致。

### macOS

```bash
./build-local-macos.sh
```

可追加 `build-desktop.py` 的参数，例如：

```bash
./build-local-macos.sh --skip-install --no-archive
```

产物：

- `dist/macos/FactoryDroidSessionManager.app`
- `release/FactoryDroidSessionManager-macos.zip`

### Windows

```bat
build-local-windows.bat
```

产物：

- `dist\windows\FactoryDroidSessionManager.exe`
- `release\FactoryDroidSessionManager-windows.zip`

### Linux

```bash
./build-local-linux.sh
```

产物：

- `dist/linux/FactoryDroidSessionManager`
- `release/FactoryDroidSessionManager-linux.tar.gz`

## 脚本会做什么

默认情况下，`build-desktop.py` 会自动执行：

1. 安装构建依赖
2. 运行桌面端自检
3. 调用 PyInstaller 打包
4. 输出产物路径

如果不想用平台脚本，也可以直接执行统一构建入口：

```bash
python3 build-desktop.py
```

可选参数：

- `--skip-install`
- `--skip-self-test`
- `--no-archive`

例如：

```bash
python3 build-desktop.py --skip-install --no-archive
```

## 本地运行

网页端：

```bash
python3 session-manager.py
```

桌面端：

```bash
python3 session-manager-desktop.py
```

## 说明

- `sessions` 路径不是写死的，支持自动发现和 `--sessions-dir` 手动覆盖
- Windows / macOS / Linux 最好各自在本机原生构建，不建议单机跨平台硬编译
- 桌面打包时会一并带上后端脚本与 `frontend/` 前端资源
- 桌面端通过 `pywebview` 嵌入本地后端服务
