# 端点明细

所有端点都由 `session-manager.py` 的 `Handler` 实现，并默认通过本地地址 `127.0.0.1` 提供服务。前端主要通过 `fetch()` 调用这些端点。

## 端点表

| Method | Path | Purpose | Key source files |
|---|---|---|---|
| `GET` | `/api/sessions` | 返回会话摘要列表 | `session-manager.py`, `frontend/assets/app.js` |
| `GET` | `/api/session?workspace=&id=` | 返回单条会话的消息列表 | `session-manager.py`, `frontend/assets/app.js` |
| `GET` | `/api/search_messages?q=` | 搜索消息正文 | `session-manager.py`, `frontend/assets/app.js` |
| `GET` | `/api/cli_command?workspace=&id=` | 返回 CLI 恢复命令与 cwd | `session-manager.py`, `frontend/assets/app.js` |
| `POST` | `/api/open_cli` | 真正请求系统打开终端并运行恢复命令 | `session-manager.py`, `frontend/assets/app.js` |
| `DELETE` | `/api/delete?workspace=&id=` | 删除单条会话文件对 | `session-manager.py`, `frontend/assets/app.js` |
| `DELETE` | `/api/delete_empty` | 删除所有 0 消息会话 | `session-manager.py`, `frontend/assets/app.js` |

## 典型返回值

- `/api/sessions`：会话摘要数组，字段见 [数据模型](../reference/data-models.md)
- `/api/session`：消息数组，每条消息至少有 `timestamp`、`role`、`text`、`toolCalls`
- `/api/open_cli`：`{ ok: true/false, command, cwd, sessionId, error? }`

## 前端调用点

`frontend/assets/app.js` 中可直接找到这些调用：

- `loadSessions()` → `/api/sessions`
- `loadSessionDetail()` → `/api/session` + `/api/cli_command`
- `openCli()` → `/api/open_cli`
- `clearEmptySessions()` → `/api/delete_empty`
- 删除确认按钮 → `/api/delete`

## 相关页面

- [后端 API 系统](../systems/backend-api.md)
- [会话浏览](../features/session-browsing.md)
- [清理与 CLI 动作](../features/cleanup-and-cli-actions.md)
