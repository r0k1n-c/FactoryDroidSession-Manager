# 分析与统计

Active contributors: unavailable in this checkout（当前目录缺少 `.git` 元数据）。

分析功能是这个工具和“普通文件浏览器”之间最大的区别。它不只列出会话，还会按模型、日期、工作区、会话体积和 token 用量做聚合，让用户判断哪些模型和项目最活跃。

## Purpose

这个功能把原始会话摘要聚合成图表和排行榜，帮助用户回答“最近都在用什么模型”“哪个工作区最耗 token”“哪些会话最大”。

## Directory layout

```text
frontend/assets/app.js
session-manager.py
```

## Key abstractions

| File | Purpose |
|---|---|
| `frontend/assets/app.js` | `renderAnalytics()`、`getWorkspaceUsageEntries()`、图表数据整形 |
| `session-manager.py` | 提供 tokenUsage、messageCount、fileSize、lastModified 等原始指标 |

## How it works

`renderAnalytics()` 直接基于 `allSessions` 做前端聚合，当前主要输出七类可视化：

1. 模型分布 donut
2. 各模型 token 堆叠柱状图
3. 每日活跃热力条
4. 工作区总 token 用量堆叠图
5. 工作区排行榜
6. 会话 token 排行榜
7. 会话大小分布

这里没有单独的分析 API，后端只提供原始会话摘要。分析层完全在前端实现，所以改图表通常不需要动 Python。

## Integration points

- 数据源来自 `/api/sessions`
- 工作区 token 分拆依赖 `tokenUsage` 里的 input / output / cache / thinking 字段
- 页面与 [会话浏览](session-browsing.md) 共用同一套 `allSessions` 状态

## Entry points for modification

要增加新图表或替换现有图表，优先改 `renderAnalytics()`。如果想减少前端计算量，可考虑把某些聚合提前到后端，但那会改变当前“后端只给原始摘要”的边界。
