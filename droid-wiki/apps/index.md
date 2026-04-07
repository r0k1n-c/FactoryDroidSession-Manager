# Apps

Active contributors: unavailable in this checkout（当前目录缺少 `.git` 元数据）。

这个仓库有两个面向用户的运行形态：网页端和桌面端。两者共享同一套业务后端，所以 `apps/` 这一节主要关心“用户如何进入系统”，而不是重新解释扫描或 API 细节。

## 包含的页面

- [网页端](web.md)
- [桌面端](desktop.md)

## 如何划分

- 网页端 = `session-manager.py` + `frontend/`
- 桌面端 = `session-manager-desktop.py` + 嵌入式后端 + `pywebview`

如果你更关心内部实现，下一步看 [Systems](../systems/index.md)；如果你关心用户能力，看 [Features](../features/index.md)。
