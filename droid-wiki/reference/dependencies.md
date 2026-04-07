# 依赖

这个仓库的依赖边界非常清晰：网页端运行只靠 Python 标准库，桌面运行增加 `pywebview`，打包再增加 `PyInstaller`。前端没有第三方包管理器。

## 运行依赖

| Dependency | Where | Why |
|---|---|---|
| Python 标准库 | `session-manager.py` | HTTP 服务、JSON 解析、文件系统访问、浏览器打开 |
| `pywebview>=5.0` | `requirements-desktop.txt` | 桌面窗口封装 |
| `pyinstaller>=6.0` | `requirements-build.txt` | 生成跨平台桌面构建产物 |

## 标准库使用最重的模块

`session-manager.py` 明确依赖：

- `http.server`
- `urllib.parse`
- `json`
- `subprocess`
- `shutil`
- `signal`
- `webbrowser`

这些模块基本解释了项目的能力边界：本地 HTTP、文件扫描、系统命令与浏览器打开。

## 没有引入的依赖

同样重要的是，这个项目没有：

- 前端框架
- ORM / 数据库驱动
- Web 框架
- 测试框架依赖
- 打包以外的构建系统

这让仓库保持轻量，但也意味着很多工程能力需要靠约定而不是框架来维持。进一步的工程建议见 [模式与约定](../how-to-contribute/patterns-and-conventions.md) 与 [清理机会](../cleanup-opportunities.md)。
