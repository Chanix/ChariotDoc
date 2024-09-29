---
layout: doc
---

# Chariot.env

环境变量

## Chariot.env.set {#set}

设置指定环境变量的值

Chariot.env.set(name, value)

|  参数名  | 类型     | 说明                          |
|:-----:|:-------|:----------------------------|
| name  | string | 环境变量名称                      |
| value | string | 环境变量值，可忽略，默认为 null（即删除环境变量） |

```javascript
await __C.env.set('nnn', 'vvv');    // 设置环境变量 nnn 的值为 "vvv"
await __C.env.set('nnn', 12345);    // 设置环境变量 nnn 的值为 "12345"
await __C.env.set('nnn', null);     // 删除名称环境变量 nnn
await __C.env.set('nnn');           // 删除名称环境变量 nnn
```

## Chariot.env.get {#get}

获取指定环境变量的值。

Chariot.env.get(name, default)

|   参数名   | 类型     | 说明               |
|:-------:|:-------|:-----------------|
|  name   | string | 环境变量名称           |
| default | string | 默认值，可忽略，默认为 null |

|  返回值   | 说明                          |
|:------:|:----------------------------|
| string | 返回环境变量的值，如果指定环境变量不存在则返回默认值。 |

```javascript
await __C.env.get('nnn');           // 获取环境变量 nnn，默认返回 null
await __C.env.get('nnn', null);     // 获取环境变量 nnn，默认返回 null
await __C.env.get('nnn', 12345);    // 获取环境变量 nnn，默认返回 "12345"
await __C.env.get('nnn', "vvv");    // 获取环境变量 nnn，默认返回 "vvv"
```

## Chariot.env.pop {#pop}

删除指定环境变量，并返回其值。

Chariot.env.pop(name, default)

|   参数名   | 说明     | 默认值              |
|:-------:|:-------|:-----------------|
|  name   | string | 环境变量名称           |
| default | string | 默认值，可忽略，默认为 null |

|  返回值   | 说明                              |
|:------:|:--------------------------------|
| string | 返回环境变量的值，如果指定的环境变量不存在则返回指定的默认值。 |

```javascript
await __C.env.pop('nnn');           // 获取环境变量 nnn，默认返回 null
await __C.env.pop('nnn', null);     // 获取环境变量 nnn，默认返回 null
await __C.env.pop('nnn', 12345);    // 获取环境变量 nnn，默认返回 "12345"
await __C.env.pop('nnn', "vvv");    // 获取环境变量 nnn，默认返回 "vvv"
```

## Chariot.env.list {#list}

获取当前所有的环境变量列表

Chariot.env.list()

|  返回值   | 说明             |
|:------:|:---------------|
| object | 一个包含环境变量键值对的字典 |

```javascript
env = await __C.env.list()
```

## Chariot.env.getsep {#getsep}

获取指定环境变量中使用的分隔符

Chariot.env.getsep()

|  返回值   | 说明                      |
|:------:|:------------------------|
| string | 环境变量中使用的分隔符，`:` 或者 `;`。 |

```javascript
await __C.env.getsep();
```