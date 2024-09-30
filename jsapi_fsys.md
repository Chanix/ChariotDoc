---
layout: doc
---

# 文件系统 Chariot.fsys

本模块提供了一系列对文件和文件集合的高阶操作。
特别是提供了一些支持文件拷贝和删除的函数。

注意：本模块无法拷贝所有的文件元数据。
在 POSIX 平台上，这意味着将丢失文件所有者和组以及 ACL 数据。
在 Mac OS 上，资源钩子和其他元数据不被使用。
这意味着将丢失这些资源并且文件类型和创建者代码将不正确。
在 Windows 上，将不会拷贝文件所有者、ACL 和替代数据流。

## Chariot.fsys.isfile(path) {#isfile}

测试指定的文件是否为文件

|  参数  | 类型     | 说明   |
|:----:|:-------|:-----|
| path | string | 文件路径 | 

| 返回值  | 说明                 |
|:----:|:-------------------|
| bool | 是返回 true，否返回 false |

```javascript
await __C.fsys.isfile('C:\\Windows\\notepad.exe');
```

## Chariot.fsys.isdir(path) {#isdir}

测试指定的文件是否为目录

|  参数  | 类型     | 说明   |
|:----:|:-------|:-----|
| path | string | 目录路径 | 

| 返回值  | 说明                 |
|:----:|:-------------------|
| bool | 是返回 true，否返回 false |

```javascript
await __C.fsys.isdir('C:\\Windows');
```

## Chariot.fsys.sizeof(path) {#sizeof}

获取指定文件或者目录的字节数<br>
如果是文件，返回文件字节数。如果是目录，将进行递归遍历和汇总。<br />
***注意：目录很多或包含大量小文件的情况下，会消耗大量 IO 操作。***

|  参数  | 类型     | 说明        |
|:----:|:-------|:----------|
| path | string | 文件路径或目录路径 | 

|  返回值   | 说明                      |
|:------:|:------------------------|
| number | 文件的字节数或者指定目录包含的所有文件的字节数 |

```javascript
await __C.fsys.sizeof('C:\\Windows\\notepad.exe');
```

## Chariot.fsys.sizeoftostr(bytes_length) {#sizeoftostr}

获取文件字节数的人类可读版本

|      参数      | 类型     | 说明  |
|:------------:|:-------|:----|
| bytes_length | number | 字节数 | 

|  返回值   | 说明         |
|:------:|:-----------|
| string | 字节数的人类可读版本 |

```javascript
await __C.fsys.sizeoftostr(await __C.fsys.sizeof('C:\\Windows\\notepad.exe'));
```

## Chariot.fsys.read(path, charset) {#read}

将文件内容读入字符串

|   参数    | 类型     | 说明                 |
|:-------:|:-------|:-------------------|
|  path   | string | 文件路径               | 
| charset | string | 文件编码，可忽略，默认为 utf-8 | 

|  返回值   | 说明   |
|:------:|:-----|
| string | 文件内容 |

```javascript
await __C.fsys.read('C:\\Windows\\win.ini');
```

## Chariot.fsys.readlines(path, charset) {#readlines}

将文件内容读取到字符串列表中

|   参数    | 类型     | 说明                 |
|:-------:|:-------|:-------------------|
|  path   | string | 文件路径               | 
| charset | string | 文件编码，可忽略，默认为 utf-8 | 

|      返回值      | 说明          |
|:-------------:|:------------|
| Array[string] | 文件内容，每行一个元素 |

```javascript
await __C.fsys.readlines('C:\\Windows\\win.ini');
```

## Chariot.fsys.write(path, content, append, charset) {#write}

将字符串内容写入文件

|   参数    | 类型     | 说明                   |
|:-------:|:-------|:---------------------|
|  path   | string | 文件路径                 | 
| content | string | 写入的字符串内容             | 
| append  | bool   | 是否追加模式，可忽略，默认为 false | 
| charset | string | 文件编码，可忽略，默认为 utf-8   | 

|  返回值   | 说明     |
|:------:|:-------|
| number | 写入的字节数 |

```javascript
await __C.fsys.write('D:\\jswrite.txt', 'this is 1st line\n');
await __C.fsys.write('D:\\jswrite.txt', 'this is 2st line\n', true);
```

## Chariot.fsys.writelines(path, content, append, charset) {#writelines}

将字符串内容写入文件

|   参数    | 类型            | 说明                   |
|:-------:|:--------------|:---------------------|
|  path   | string        | 文件路径                 | 
| content | Array[string] | 写入的字符串数组             | 
| append  | bool          | 是否追加模式，可忽略，默认为 false | 
| charset | string        | 文件编码，可忽略，默认为 utf-8   | 

|  返回值   | 说明     |
|:------:|:-------|
| number | 写入的字节数 |

```javascript
await __C.fsys.writelines('D:\\jswrite.txt', ['line1\n', 'line2\n', 'line3\n']);
await __C.fsys.writelines('D:\\jswrite.txt', ['line4\n', 'line5\n', 'line6\n'], true);
```

## Chariot.fsys.touch(path) {#touch}

实现类似于 UNIX “touch” 实用程序的行为

|  参数  | 类型     | 说明        |
|:----:|:-------|:----------|
| path | string | 文件路径或目录路径 | 

```javascript
await __C.fsys.touch('D:\\jstouch.txt');
```

[//]: # (## Chariot.fsys.mkdir {#mkdir})

[//]: # (## Chariot.fsys.rmdir {#rmdir})

## Chariot.fsys.rmtree(path, ignore_errors) {#rmtree}

删除一个完整的目录树<br />
path 必须指向一个目录（但不能是一个目录的符号链接）。

|      参数       | 类型     | 说明                   |
|:-------------:|:-------|:---------------------|
|     path      | string | 文件路径                 | 
| ignore_errors | bool   | 是否忽略错误，可忽略，默认为 false | 

```javascript
await __C.fsys.rmtree('D:\\treetest');
```

## Chariot.fsys.getsep() {#getsep}

获取指定环境变量中使用的分隔符

|  返回值   | 说明                   |
|:------:|:---------------------|
| string | 系统的路径符号，`\\` 或者 `/`。 |

```javascript
await __C.fsys.getsep();
```

## Chariot.fsys.checksum(path) {#checksum}

计算指定文件的校验和

|  参数  | 类型     | 说明   |
|:----:|:-------|:-----|
| path | string | 文件路径 | 

|  返回值   | 说明     |
|:------:|:-------|
| string | 文件的校验和 |

```javascript
await __C.fsys.checksum('C:\\Windows\\notepad.exe');
```

## Chariot.fsys.crc32(path) {#crc32}

计算指定文件的 CRC32 校验和

|  参数  | 类型     | 说明   |
|:----:|:-------|:-----|
| path | string | 文件路径 | 

|  返回值   | 说明            |
|:------:|:--------------|
| string | 文件的 crc32 校验和 |

```javascript
await __C.fsys.crc32('C:\\Windows\\notepad.exe');
```

## Chariot.fsys.diskusage(path) {#diskusage}

返回给定路径的磁盘使用统计数据

|  参数  | 类型     | 说明   |
|:----:|:-------|:-----|
| path | string | 文件路径 | 

|      返回值      | 说明          |
|:-------------:|:------------|
| Array[number] | 一个数字数组，其中：  |
|               | 元素 0： 总共字节数 |
|               | 元素 1： 已用字节数 |
|               | 元素 2： 可用字节数 |

```javascript
await __C.fsys.diskusage('C:\\');
```
