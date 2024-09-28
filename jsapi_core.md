---
layout: doc
---

# Chariot.core

基础功能

## Chariot.core.exit {#exit}

关闭所有窗口，正常退出。

Chariot.core.exit()

```javascript
__C.core.exit();
```

## Chariot.core.terminate {#terminate}

强制关闭，立即中止。

Chariot.core.terminate(retcode);

| 参数名     | 类型     | 说明              |
|:--------|:-------|:----------------|
| retcode | number | 系统返回值，可忽略，默认为 0 |

```javascript
__C.core.terminate();       // 返回 0
__C.core.terminate(1);      // 返回 1
```

## Chariot.core.get_argv {#get_argv}

获取执行 Chariot 时使用的命令行参数。

Chariot.core.get_argv(para);

| 参数   | 类型     | 说明                         |
|:-----|:-------|:---------------------------|
| para | 忽略     | 返回所有的命令行参数；                |   
|      | number | 返回对应索引位置的命令行参数，若无则返回 null； |   
|      | string | 返回指定参数名对应的值，若无则返回 null；    |   

| 返回值           | 说明              |
|:--------------|:----------------|
| Array[string] | 字符串数组，其中的元素是参数值 |

```javascript
await __C.core.get_argv();
await __C.core.get_argv(0);
await __C.core.get_argv('project');
```

## Chariot.core.run {#run}

创建一个自动执行指定项目的 Chariot 实例。

Chariot.core.run(project_id, parameters)

| 参数名        | 类型     | 说明         |
|:-----------|:-------|:-----------|
| project_id | string | 项目标识号      |   
| parameters | string | 命令行参数，可忽略。 |   

| 返回值    | 说明      |
|:-------|:--------|
| number | 新实例的进程号 |

```javascript
await __C.core.run('prjA');
await __C.core.run('prjA', '-p1 p1 /p2 p2 --p3 p3 --p4');
```

## Chariot.core.runwait {#runwait}

创建一个自动执行指定项目的 Chariot 实例，并等其运行完毕。<br />运行完毕后，返回运行结果信息。

Chariot.core.run(project_id, parameters)

| 参数名        | 类型     | 说明         |
|:-----------|:-------|:-----------|
| project_id | string | 项目标识号      |   
| parameters | string | 命令行参数，可忽略。 |   

| 返回值    | 说明                     |
|:-------|:-----------------------|
| object | 一个字典对象，其中：             |
|        | retcode (number) 进程返回值 |
|        | stdio (string) 标准输出    |
|        | stderr (string) 标准错误   |

```javascript
await __C.core.runwait('prjA');
await __C.core.runwait('prjA', '-p1 p1 /p2 p2 --p3 p3 --p4');
```

## Chariot.core.exec {#exec}

运行一个可执行文件

Chariot.core.exec(bin_name, parameters)

| 参数名        | 类型     | 说明         |
|:-----------|:-------|:-----------|
| bin_name   | string | 项目标识号      |   
| parameters | string | 命令行参数，可忽略。 |   

| 返回值    | 说明      |
|:-------|:--------|
| number | 新实例的进程号 |

```javascript
await __C.core.run('prjA');
await __C.core.run('prjA', '-p1 p1 /p2 p2 --p3 p3 --p4');
```

## Chariot.core.execwait {#execwait}

创建一个自动执行指定项目的 Chariot 实例，并等其运行完毕。<br />运行完毕后，返回运行结果信息。

Chariot.core.run(bin_name, parameters)

| 参数名        | 类型     | 说明         |
|:-----------|:-------|:-----------|
| bin_name   | string | 项目标识号      |   
| parameters | string | 命令行参数，可忽略。 |   

| 返回值    | 说明                     |
|:-------|:-----------------------|
| object | 一个字典对象，其中：             |
|        | retcode (number) 进程返回值 |
|        | stdio (string) 标准输出    |
|        | stderr (string) 标准错误   |

```javascript
await __C.core.runwait('prjA');
await __C.core.runwait('prjA', '-p1 p1 /p2 p2 --p3 p3 --p4');
```
