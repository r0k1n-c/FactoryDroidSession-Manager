# 数据模型

项目没有显式 schema 文件，但运行时有几种非常稳定的数据结构：会话摘要、消息条目、CLI 启动返回值。理解这些结构就能看懂大部分前后端交互。

## 会话摘要（`/api/sessions`）

来源：`session-manager.py` 的 `scan_sessions()`。

| Field | Meaning |
|---|---|
| `id` | 会话 id |
| `workspace` | 归一化后的工作区名 |
| `cwd` | 会话工作目录 |
| `title` | 标题，优先来自 transcript 首行 |
| `owner` | 首行里的 owner |
| `model` | `.settings.json` 中记录的模型 |
| `reasoningEffort` | 推理强度 |
| `autonomyLevel` | 自主级别 |
| `tokenUsage` | 输入/输出/缓存/思考 token 汇总 |
| `assistantActiveTimeMs` | 活跃时长 |
| `fileSize` | transcript 文件大小 |
| `messageCount` | message 类型条目数 |
| `lastModified` | ISO 时间字符串 |
| `lastModifiedTs` | 时间戳，用于排序 |

## 消息条目（`/api/session`）

来源：`message_entry_from_obj()`。

| Field | Meaning |
|---|---|
| `timestamp` | 原始消息时间 |
| `role` | user / assistant 等角色 |
| `text` | 解析后的可展示文本 |
| `toolCalls` | 本条消息关联的工具调用名列表 |

它会主动过滤 `<system-reminder>` 文本，并在没有普通文本时退化成 thinking summary 或 tool 使用说明。

## CLI 启动数据

来源：`cli_launch_data_for_session()` 与 `launch_cli_for_session()`。

| Field | Meaning |
|---|---|
| `command` | 最终执行的 shell 命令 |
| `cwd` | 终端启动目录 |
| `sessionId` | 当前会话 id |
| `launcher` | 测试模式下返回的底层启动器信息 |

## 相关页面

- [API 端点](../api/endpoints.md)
- [会话浏览](../features/session-browsing.md)
- [分析与统计](../features/analytics.md)
