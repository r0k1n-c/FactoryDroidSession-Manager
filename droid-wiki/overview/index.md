# Factory Droid Session Manager 概览

这份 wiki 说明 `FactoryDroidSession-Manager` 如何把本地 Droid 会话目录变成一个可浏览、可分析、可清理的本地工具。项目的核心是 `session-manager.py` 提供的本地 HTTP 服务，以及 `frontend/` 下的纯静态前端；桌面版 `session-manager-desktop.py` 只是把同一套服务嵌入到 `pywebview` 窗口中。

这个仓库没有 npm、数据库或远程服务依赖，主要依赖 Python 标准库、`pywebview` 和 `PyInstaller`。如果你第一次接触这个项目，先看 [系统架构](architecture.md) 和 [快速开始](getting-started.md)，再根据兴趣跳到 [网页端](../apps/web.md)、[桌面端](../apps/desktop.md) 或 [后端 API](../systems/backend-api.md)。

## 它解决什么问题

直接在 `~/.factory/sessions/` 里翻 `.jsonl` 与 `.settings.json` 文件很低效。这个项目把这些原始文件整理成：

- 会话列表、工作区筛选、排序和全文消息搜索
- 会话详情查看和 CLI 恢复命令生成
- Token、模型、工作区、大小、活跃度统计
- 单条删除和空会话清理
- 本地桌面封装与跨平台打包

## 快速导航

- [系统架构](architecture.md)
- [快速开始](getting-started.md)
- [术语表](glossary.md)
- [网页端](../apps/web.md)
- [桌面端](../apps/desktop.md)
- [会话发现](../systems/session-discovery.md)
- [API 端点](../api/endpoints.md)
- [部署与打包](../deployment.md)

## 关键源码文件

| File | Purpose |
|---|---|
| `README.md` | 项目定位、运行方式、构建方式与产物说明 |
| `session-manager.py` | 本地 HTTP 服务、会话扫描、CLI 集成、删除操作 |
| `frontend/index.html` | 网页端页面骨架 |
| `frontend/assets/app.js` | 前端交互、渲染、分析图表、自动刷新 |
| `session-manager-desktop.py` | 桌面端入口，嵌入同一套后端服务 |
| `build-desktop.py` | 桌面打包、自检和归档流程 |

## 目录地图

```text
FactoryDroidSession-Manager/
├── session-manager.py
├── session-manager-desktop.py
├── build-desktop.py
├── frontend/
│   ├── index.html
│   └── assets/
│       ├── app.js
│       └── style.css
├── .github/workflows/build-desktop.yml
├── requirements-desktop.txt
├── requirements-build.txt
└── .factory/skills/project-packager/
```

## 读代码时的心智模型

把项目看成三层最容易理解：

1. `session-manager.py` 负责扫描磁盘上的会话文件，并通过本地 API 暴露结果。
2. `frontend/assets/app.js` 负责拉取 API、渲染列表和分析图表、处理删除与 CLI 操作。
3. `session-manager-desktop.py` 负责在桌面窗口里复用第 1 层，不重新实现任何业务逻辑。

接下来最值得看的页面是 [系统架构](architecture.md) 和 [会话浏览功能](../features/session-browsing.md)。
