# 调试

这个项目最常见的问题不是“框架出错”，而是本地环境与文件系统状态不符合预期：端口被占用、sessions 目录找错、Droid CLI 不在 PATH、桌面依赖没装好。调试时优先确认这些外部条件，再去怀疑业务逻辑。

## 常见问题

### 页面打不开

先确认：

```bash
python3 session-manager.py
```

正常输出应包含：

- `Factory Droid Session Manager running at http://127.0.0.1:<port>`
- `Press Ctrl+C to stop.`

如果端口冲突，`session-manager.py` 在默认端口模式下会尝试停止旧进程。相关逻辑在 `stop_existing_session_manager()`。

### 没扫到任何会话

优先检查环境变量和目录推导：

- `FSM_SESSIONS_DIR`
- `DROID_SESSIONS_DIR`
- `FACTORY_SESSIONS_DIR`
- `FSM_FACTORY_HOME`
- `DROID_HOME`
- `FACTORY_HOME`

对应实现见 `resolve_sessions_dir()` 和 `sessions_dir_from_index()`。

### CLI 打不开

`open_cli` 依赖 `resolve_droid_executable()`。如果 PATH 里没有 `droid` 或 `droid.cmd`，需要显式设置：

- `FSM_DROID_BIN`
- `DROID_BIN`
- `FACTORY_DROID_BIN`

### 桌面版启动失败

先跑：

```bash
python3 session-manager-desktop.py --self-test
```

如果这里都失败，通常问题在：

- `pywebview` 未安装
- `session-manager.py` 加载失败
- 本地 API 无法正常启动

### 资源文件 404

静态资源访问走 `frontend_asset_path()`。这个函数会做真实路径解析和目录边界检查，所以如果你改了前端目录结构但没同步更新引用，最容易直接 404。

## 调试入口点

- 会话扫描问题：`scan_sessions()`
- 消息解析问题：`message_entry_from_obj()`、`read_session_messages()`
- API 路由问题：`Handler.do_GET()` / `do_POST()` / `do_DELETE()`
- 桌面加载问题：`load_session_manager()`、`start_embedded_server()`
- 打包问题：`validate_project_files()`、`build()`

如果要改结构性问题，接着看 [模式与约定](patterns-and-conventions.md)。
