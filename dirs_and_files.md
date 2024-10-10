---
layout: doc
---

# 文件与目录结构

运行 Chariot 时所使用的目录，即为 “CHARIOT_HOME”。<br />
***一般来说，CHARIOT_HOME 就是 Chariot 可执行文件所在的目录。***


## CHARIOT_HOME
以 Window 为例，目录结构如下：
```text
    CHARIOT_HOME
        |   Chariot.exe         # 文件：可执行文件，运行环境
        |   ChariotKit.exe      # 文件：可执行文件，开发调试环境
        +---packages            # 目录：外部工具目录
        |
        +---temp                # 目录：临时文件目录
        +---data                # 目录：应用数据目录
        \---projects            # 目录：应用项目目录
```
应用项目的临时文件、数据文件和程序文件按照项目标识，存放在 `temp`, `data`, `projects` 对应的子目录（目录名为项目标识）中。


例如，有个项目，项目标识为 `prj1`，则：
- 项目程序文件目录： `CHARIOT_HOME/projects/prj1`；
- 项目临时文件目录： `CHARIOT_HOME/temp/prj1`；
- 项目数据文件目录： `CHARIOT_HOME/data/prj1`；

 这样约定的是目的是为了更便捷和统一的管理项目和各种文件。
 
***开发中，请按照这个约定来存储对应的文件。***

 
 
## 项目目录
所有的项目都存放在 projects 下，每个项目一个目录，结构如下：
```text
    project_name                # 目录名即项目的标识，请尽量使用英语字符。
        |   project.json        # 项目描述文件
        |                       #   详细记录了项目的相关信息，必须存在。
        |                       #   当 Chariot 启动项目时会读取该文件。
        \---webroot             # 项目内使用的所有文件
                                #   本地 httpd 服务器将以本目录作为 / 。
```
