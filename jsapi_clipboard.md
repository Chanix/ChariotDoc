---
layout: doc
---

# 剪贴板 Chariot.clipboard

## Chariot.clipboard.is_available() {#is_available}

系统剪贴板是否可操作

| 返回值  | 说明         |
|:----:|:-----------|
| bool | 系统剪贴板是否可操作 |

```javascript
await __C.clipboard.is_available();
```

## Chariot.clipboard.get() {#get}

获取系统剪贴板中的值（仅支持字符串）

|  返回值   | 说明       |
|:------:|:---------|
| string | 剪贴板中存储的值 |

```javascript
await __C.clipboard.get();
```

## Chariot.clipboard.set(text) {#set}

设置系统剪贴板的值（仅支持字符串）

|  参数  | 类型     | 说明                   |
|:----:|:-------|:---------------------|
| text | string | 设置系统剪贴板的值，可缺省，默认为 '' | 

```javascript
await __C.clipboard.write('写入系统剪贴板的字符串值');
```
