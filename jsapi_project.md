---
layout: doc
---

# 应用项目 Chariot.project

运行于 Chariot 上的应用，称之为应用项目，简称“项目”。本模块提供了一系列对项目操作的功能。

## Chariot.project.get(project_id) {#get}

获取项目信息

|    参数名     | 说明     | 默认值   |
|:----------:|:-------|:------|
| project_id | string | 项目标识号 |   

| 返回值    | 说明            |
|:-------|:--------------|
| object | 字典，包含项目信息的键值对 |

```javascript
await __C.project.get('default');
```

## Chariot.project.gethome() {#gethome}

获取项目主目录

| 返回值    | 说明      |
|:-------|:--------|
| string | 应用项目主目录 |

```javascript
await __C.project.gethome();
```

## Chariot.project.list() {#list}

获取已存在的项目列表

| 返回值           | 说明                 |
|:--------------|:-------------------|
| Array[string] | 一个列表，其中的每个元素是项目的名称 |

```javascript
await __C.project.list();
```

## Chariot.project.run(project_id, parameters) {#run}

创建一个自动执行指定项目的 Chariot 实例。

| 参数名        | 类型     | 说明         |
|:-----------|:-------|:-----------|
| project_id | string | 项目标识号      |   
| parameters | string | 命令行参数，可忽略。 |   

| 返回值    | 说明      |
|:-------|:--------|
| number | 新实例的进程号 |

```javascript
await __C.project.run('prjA');
await __C.project.run('prjA', '-p1 p1 /p2 p2 --p3 p3 --p4');
```

## Chariot.project.runwait(project_id, parameters) {#runwait}

创建一个自动执行指定项目的 Chariot 实例，并等其运行完毕。<br />运行完毕后，返回运行结果信息。

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
await __C.project.runwait('prjA');
await __C.project.runwait('prjA', '-p1 p1 /p2 p2 --p3 p3 --p4');
```

