---
layout: doc
---
# Chariot.core

基础功能

## Chariot.core.exit {#exit}

Chariot.core.exit()

关闭退出程序。

```javascript
__C.core.exit();
```

## Chariot.core.terminate {#terminate}

Chariot.core.terminate(retcode);

强制关闭退出程序。

| 参数 | 描述 |
| :--: | :--- |
| retcode | 数值类型，指定返回值，可忽略，默认为 0。 |

```javascript
__C.core.terminate();
__C.core.terminate(1);
```

## Chariot.core.get_argv {#get_argv}

Chariot.core.get_argv();

获取执行 Chariot 时，使用的命令行参数。

| 返回值 | 描述 |
| :--: | :--- |
| Array[string] | 字符串数组，其中的元素依序为命令行的各个参数 |

由于特殊字符和命令行环境的存在，指定命令行参数时，请按实际情况进行转义。建议用双引号 " 将参数值包含起来。

```javascript
await __C.core.get_argv();
```
