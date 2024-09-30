---
layout: doc
---

# 文件与目录结构

运行 Chariot 时所使用的目录，即为 “CHARIOT_HOME”。<br />
***一般来说，CHARIOT_HOME 就是 Chariot 可执行文件所在的目录。***


## CHARIOT_HOME
```text
    CHARIOT_HOME
        |   Chariot.exe         # 文件：可执行文件，运行环境
        |   ChariotKit.exe      # 文件：可执行文件，开发调试环境
        +---packages            # 目录：外部工具目录
        |
        +---temp                # 目录：临时文件目录（以项目标识为子目录）
        +---data                # 目录：应用数据目录（以项目标识为子目录）
        \---projects            # 目录：应用项目目录（以项目标识为子目录）
```
开发中，请按照这个约定来存储对应的文件。

发布给最终用户时，由于他们并不需要开发调试环境，因此可以删除 ChariotKit 。



## 项目目录
```text
    project_name                # 目录名即项目的标识，请尽量使用英语字符。
        |   project.json        # 项目描述文件
        |                       #   本文件详细记录了项目的相关信息，必须存在。
        |                       #   当 Chariot 启动项目时会读取该文件。
        \---webroot             # 项目内使用的所有文件
                                #   本地 httpd 服务器将以本目录作为 / 。
```
