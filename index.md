---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: Chariot
titleTemplate: 聚焦桌面 快速实现

hero:
  name: "Chariot"
  text: "聚焦桌面 快速实现"
  tagline: "快速开发、打包和分发基于 HTML5 的桌面应用"
  actions:
    - theme: brand
      text: 什么是 Chariot?
      link: /what-is-chariot
    - theme: alt
      text: 快速开始
      link: /getting-started
    - theme: alt
      text: JSAPI
      link: /jsapi

features:
  - title: 基于 Web 技术
    details: 开发人员可以使用熟悉的 Web 前端技术来创建用户界面和业务逻辑。复用现有资源，快速上手，学习曲线平缓。
  - title: 跨平台支持
    details: 支持 Windows、MacOS 和 Linux 等不同操作系统，开发人员可以使用同一套代码库构建跨平台的桌面应用程序。
  - title: 内置扩展
    details: 内置扩展对象，JavaScript 可直接调用，包括原生操作系统模块的访问、本地资源的操作等，以支持开发各种类型的桌面应用程序。
  - title: 易于打包和分发
    details: 简单方便的打包和分发机制，分发对应平台的 Chariot 可执行文件和项目包即可。更可以打包成可执行文件推广到用户手中。
---

<style>:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>