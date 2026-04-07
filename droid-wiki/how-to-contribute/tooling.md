# 工具链

这个仓库的工具链非常克制：Python 负责服务、桌面封装和打包；前端是原生静态资源；CI 只做跨平台桌面构建。没有 npm、没有前端打包器、没有测试框架矩阵。

## 核心工具

| Tool | Where | Purpose |
|---|---|---|
| Python 3 | 全仓库 | 运行服务、桌面入口、打包脚本 |
| `pywebview` | `requirements-desktop.txt` | 桌面窗口封装 |
| `PyInstaller` | `requirements-build.txt` | 生成平台可执行产物 |
| GitHub Actions | `.github/workflows/build-desktop.yml` | 三平台桌面构建 |
| Project skill | `.factory/skills/project-packager/` | 生成分享包 / 运行包的 Droid skill |

## 没有出现的工具

也值得注意当前没有这些东西：

- 没有 npm / pnpm / yarn
- 没有 pytest 配置
- 没有 Dockerfile
- 没有数据库迁移或 ORM

这些“缺席”本身也是一种设计：项目故意压低依赖和部署门槛。

## CI 行为

`.github/workflows/build-desktop.yml` 会在三平台上做四件事：

1. checkout
2. 安装 Python 依赖
3. 运行 `session-manager-desktop.py --self-test`
4. 运行 `build-desktop.py`

产物通过 `actions/upload-artifact@v4` 上传到 workflow artifacts。

## 本地技能文件

仓库里的 `.factory/skills/project-packager/` 不是产品运行时的一部分，但它说明这个项目把“交付项目压缩包”也作为仓库能力来维护。要理解这部分，可以结合 [部署与打包](../deployment.md) 看。

## 相关页面

- [开发流程](development-workflow.md)
- [部署与打包](../deployment.md)
- [依赖参考](../reference/dependencies.md)
