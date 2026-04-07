# 如何参与

这个仓库最适合采用“按层修改”的方式参与：先确定你改的是后端扫描/API、前端交互、桌面封装，还是构建流程。因为项目没有复杂框架，改动通常会直接落在 1 到 3 个关键文件里，所以先分层再动手，比先全局搜索更高效。

如果你是第一次改这个项目，推荐顺序是：

1. 读 [概览](../overview/index.md) 和 [系统架构](../overview/architecture.md)
2. 根据目标跳到 [网页端](../apps/web.md) 或 [桌面端](../apps/desktop.md)
3. 需要改 API 时看 [后端 API](../systems/backend-api.md)
4. 改完后至少跑一遍 [测试](testing.md) 中提到的自检和手工 smoke test

## 工作分区

- 页面与交互：`frontend/index.html`、`frontend/assets/app.js`、`frontend/assets/style.css`
- 本地服务：`session-manager.py`
- 桌面窗口：`session-manager-desktop.py`
- 打包与归档：`build-desktop.py`、`.github/workflows/build-desktop.yml`

## 完成定义

对这个项目来说，一次改动至少应满足：

- 目标层面的入口能跑起来
- 如果改了桌面相关逻辑，`--self-test` 仍然通过
- 如果改了前端或 API，列表页、详情页、刷新和删除动作没有明显回归
- 更新必要的本地说明文档

继续阅读：

- [开发流程](development-workflow.md)
- [测试](testing.md)
- [调试](debugging.md)
- [模式与约定](patterns-and-conventions.md)
- [工具链](tooling.md)
