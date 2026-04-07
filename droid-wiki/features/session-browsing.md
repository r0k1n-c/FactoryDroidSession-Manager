# 会话浏览

Active contributors: unavailable in this checkout（当前目录缺少 `.git` 元数据）。

会话浏览是产品的主能力。它负责把扫描得到的会话摘要变成列表、卡片、详情弹窗、搜索结果和工作区筛选视图。

## Purpose

这个功能让用户快速找到某个会话、查看消息内容，并在工作区、标题、模型、路径和消息正文之间切换不同的查找方式。

## Directory layout

```text
frontend/assets/app.js
session-manager.py
frontend/index.html
```

## Key abstractions

| File | Purpose |
|---|---|
| `frontend/assets/app.js` | `loadSessions()`、`renderSessions()`、`loadSessionDetail()`、消息搜索节流 |
| `session-manager.py` | `/api/sessions`、`/api/session`、`/api/search_messages` |
| `frontend/index.html` | 搜索框、列表容器、详情弹窗 |

## How it works

前端启动后先请求 `/api/sessions`，然后根据当前搜索词、工作区筛选、排序方式和消息搜索命中情况做前端过滤。打开详情时，再并行请求：

- `GET /api/session?workspace=&id=`
- `GET /api/cli_command?workspace=&id=`

这样详情弹窗可以同时显示消息内容和 CLI 恢复命令。

## Integration points

- 依赖 [会话发现](../systems/session-discovery.md) 提供摘要数据
- 依赖 [后端 API](../systems/backend-api.md) 提供详情和搜索接口
- 与 [清理与 CLI 动作](cleanup-and-cli-actions.md) 共用详情弹窗和按钮区

## Entry points for modification

改列表筛选、排序、详情展示或消息搜索时，先改 `frontend/assets/app.js`。如果你需要增加新的详情字段，再回到 `session-manager.py` 扩展接口返回值。
