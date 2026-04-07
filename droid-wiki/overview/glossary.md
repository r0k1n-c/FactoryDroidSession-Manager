# 术语表

这个项目围绕 Droid 会话文件工作，术语大多来自底层会话目录和界面展示。先理解这些词，再看 [会话发现](../systems/session-discovery.md) 或 [数据模型](../reference/data-models.md) 会轻松很多。

## 术语

- **Session**：一条 Droid 会话，通常由 `<id>.jsonl` 与 `<id>.settings.json` 配对组成。
- **Workspace**：`SESSIONS_DIR` 下的一级目录。前端用它做筛选与排行，后端也把它作为 API 参数的一部分。
- **Transcript / JSONL**：消息流文件。`session-manager.py` 通过 `read_session_messages()` 解析它，并从首行提取标题、cwd 等信息。
- **Settings**：`<id>.settings.json`。主要提供 `model`、`tokenUsage`、`assistantActiveTimeMs` 等摘要字段。
- **Canonical workspace**：当会话文件被符号链接进多个 workspace 时，后端用真实路径推导出的归一化工作区名称。
- **CLI 恢复命令**：后端通过 `shell_resume_command()` 生成的 `droid -r <sid>` 命令，用于在终端里恢复会话。
- **Self-test**：`session-manager-desktop.py --self-test` 提供的轻量自检，会验证桌面端能否成功启动嵌入式服务并访问 `/api/sessions`。
- **Embedded server**：桌面端内部启动的本地 HTTP 服务，由 `start_embedded_server()` 创建，供 `pywebview` 页面访问。
- **Auto refresh**：前端定时重新请求 `/api/sessions` 的机制，刷新间隔保存在 `localStorage` 的 `fsm-refresh-interval-ms`。

## 相关页面

- [系统架构](architecture.md)
- [会话浏览功能](../features/session-browsing.md)
- [配置参考](../reference/configuration.md)
- [数据模型](../reference/data-models.md)
