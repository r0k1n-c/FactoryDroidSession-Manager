# 开发流程

这个仓库的开发循环很轻：改 Python 或前端文件，重启本地服务，再看 UI 是否符合预期。因为没有构建型前端和数据库迁移，常见改动的反馈周期通常在秒级到分钟级。

## 推荐迭代顺序

1. 先确认目标属于哪一层：后端、前端、桌面、打包
2. 只改最靠近问题的那一层
3. 跑对应的最小验证
4. 最后再做一次完整手工 smoke test

## 常见改动路径

### 改后端 API 或扫描逻辑

- 改 `session-manager.py`
- 运行：`python3 session-manager.py`
- 用浏览器打开页面或直接访问 `/api/sessions`

### 改前端交互或图表

- 改 `frontend/assets/app.js` 或 `frontend/assets/style.css`
- 重新刷新页面
- 重点检查列表、详情、图表、刷新间隔、语言切换

### 改桌面端

- 改 `session-manager-desktop.py`
- 先跑：`python3 session-manager-desktop.py --self-test`
- 再手工启动桌面窗口

### 改构建流程

- 改 `build-desktop.py` 或平台包装脚本
- 先跑 `--self-test`
- 再跑 `python3 build-desktop.py --skip-install` 做一次本机验证

## 提交前检查建议

- 会话列表能正常加载
- 消息详情能打开
- 删除单个会话和清理空会话逻辑没有明显错误
- CLI 打开命令仍能生成
- 如果改了桌面逻辑，自检通过

想看更具体的验证项，直接去 [测试](testing.md)；想排查失败原因，看 [调试](debugging.md)。
