---
layout: doc
---

# 装载和运行项目

## 搜索顺序

Chariot 启动后将按下列顺序搜索项目。

1. CHARIOT_HOME 目录中，命令行参数 --project 中指定的项目；
2. CHARIOT_HOME 目录中，名称为 default 的项目；
3. Chariot 内置的默认项目；

## 生命周期

1. 读取项目描述文件 project.json；
2. 设置本地服务（需要的话）；
3. 设置并打开主窗口；
4. 装载项目入口网址，项目开始运行；
5. 当主窗口被关闭或 JavaScript 发起退出请求后，项目运行结束；
