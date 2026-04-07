# 测试

这个仓库没有专门的单元测试或集成测试目录，所以测试策略是“一个自动自检 + 一组手工 smoke test”。自动覆盖面不大，但足够验证桌面入口是否还能成功带起后端服务。

## 自动测试：桌面自检

入口在 `session-manager-desktop.py` 的 `desktop_self_test()`：

```bash
python3 session-manager-desktop.py --self-test
```

它会做这些事：

1. 动态加载 `session-manager.py`
2. 启动一个随机端口的嵌入式 HTTP 服务
3. 访问 `GET /api/sessions`
4. 只要返回状态码 200，就视为通过

这意味着它主要验证：

- 服务能启动
- Handler 能注册
- API 路由可访问
- 当前 Python 环境可以支撑桌面入口启动

## 手工 smoke test

每次改动后至少检查下面这些点：

| Area | Check |
|---|---|
| Web | `python3 session-manager.py` 后页面能打开 |
| Session list | `/api/sessions` 能返回数据，前端能渲染列表 |
| Detail | 打开详情弹窗后消息能显示 |
| Search | 标题搜索与消息搜索都还能工作 |
| Cleanup | 删除单条会话与清理空会话行为正确 |
| CLI | CLI 恢复命令能生成，终端启动逻辑没报错 |
| Desktop | `python3 session-manager-desktop.py` 能正常打开窗口 |

## 打包前测试

打包前至少跑一遍：

```bash
python3 session-manager-desktop.py --self-test
python3 build-desktop.py --skip-install
```

如果你改的是打包逻辑，最好再验证 `release/` 下是否出现预期归档。

## 当前测试缺口

- 没有 API 单元测试
- 没有前端自动化测试
- 没有删除操作的回归测试
- 没有专门覆盖不同 sessions 目录结构的样例数据

这些缺口也是 [清理机会](../cleanup-opportunities.md) 里最值得优先补的方向之一。
