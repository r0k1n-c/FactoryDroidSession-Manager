# 安全

这个项目的安全边界很明确：它是本地工具，默认监听 `127.0.0.1`，操作对象是本地会话目录。它没有登录、鉴权或租户隔离设计，因此安全重点不在网络对抗，而在“不要误删文件”和“不要让本地副作用超出预期”。

## 主要边界

### 1. 服务只绑定本地地址

`create_server(host='127.0.0.1', port=PORT)` 明确把服务绑定到 loopback。这样即使没有认证，接口也默认只对本机开放。

### 2. 静态资源有路径穿越保护

`frontend_asset_path()` 会：

- `realpath()` 解析真实路径
- 比较 `commonpath()` 是否仍在 `FRONTEND_DIR` 内
- 不允许越出前端目录

这避免了通过 `/assets/...` 读到任意本地文件。

### 3. 删除接口没有二次鉴权

`DELETE /api/delete` 和 `DELETE /api/delete_empty` 都是本地高权限动作。当前设计假设调用者就是本机 UI，因此没有 CSRF / auth 保护。只要服务暴露给非本机环境，这会立即成为风险点。

### 4. CLI 启动会触发本地终端

`POST /api/open_cli` 最终会走到 `launch_terminal_command()`。这不是任意命令执行接口，因为命令是由 `shell_resume_command()` 根据 `cwd`、`sid` 和已解析出的 `droid` 路径构造的，但它仍然属于“有副作用的系统级操作”。

## 具体风险

| Risk | Current mitigation | Remaining concern |
|---|---|---|
| 暴露到局域网 | 只绑定 `127.0.0.1` | 若未来改成 `0.0.0.0`，当前接口不安全 |
| 静态资源路径穿越 | `frontend_asset_path()` 做 `commonpath` 校验 | 仅覆盖静态资源路径 |
| 误删会话 | 前端确认框 + workspace/id 精确定位 | 没有回收站或恢复机制 |
| 误启 CLI | 前端明确按钮触发 | 终端启动结果依赖本机环境 |

## 修改时要注意

- 不要把服务绑定地址改到非 loopback，除非你同时补齐认证与权限控制
- 任何新增副作用接口都应保持和 `open_cli` / `delete_*` 一样显式
- 如果未来要支持远程访问，当前所有接口都需要重新审视

相关实现入口在 [后端 API](systems/backend-api.md) 与 [清理与 CLI 动作](features/cleanup-and-cli-actions.md)。
