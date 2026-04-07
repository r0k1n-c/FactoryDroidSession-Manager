# 模式与约定

这个仓库最明显的约定是“少层级、少依赖、少魔法”。业务代码集中在少数文件里，但每个文件都围绕明确边界组织：后端在 `session-manager.py`，桌面封装在 `session-manager-desktop.py`，打包在 `build-desktop.py`，前端全部在 `frontend/`。

## 约定 1：共享后端，而不是复制逻辑

网页端和桌面端共用一套后端逻辑。桌面端通过 `load_session_manager()` 动态加载 `session-manager.py`，而不是维护第二套 API。

这让改动路径非常清晰：如果是业务数据问题，优先改 `session-manager.py`；如果只是桌面窗口行为，才去动 `session-manager-desktop.py`。

## 约定 2：前端零构建

`frontend/index.html` + `frontend/assets/app.js` + `frontend/assets/style.css` 就是完整前端。没有 bundler，也没有组件框架。

这带来两个后果：

- 改 UI 很直接，刷新页面即可
- 复杂交互容易继续堆在 `app.js` 里，需要主动控体积

## 约定 3：API 只服务本地 UI

当前 API 不是公共接口，而是本地 UI 的内部协议。它不做认证，也没有版本控制，默认只绑定 `127.0.0.1`。因此写接口时应优先考虑：

- 是否足够简单直接
- 是否能和前端一一对应
- 是否会误伤本地文件

## 约定 4：副作用操作显式分离

读取接口主要在 `GET /api/*`；有副作用的操作则单独走：

- `POST /api/open_cli`
- `DELETE /api/delete`
- `DELETE /api/delete_empty`

这种分离虽然简单，但已经足够让调用方和维护者一眼知道哪里会真正改文件或启动终端。

## 约定 5：平台差异包在边缘层

与系统平台相关的逻辑主要集中在：

- `resolve_droid_executable()`
- `available_linux_terminal_launchers()`
- `launch_terminal_command()`
- `build-desktop.py` 里的 `platform_tag()` / `bundle_path()` / `archive_bundle()`

也就是说，大多数业务逻辑不需要关心平台差异。

## 继续阅读

- [后端 API](../systems/backend-api.md)
- [桌面引导](../systems/desktop-bootstrap.md)
- [部署与打包](../deployment.md)
