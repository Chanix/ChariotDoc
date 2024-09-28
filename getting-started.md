---
layout: doc
---
# 快速开始 {#getting-started}

## 下载与安装
Chariot 基于绿色软件的理念来开发，无需安装。请下载对应平台的软件包，并解压到您希望的目录即可。
需要的请与作者联系
目前，仅提供 Window（win7+） 版本下载，需要其他操作系统版本请联系开发团队。
暂时没有找到合适的下载点，这

### Window （win7+）
Chariot 仅支持 Win7+，下载点：
下载完成后，可以得到一个压缩包
Chariot for Window 无需安装，无需安装其他软件即可使用
解压到您喜欢的文件夹，例如： D:\Chariot
解压完成后，里面是这样的
    Chariot.exe     运行环境，此文件需要分发给最终使用者
    ChariotKit.exe  开发环境，供开发使用。与 Chariot.exe 版本相同，但多了 主控窗口 和 浏览器调试窗口。
    projects        项目文件夹，存放所有的项目，其中每个子文件夹是一个单独的项目
    packages        软件包文件夹，存放供 Chariot 调用的软件包（目前暂时无用）
    data            数据文件夹，其中每个子文件夹是一个项目的数据，文件夹名称与 projects 中的项目名称一一对应
    temp            临时文件夹，其中每个子文件夹是一个项目的数据，临时文件夹是易失的，不应存放长期数据。

    这样设计的目的是为了规范各种类型文件的存储位置，方便管理。请开发的时候也按照这个规范来进行。

## 开发与调式
    项目文件夹中的文件与相关介绍
    webroot 存放最终的H5文件
    project.json 存放该项目的相关描述。

    以您喜欢的前端开发架构来开发web应用，并编写好对应的project.json
    开发中一般使用 ChariotKit 来进行调试。

## 分发项目
快速分发：
    要分发的项目命名为 default
    将 Chariot.exe 和 projects/default 下的目录打包，分发给最终用户即可。
    用户端的文件结构
        Chariot.exe
            projects
                default
    当 Chariot 启动后，可以通过参数指定运行的项目
        例如 Chariot calc 将默认装载 projects/calc 项目，并运行
        如果没有指定，默认装载并执行 default 项目
高级分发：通过生成模板，将项目打包进去，并选择需要的功能，最后编译成对应平台的可执行文件
