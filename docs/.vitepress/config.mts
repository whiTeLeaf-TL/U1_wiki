import { defineConfig } from "vitepress";
import pkg from "../../package.json";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "U1 Wiki",
  description: "U1 文档",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: "https://github.com/wling-art/U1_wiki/tree/main/docs/:path",
    },
    nav: [
      { text: "主界面   ", link: "/" },
      { text: "百科", link: "/intro" },
    ],

    sidebar: [
      {
        text: "教程",
        items: [
          { text: "👋 欢迎来到 U1 Wiki", link: "/intro" },
          { text: "🌹 FAQ", link: "/FAQ" },
          { text: "📘 项目介绍", link: "/jieshao" },
          {
            text: "✨ 姚奕功能介绍",
            items: [
              { text: "娶群友", link: "/yaoyi-func/娶群友" },
              { text: "成分姬", link: "/yaoyi-func/成分姬" },
              { text: "词云图", link: "/yaoyi-func/词云图" },
              { text: "答案之书", link: "/yaoyi-func/答案之书" },
              { text: "疯狂星期四", link: "/yaoyi-func/疯狂星期四" },
              { text: "回声洞", link: "/yaoyi-func/回声洞" },
              { text: "今日运势", link: "/yaoyi-func/今日运势" },
              { text: "今天吃什么？", link: "/yaoyi-func/今天吃什么？" },
              { text: "历史上的今天", link: "/yaoyi-func/历史上的今天" },
              { text: "涩图", link: "/yaoyi-func/涩图" },
              { text: "天气", link: "/yaoyi-func/天气" },
              { text: "网抑云", link: "/yaoyi-func/网抑云" },
              { text: "网易云点歌", link: "/yaoyi-func/网易云点歌" },
              { text: "伪造信息", link: "/yaoyi-func/伪造信息" },
              { text: "字符画", link: "/yaoyi-func/字符画" },
              { text: "Github Card", link: "/yaoyi-func/Github Card" },
              { text: "识别动漫", link: "/yaoyi-func/识别动漫" },
              { text: "状态信息", link: "/yaoyi-func/状态信息" },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/wling-art/U1_wiki" },
    ],
    footer: {
      message: `基于 GPL-3.0 license 许可发布 | 文档版本 ${pkg.version}`,
      copyright: `版权所有 © 2023-${new Date().getFullYear()} 钟乐服务器`,
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});
