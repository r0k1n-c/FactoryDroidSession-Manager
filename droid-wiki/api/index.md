# API

这个项目的 API 是本地 UI 的内部协议，不是公开服务接口。它的设计目标不是向外兼容，而是最短路径支撑 `frontend/assets/app.js` 和桌面端页面。

## 包含的页面

- [端点明细](endpoints.md)

## 范围

当前 API 只覆盖三类事情：

- 读取会话和消息
- 生成或触发 CLI 恢复动作
- 删除会话数据

所有路由都定义在 `session-manager.py` 的 `Handler` 类中。详细参数和返回结构见 [端点明细](endpoints.md)，而安全边界见 [安全](../security.md)。
