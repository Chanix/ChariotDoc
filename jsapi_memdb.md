---
layout: doc
---

# 内存数据库 Chariot.memdb



本模块用 sqlite3 的 :memory: 来实现，只是存储在内存中，并非真正意义上的内存数据库。
本模块为了简单的数据处理和应用逻辑而存在，所有操作都基于同一个数据库连接，不支持事务，需自行处理数据完整和安全性。
复杂的需求请使用 sqlite3 扩展。

## Chariot.memdb.execute(sql, if_fetch) {#execute}

执行 SQL 语句

|    参数    | 类型     | 说明     |
|:--------:|:-------|:-------|
|   sql    | string | SQL 语句 | 
| if_fetch | bool   | 是否返回数据 | 

| 返回值    | 说明                                                    |
|:-------|:------------------------------------------------------|
| object | 如果 if_fetch 为 true，返回游标的数据对象。                         |
| null   | 如果 if_fetch 为 false，返回 null，<br/>需通过后继的 fetch 操作获取数据。 |

## Chariot.memdb.fetchone() {#fetchone}

获取游标数据（一条）

| 返回值    | 说明   |
|:-------|:-----|
| object | 游标数据 |

## Chariot.memdb.fetchall() {#fetchall}

获取游标所有数据

| 返回值    | 说明   |
|:-------|:-----|
| object | 游标数据 |

## Chariot.memdb.fetchmany(count) {#fetchmany}

获取游标数据（指定记录条数）

|  参数   | 类型     | 说明       |
|:-----:|:-------|:---------|
| count | number | 要获取的记录条数 | 

| 返回值    | 说明   |
|:-------|:-----|
| object | 游标数据 |

## Chariot.memdb.getrowcount() {#getrowcount}

获取受影响的记录数

| 返回值    | 说明         |
|:-------|:-----------|
| number | 受影响的数据库记录数 |

## Chariot.memdb.getlastrowid() {#getlastrowid}

获取受上次操作影响的数据库记录id

| 返回值    | 说明      |
|:-------|:--------|
| number | 数据库记录id |


## 一个综合的例子

在这个例子中，首先创建了表 COMPANY，接着向其插入了记录，然后进行查询、更新、删除等操作。并在最后删除了这张表。

```javascript
await __C.memdb.execute("CREATE TABLE COMPANY (ID INT PRIMARY KEY NOT NULL, NAME TEXT NOT NULL, AGE INT NOT NULL, ADDRESS CHAR(50), SALARY REAL)");
await __C.memdb.execute("SELECT * FROM sqlite_master WHERE type='table' ORDER BY name");
await __C.memdb.execute("PRAGMA table_info(COMPANY)");

await __C.memdb.execute("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) VALUES (1, 'Paul', 32, 'California', 20000.00)");
await __C.memdb.execute("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) VALUES (2, 'Allen', 25, 'Texas', 15000.00)");
await __C.memdb.execute("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) VALUES (3, 'Teddy', 23, 'Norway', 20000.00)");
await __C.memdb.execute("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) VALUES (4, 'Mark', 25, 'Rich-Mond ', 65000.00)");
await __C.memdb.execute("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) VALUES (5, 'David', 27, 'Texas', 85000.00)");
await __C.memdb.execute("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) VALUES (6, 'Kim', 22, 'South-Hall', 45000.00)");
await __C.memdb.getlastrowid();

await __C.memdb.execute("SELECT * FROM COMPANY");
await __C.memdb.getrowcount();

await __C.memdb.fetchone();
await __C.memdb.fetchmany(2);
await __C.memdb.fetchall();

await __C.memdb.execute("UPDATE COMPANY SET NAME='Peter' WHERE ID=1");
await __C.memdb.getrowcount();
await __C.memdb.getlastrowid();

await __C.memdb.execute("DELETE FROM COMPANY WHERE ID>4");
await __C.memdb.getrowcount();
await __C.memdb.getlastrowid();

await __C.memdb.execute("DROP TABLE COMPANY");
```
