---
name: project-packager
description: 为项目生成分享版或运行版 ZIP 压缩包。用于用户要求打包项目、导出分享包或生成运行版压缩包时。
---
# 项目打包

为本地软件项目生成经过校验的分享版或运行版 ZIP 压缩包。当用户要求打包、压缩、归档，或准备可分享 / 可运行的项目交付物时使用。

## 适用场景

- 用户要求打包、压缩、归档、导出项目
- 用户需要可分享的源码 ZIP
- 用户需要仅包含运行所需内容的 ZIP
- 用户需要同时生成两种包，并附带校验结果

## 先确认打包类型

如果用户没有明确说明要哪一种包，先用 `AskUser` 工具确认：

- 分享包
- 运行包
- 两者都要
- 先检查项目，再决定

## 打包变体

### 分享包

适用于用户想把项目分享给团队成员，或归档当前源码状态的场景。

默认行为：

- 包含整个项目目录树
- 排除生成物和可丢弃文件
- ZIP 内保留顶层项目目录
- 校验关键项目文件是否存在

默认排除项：

- `.git/`
- `__pycache__/`
- `node_modules/`
- `venv/`
- `.venv/`
- `build/`
- `dist/`
- `release/`
- `.DS_Store`
- `*.pyc`
- `*.pyo`

### 运行包

适用于用户想要更小的压缩包，并且其中只包含运行项目所需文件的场景。

默认行为：

- 使用显式 include 列表
- 包含入口文件、运行依赖、启动脚本、静态资源，以及运行所需的少量文档
- 排除构建脚本、CI 配置、重复的内部文档，以及仅开发阶段需要的文件，除非用户明确要求保留

## 工作流程

1. 识别项目根目录和项目名。
2. 检查顶层文件和目录，识别运行入口与资源。
3. 选择输出路径：
   - 分享包：`<parent>/<ProjectName>-share.zip`
   - 运行包：`<parent>/<ProjectName>-runtime.zip`
4. 使用同目录中的打包启动器，不要内联重写 ZIP 逻辑。
5. 如果是运行包，根据当前项目结构构建显式 include 列表。
6. 校验压缩包：
   - 必需文件存在
   - 禁止文件不存在
   - 文件数量合理
   - 输出路径和文件大小已报告
7. 返回 ZIP 路径、包含 / 排除摘要，以及校验结果。

## 脚本使用方式

先从标准 skill 目录中确定 `project-packager` 所在位置：

- 项目级：`<repo>/.factory/skills/project-packager`
- 个人级：`~/.factory/skills/project-packager`

然后按平台使用同目录中的启动器：

- macOS / Linux：`pack.sh`
- Windows PowerShell：`pack.ps1`
- Windows CMD：`pack.cmd`

如果启动器不可用，就直接用当前机器上可用的 Python 命令执行 `pack.py`（如 `python3`、`python` 或 `py -3`）。

### 分享包示例

```bash
"<skill-dir>/pack.sh" \
  --mode share \
  --project "/path/to/project" \
  --require "main.py" \
  --require "README.md" \
  --ban "__pycache__/*" \
  --ban ".DS_Store"
```

```powershell
& "<skill-dir>\pack.ps1" `
  --mode share `
  --project "C:\path\to\project" `
  --require "main.py" `
  --require "README.md" `
  --ban "__pycache__/*" `
  --ban ".DS_Store"
```

### 运行包示例

```bash
"<skill-dir>/pack.sh" \
  --mode runtime \
  --project "/path/to/project" \
  --include "main.py" \
  --include "requirements.txt" \
  --include "frontend" \
  --require "main.py" \
  --require "frontend/index.html" \
  --ban "build/*" \
  --ban ".github/*"
```

```cmd
"<skill-dir>\pack.cmd" --mode runtime --project "C:\path\to\project" --include "main.py" --include "requirements.txt" --include "frontend" --require "main.py" --require "frontend/index.html" --ban "build/*" --ban ".github/*"
```

## 如何构建运行包的 include 列表

优先显式列出文件和运行时目录，例如：

- 主服务或桌面程序入口
- 运行时依赖文件
- 启动脚本
- 前端 / 静态资源目录
- 运行所需配置文件
- 如果接收者需要，可附带一份运行说明

通常应排除：

- 构建脚本
- CI 工作流
- 仅测试用文件
- 缓存
- 之前的打包产物
- 重复的内部文档

## 校验规则

打包后必须做校验。

- 用 `--require` 指定 ZIP 中必须存在的文件
- 用 `--ban` 指定绝不能出现的文件或模式
- 检查脚本输出中的 `FILE_COUNT`、`SIZE_BYTES` 和 `VALIDATION passed`
- 如果校验失败，修正 include / exclude 列表后重新执行
- 跨平台使用时，`--include`、`--require`、`--ban`、`--exclude` 中尽量使用正斜杠相对路径

如果项目刚改过，并且仓库里有自测或 smoke test 命令，在合适的时候应先运行或与打包一起执行。

## 不要这样做

- 不要用“递归包含整个仓库”的方式构建运行包
- 如果 `pack.py` 已覆盖场景，不要再临时写一段内联 Python ZIP 脚本
- 不要省略校验步骤
- 不要用 `str / str` 构造归档路径；要用 `Path / Path`

## 输出格式

返回内容应包括：

- ZIP 路径
- 打包类型
- 包含 / 排除内容摘要
- 校验结果

## 如何验证这个 skill

你可以先运行 `/skills` 确认它已出现在列表中，然后在类似的项目打包任务里调用测试。
