---
layout: doc
---

# 项目描述文件

项目描述文件为项目目录下的 `project.json` ，其中储存有关项目的一系列属性，是 utf-8 编码的 json 文件。

Chariot 在启动时会读取本文件，并按内容来执行应用项目。

| 属性名称              |   类型   | 说明          | 默认值                |
|:------------------|:------:|:------------|:-------------------|
| name              | string | 名称          | "{id}"             |
| version           | string | 版本信息        | "0.0.0.1"          |
| description       | string | 详细描述        | ""                 |
| author            | string | 开发者名称       | ""                 |
| url               | string | 入口网址        | "index.html"       |
| win_title         |  int   | 主窗口标题       | "{name} {version}" |
| win_width         |  int   | 主窗口宽度       | 800                |
| win_height        |  int   | 主窗口高度       | 600                |
| win_hidden        |  int   | 是否隐藏主窗口     | false              |
| win_confirm_close |  bool  | 关闭主窗口时是否需要确认  | false              |
| win_on_top        |  bool  | 主窗口是否保持在最前    | false              |
| win_resizable     |  bool  | 主窗口是否可改变大小  | true               |
| win_fullscreen    |  bool  | 是否全屏显示主窗口     | false              |

