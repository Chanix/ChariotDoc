import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    outDir: './docs',
    base: '/ChariotDoc/',
    title: "Chariot",
    description: "Chariot, 基于 HTML5 的桌面应用开发工具。",
    locales: {
        root: {
            label: '简体中文',
            lang: 'zh'
        },
        // en: {
        //   label: 'English',
        //   lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
        //   // link: '/fr/guide' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的

        //   // 其余 locale 特定属性...
        // },
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '回主页', link: '/'},
            // { text: 'Examples', link: '/markdown-examples' },
        ],

        sidebar: [
            {
                text: '简介',
                collapsed: false,
                items: [
                    {text: '什么是 Chariot', link: '/what-is-chariot'},
                    {text: '快速开始', link: '/getting-started'},
                    {text: '应用类型', link: '/project-types'},
                ],
            },
            {
                text: '配置文件',
                collapsed: false,
                items: [
                    {text: 'project.json', link: '/project-json'},
                    // { text: 'lang.json', link: '/404' },
                ],
            },
            {
                text: 'JS 功能扩展',
                collapsed: false,
                items: [
                    {text: 'JSAPI 概述', link: '/jsapi'},
                    {text: '基础功能 Chariot.core', link: '/jsapi_core'},
                    {text: '环境变量 Chariot.env', link: '/jsapi_env'},
                    {text: '剪贴板　 Chariot.clipboard', link: '/jsapi_clipboard'},
                    {text: '文件系统 Chariot.fsys', link: '/jsapi_fsys'},
                ],
            },
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/Chanix/ChariotDoc'}
        ]
    }
})
