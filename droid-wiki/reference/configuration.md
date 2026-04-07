# 配置

这个项目的配置面很窄，主要来自命令行参数和环境变量。它没有配置文件格式，也没有复杂层级覆盖。

## Web 入口参数

`session-manager.py` 通过 `parse_runtime_args()` 解析：

| Input | Meaning |
|---|---|
| 位置参数 `port` | 指定监听端口 |
| `--sessions-dir <path>` | 手动指定会话目录 |
| `--sessions-dir=<path>` | 同上 |

## 桌面入口参数

`session-manager-desktop.py` 通过 `argparse` 解析：

| Flag | Meaning |
|---|---|
| `--self-test` | 启动嵌入式服务并探测 `/api/sessions` |
| `--sessions-dir` | 覆盖默认会话目录 |

## 打包入口参数

`build-desktop.py` 支持：

| Flag | Meaning |
|---|---|
| `--skip-install` | 跳过依赖安装 |
| `--skip-self-test` | 跳过桌面自检 |
| `--no-archive` | 只生成 bundle，不打归档 |

## 环境变量

### Sessions 路径

- `FSM_SESSIONS_DIR`
- `DROID_SESSIONS_DIR`
- `FACTORY_SESSIONS_DIR`

### Factory 主目录

- `FSM_FACTORY_HOME`
- `DROID_HOME`
- `FACTORY_HOME`

### Droid CLI 路径

- `FSM_DROID_BIN`
- `DROID_BIN`
- `FACTORY_DROID_BIN`

### Web 启动行为

- `FSM_NO_BROWSER=1`：启动 Web 服务后不自动打开浏览器
- `FSM_CLI_LAUNCH_TEST=1`：让 CLI 启动逻辑返回 launcher 信息，便于测试

## 相关页面

- [会话发现](../systems/session-discovery.md)
- [桌面引导](../systems/desktop-bootstrap.md)
- [部署与打包](../deployment.md)
