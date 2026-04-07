# 桌面端

Active contributors: unavailable in this checkout（当前目录缺少 `.git` 元数据）。

桌面端不是另一套产品，而是网页端的本地壳。`session-manager-desktop.py` 会把同一套后端逻辑嵌入到 `pywebview` 窗口里，因此桌面版的价值主要在“分发方式”和“原生窗口体验”，不在业务差异。

## Purpose

桌面端让用户不需要手动管理浏览器标签页和本地服务命令，也为后续原生打包提供入口。

## Directory layout

```text
session-manager-desktop.py
session-manager.py
frontend/
requirements-desktop.txt
```

## Key abstractions

| File | Purpose |
|---|---|
| `session-manager-desktop.py` | 加载后端模块、启动嵌入式服务、创建 webview 窗口 |
| `requirements-desktop.txt` | 定义 `pywebview` 依赖 |
| `session-manager.py` | 被桌面端动态加载的共享服务实现 |

## How it works

`load_session_manager()` 动态导入 `session-manager.py`，`start_embedded_server()` 启动随机端口的本地服务，随后 `webview.create_window()` 打开一个原生窗口指向该本地 URL。

## Integration points

- 业务 API 复用 [后端 API](../systems/backend-api.md)
- 会话解析复用 [会话发现](../systems/session-discovery.md)
- 打包流程由 [部署与打包](../deployment.md) 驱动

## Entry points for modification

如果你需要改桌面窗口大小、GUI 后端选择、启动顺序或自检逻辑，直接改 `session-manager-desktop.py`。如果你改的是数据或接口，不要在桌面端重复实现，去改共享后端。
