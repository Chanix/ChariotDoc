---
layout: doc
---

# JSAPI 概述

Chariot 提供了JavaScript 可调用的功能，以此突破浏览器的限制，操控受限资源。
所有 API 皆考虑到跨平台，最大可能的保证在主流操作系统下行为一致。
但由于操作系统的差异，某些功能存在差异或仅被限定的操作系统支持。

注意：所有 JavaScript 调用皆为异步调用函数。请使用异步编程（例如：callback, then, await, async...），
具体请参阅 [JavaScript 相关文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript) 。

## 调用方法

Chariot 会在浏览器组件窗口装载完成之后新增一个对象： `window.Chariot` 并触发事件 `ChariotReady`。
为了方便使用，Chariot 将扩展按功能分成了多个模块，公开于 `window.Chariot.api` 下。

在 JavaScript 中，通过 `window.Chariot.api.<模块名>.<函数名>` 这样的方式来进行调用，可以简写为 `__C.<模块名>.<函数名>` 。

例如下面几个是等价的调用：

```javascript
window.Chariot.api.core.exit()
Chariot.api.core.exit()
__C.core.exit()
```

如果 JavaScript 在准备工作还没有完成时进行调用，那么将会出现错误（例如：页面装载时立即执行的代码），可以通过侦听事件来解决这个问题。

```javascript
window.addEventListener('ChariotReady', function () {
    alert('Chariot 准备完毕，可以调用了。')
})
```

## 增加与完善

有需要的话，JSAPI
将会按照不断的进行增加和完善。如果没有您需要的模块，可以 [在这里提出需求](https://github.com/Chanix/ChariotDoc/issues) 。
我们将定期整理，判断是否增加，并整理出优先顺序逐步完善。

- 现有 API 缺陷的修复，优先级提高
- 需求量大，多人提出的，优先级提高
- 对项目有帮助的人员提出的，优先级提高
- 赞助者提出的，优先级提高

请原谅我们的时间和精力有限，所有的需求都会尽量排期实现，但无法保证一定会被实现或何时实现。

## 功能模块

| 模块名称      | 功能描述 |        Test Text        |
|:----------|:-----|:-----------------------:|
| core      | 基础功能 |   [点击查看](jsapi_core)    |
| clipboard | 剪贴板  | [点击查看](jsapi_clipboard) |
| env       | 环境变量 |    [点击查看](jsapi_env)    |
| fsys      | 文件系统 |   [点击查看](jsapi_fsys)    |
| project   | 应用项目 |  [点击查看](jsapi_project)  |

[//]: # (| mainwin   | 主窗口         |       [点击查看]&#40;404&#41;       |)

[//]: # (| memdb     | 内存数据库       |          点击查看           |)

[//]: # (| sqlite3   | sqlite3 数据库 |          点击查看           |)

