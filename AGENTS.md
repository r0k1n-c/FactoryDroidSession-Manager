# 仓库指南

## 项目结构与模块组织
- `session-manager.py` 是主本地 HTTP 服务，负责会话发现、API 路由和文件操作。
- `session-manager-desktop.py` 是轻量桌面壳，使用 `pywebview` 嵌入同一套后端。
- `build-desktop.py` 负责用 PyInstaller 打包；根目录的 shell / batch 脚本是各平台的包装入口。
- `frontend/` 是零构建静态前端，核心文件为 `index.html`、`assets/app.js` 和 `assets/style.css`。
- `droid-wiki/` 保存项目资料与贡献说明，`.github/workflows/` 保存桌面构建 CI。

## 构建、测试与开发命令
- `python3 session-manager.py`：本地启动 Web 版。
- `python3 session-manager.py 18901 --sessions-dir /path/to/sessions`：指定端口或会话目录运行。
- `python3 session-manager-desktop.py`：启动桌面版。
- `python3 session-manager-desktop.py --self-test`：运行内置桌面冒烟测试。
- `python3 -m pip install --user -r requirements-desktop.txt -r requirements-build.txt`：安装桌面运行与打包依赖。
- `python3 build-desktop.py --skip-install`：在依赖已安装时执行桌面打包。

## 代码风格与命名约定
- 保持当前低依赖结构：后端逻辑放在 `session-manager.py`，桌面专属行为放在 `session-manager-desktop.py`，UI 逻辑放在 `frontend/assets/app.js`。
- Python 使用 4 空格缩进，优先沿用标准库方案，避免无必要的新依赖。
- 前端继续使用原生 HTML / CSS / JS，不引入框架式写法。
- Python 函数和变量使用描述性 `snake_case`；根目录脚本文件延续现有连字符命名。

## 测试指南
- 当前仓库没有 `pytest` 或独立自动化测试目录。
- `python3 session-manager-desktop.py --self-test` 是必跑的自动检查。
- 如果改动涉及 UI 或 API，再做一次手工冒烟：确认 Web 页面可打开、`/api/sessions` 可返回数据，且搜索、详情、删除或清理流程在受影响范围内正常。

## 提交与合并请求规范
- 当前目录不是 Git 仓库，无法读取历史提交；默认使用简短、祈使句式提交信息，必要时可使用 `fix:`、`feat:` 这类前缀。
- PR 需要说明改动范围（`web`、`desktop`、`build` 或 `wiki`），列出已执行的验证命令；如有可见 UI 变更，请附截图。

## 安全与配置提示
- API 面向本地使用，默认绑定 `127.0.0.1`；未经过明确安全评审前，不要扩大暴露范围。
- 处理删除接口或 sessions 路径时，优先复用现有路径规范化辅助函数，不要新增零散的文件系统逻辑。
