# 有趣事实

这个仓库不大，但细看还是有几件挺有意思的事。

## 1. 最大的两个文件几乎把产品本体包圆了

- `session-manager.py`：752 行
- `frontend/assets/app.js`：743 行

也就是说，后端和前端各有一个“主控文件”，两者加起来就解释了大部分产品行为。看懂这两个文件，基本就看懂项目了。

## 2. 没有 TODO / FIXME / HACK

直接扫描整个仓库，`TODO`、`FIXME`、`HACK` 的命中数都是 0。这不是说代码没有改进空间，而是说明作者更偏向于直接整理代码，而不是把技术债挂在注释里。

## 3. 前端没有 npm

`frontend/` 只有 `index.html`、`assets/app.js` 和 `assets/style.css`。没有 `package.json`，没有构建步骤，也没有前端依赖锁文件。这个 UI 是一套完全手写、零构建的静态页面。

## 4. 这份 checkout 本身没有 git 历史

`FactoryDroidSession-Manager/` 当前目录缺少 `.git/`。这让很多 wiki 常见页面（贡献者、真实时间线、活跃目录变化）都没法精确生成。换句话说，这份代码是“能运行的快照”，不是“完整历史仓库”。

## 5. 项目里还带着一个项目级 skill

仓库内有 `.factory/skills/project-packager/`，说明作者不只在写应用本身，也在把“如何交付这个项目”沉淀成 Droid 可复用能力。这个细节在 [工具链](how-to-contribute/tooling.md) 里会再次出现。
