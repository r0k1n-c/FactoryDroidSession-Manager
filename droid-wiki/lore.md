# 演化记录

这份 checkout 没有 `.git/` 目录，所以本页不能像标准 wiki 那样基于 commit 历史还原长期演化。下面的时间线主要来自文件修改时间和 `README.md` / `项目介绍.md` 的描述，因此可信的是“当前代码在 2026-04-04 这一天经历过集中整理”，而不是更久远的演化细节。

## 可以确认的阶段

### Apr 2026 — 单体本地工具成型

`README.md` 明确写到“当前代码结构已按前后端分离整理”，并列出了：

- `session-manager.py`
- `frontend/index.html`
- `frontend/assets/style.css`
- `frontend/assets/app.js`
- `session-manager-desktop.py`
- `build-desktop.py`

这说明当前形态已经是一个稳定的“三件套”：本地 HTTP 服务、静态前端、桌面封装。

### 2026-04-04 01:47 — 桌面入口落地

`session-manager-desktop.py` 的修改时间是 `2026-04-04T01:47:00`。从文件内容看，它已经包含：

- 动态加载 `session-manager.py`
- `--self-test`
- `pywebview` 窗口创建
- Windows 下 `edgechromium` GUI 选择

这更像“完整桌面入口一次成型”，而不是一个占位脚本。

### 2026-04-04 02:36 — 统一打包入口补齐

`build-desktop.py` 的修改时间是 `2026-04-04T02:36:33`。这个脚本已经统一了：

- 依赖安装
- 自检
- PyInstaller 打包
- macOS / Windows / Linux 归档输出

根目录里的三个平台包装脚本只做转发，说明打包流程已经被有意收敛到单一入口。

### 2026-04-04 13:24 — 后端与前端集中刷新

`session-manager.py`、`frontend/index.html`、`frontend/assets/app.js` 都在 `13:24` 左右更新。现在的结果包括：

- `/api/search_messages` 搜索接口
- 删除和清理空会话接口
- CLI 打开与复制命令
- 工作区和 token 统计图表
- 中英切换、主题切换、自动刷新

这看起来像一次把“浏览器面板 + 数据分析 + 清理工具”整合到一起的功能收束。

## 长寿模块与稳定边界

虽然缺少长期 git 历史，但从当前结构可以看出几个边界已经很稳定：

- `session-manager.py` 是唯一业务后端
- `frontend/` 是唯一 UI 层
- 桌面端不重复实现业务，只嵌入现有服务
- 构建链路统一从 `build-desktop.py` 进入

这些边界也解释了为什么 [设计决策](background/design-decisions.md) 以“复用而不是复制”为主。

## 我们不知道的部分

由于 git 历史缺失，本页无法确认：

- 更早的命名演变
- 旧版 UI 是否存在框架迁移
- 是否经历过 Flask / FastAPI 等后端方案
- 哪些功能是先有桌面版还是先有网页版

如果后续在完整仓库中重新生成 wiki，应把本页重写为基于 commit 时间线、标签和大规模改动的正式版本。当前最值得继续看的页面是 [背景](background/index.md) 与 [清理机会](cleanup-opportunities.md)。
