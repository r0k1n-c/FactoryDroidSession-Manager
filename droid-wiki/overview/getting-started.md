# 快速开始

这个项目的启动路径很短：网页端只需要 Python 标准库，桌面端额外需要 `pywebview`，打包时再加上 `PyInstaller`。如果你只是想看会话列表，先跑 `python3 session-manager.py` 即可。

下面的步骤按“网页端 → 桌面端 → 打包”排序。理解这些命令后，再看 [开发流程](../how-to-contribute/development-workflow.md) 和 [工具链](../how-to-contribute/tooling.md) 会更顺手。

## 前置条件

- Python 3
- 可访问本地 Droid / Factory 会话目录
- 桌面版需要 `pywebview`
- 打包需要 `PyInstaller`

依赖文件：

| File | Purpose |
|---|---|
| `requirements-desktop.txt` | 桌面运行依赖（`pywebview>=5.0`） |
| `requirements-build.txt` | 打包依赖（`pyinstaller>=6.0`） |

## 网页端启动

```bash
python3 session-manager.py
```

可选参数：

```bash
python3 session-manager.py 18901 --sessions-dir /path/to/sessions
```

运行行为：

- 默认监听 `127.0.0.1:18901`
- 默认会自动打开浏览器
- 若设置 `FSM_NO_BROWSER=1`，则不自动打开浏览器
- 若未显式指定端口，会尝试停止旧的同项目进程

也可以用包装脚本：

```bash
./restart-session-manager.sh
```

## 桌面端启动

先安装桌面依赖：

```bash
python3 -m pip install --user -r requirements-desktop.txt
```

启动命令：

```bash
python3 session-manager-desktop.py
```

常见参数：

```bash
python3 session-manager-desktop.py --sessions-dir /path/to/sessions
python3 session-manager-desktop.py --self-test
```

包装脚本：

- macOS / Linux：`./launch-session-manager-desktop.sh`
- Windows：`launch-session-manager-desktop.bat`

## 打包桌面应用

一次安装运行依赖与打包依赖：

```bash
python3 -m pip install --user -r requirements-desktop.txt -r requirements-build.txt
```

统一打包入口：

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

平台包装脚本：

- `./build-local-macos.sh`
- `./build-local-linux.sh`
- `build-local-windows.bat`

## 会话目录与 CLI 相关环境变量

支持的 sessions 路径变量：

- `FSM_SESSIONS_DIR`
- `DROID_SESSIONS_DIR`
- `FACTORY_SESSIONS_DIR`

支持的 Factory 主目录变量：

- `FSM_FACTORY_HOME`
- `DROID_HOME`
- `FACTORY_HOME`

支持的 Droid CLI 路径变量：

- `FSM_DROID_BIN`
- `DROID_BIN`
- `FACTORY_DROID_BIN`

这些配置的细节整理在 [配置参考](../reference/configuration.md)。

## 自检建议

这个仓库没有完整单元测试套件，最像自动测试的是桌面自检：

```bash
python3 session-manager-desktop.py --self-test
```

这个自检会启动嵌入式服务，并对 `/api/sessions` 做一次 HTTP 访问。更多细节见 [测试页面](../how-to-contribute/testing.md)。
