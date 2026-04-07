# 桌面引导

Active contributors: unavailable in this checkout（当前目录缺少 `.git` 元数据）。

桌面引导系统的任务很单一：把共享后端变成一个本地桌面窗口，并提供一个最小自检。它没有自己的业务状态，但它决定了桌面分发体验是否稳定。

## Purpose

这个系统负责动态加载服务模块、启动嵌入式 HTTP 服务、执行桌面自检，以及把 URL 交给 `pywebview`。

## Directory layout

```text
session-manager-desktop.py
├── load_session_manager()
├── start_embedded_server()
├── desktop_self_test()
├── parse_args()
└── main()
```

## Key abstractions

| File | Purpose |
|---|---|
| `session-manager-desktop.py` | 桌面入口和自检实现 |
| `session-manager.py` | 被动态加载的服务模块 |
| `requirements-desktop.txt` | 桌面运行依赖 |

## How it works

`main()` 会先加载共享模块，再根据参数决定是跑 `--self-test` 还是启动 `pywebview`。自检路径只要求 `/api/sessions` 返回 200，所以它是一个很快的连通性检查，而不是完整功能测试。

## Integration points

- 通过 `importlib.util.spec_from_file_location()` 动态加载 `session-manager.py`
- 通过 `create_server(port=0)` 复用共享 HTTP 服务
- 通过 `pywebview` 把本地 URL 包装成桌面窗口
- 通过 [部署与打包](../deployment.md) 被 `build-desktop.py` 调用

## Entry points for modification

窗口尺寸、GUI 后端、启动参数和自检逻辑都在 `session-manager-desktop.py`。如果你想减少桌面层的耦合，优先保持它只做“装配”，不要把业务逻辑挪进来。
