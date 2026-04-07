# 清理与 CLI 动作

Active contributors: unavailable in this checkout（当前目录缺少 `.git` 元数据）。

这个功能组包含所有会改变本地状态或触发系统动作的能力：删除单条会话、清理空会话、生成 CLI 恢复命令、请求终端打开会话。这些动作虽然都不复杂，但它们是整个工具里最需要谨慎处理的部分。

## Purpose

让用户在浏览会话时顺手做管理动作，而不必回到文件系统或手动拼接 `droid -r <sid>` 命令。

## Directory layout

```text
session-manager.py
frontend/assets/app.js
frontend/index.html
```

## Key abstractions

| File | Purpose |
|---|---|
| `session-manager.py` | `cli_launch_data_for_session()`、`launch_cli_for_session()`、`delete_session()` |
| `frontend/assets/app.js` | `openCli()`、删除确认框、`clearEmptySessions()` |
| `frontend/index.html` | 删除确认层和详情区按钮 |

## How it works

- 复制命令：前端读取 `GET /api/cli_command` 的结果
- 打开 CLI：前端向 `POST /api/open_cli` 发送 workspace + id
- 删除会话：前端请求 `DELETE /api/delete`
- 清空空会话：前端请求 `DELETE /api/delete_empty`

`delete_empty` 的定义很直接：`messageCount == 0` 的会话都会被删除。

## Integration points

- 依赖 [后端 API](../systems/backend-api.md) 暴露副作用接口
- 依赖 [会话浏览](session-browsing.md) 提供上下文和详情弹窗
- 命令生成依赖 `resolve_droid_executable()` 与 `shell_resume_command()`

## Entry points for modification

如果要改 CLI 命令格式或终端启动方式，从 `session-manager.py` 的 CLI 相关函数开始；如果只想调整确认弹窗或按钮文案，从 `frontend/assets/app.js` 和 `frontend/index.html` 开始。改删除逻辑时务必先看 [安全](../security.md)。
