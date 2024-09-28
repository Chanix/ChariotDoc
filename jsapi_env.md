---
layout: doc
---

# Chariot.env

环境变量

## Chariot.env.set {#set}

Chariot.env.set(name, value)
设置指定环境变量的值

|  参数   | 描述         | 默认值  |
|:-----:|:-----------|:-----|
| name  | 字符串，环境变量名称 |      |
| value | 字符串，环境变量值  | null |

| 返回值 | 描述 |
|:---:|:---|
|  无  |    |

```javascript
await __C.env.set('nnn', 'vvv');    // 设置环境变量 nnn 的值为 "vvv"
await __C.env.set('nnn', 12345);    // 设置环境变量 nnn 的值为 "12345"
await __C.env.set('nnn', null);     // 删除名称环境变量 nnn
await __C.env.set('nnn');           // 删除名称环境变量 nnn
```

## Chariot.env.get {#get}

Chariot.env.get(name, default)
获取指定环境变量的值

|   参数    | 描述         | 默认值  |
|:-------:|:-----------|:-----|
|  name   | 字符串，环境变量名称 |      |
| default | 字符串，默认值    | null |

|     返回值      | 描述                              |
|:------------:|:--------------------------------|
| string\|null | 返回环境变量的值，如果指定的环境变量不存在则返回指定的默认值。 |

```javascript
await __C.env.get('nnn');           // 获取环境变量 nnn，默认返回 null
await __C.env.get('nnn', null);     // 获取环境变量 nnn，默认返回 null
await __C.env.get('nnn', 12345);    // 获取环境变量 nnn，默认返回 "12345"
await __C.env.get('nnn', "vvv");    // 获取环境变量 nnn，默认返回 "vvv"
```

## Chariot.env.pop {#pop}

删除指定环境变量，并返回其值
Chariot.env.pop(name, default)

|   参数    | 描述         | 默认值  |
|:-------:|:-----------|:-----|
|  name   | 字符串，环境变量名称 |      |
| default | 字符串，默认值    | null |

|     返回值      | 描述                              |
|:------------:|:--------------------------------|
| string\|null | 返回环境变量的值，如果指定的环境变量不存在则返回指定的默认值。 |

```javascript
await __C.env.pop('nnn');           // 获取环境变量 nnn，默认返回 null
await __C.env.pop('nnn', null);     // 获取环境变量 nnn，默认返回 null
await __C.env.pop('nnn', 12345);    // 获取环境变量 nnn，默认返回 "12345"
await __C.env.pop('nnn', "vvv");    // 获取环境变量 nnn，默认返回 "vvv"
```

## Chariot.env.list {#list}

Chariot.env.list()
获取当前所有的环境变量列表

| 返回值  | 描述             |
|:----:|:---------------|
| dict | 一个包含环境变量键值对的字典 |

```javascript
env = await __C.env.list()
```
