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
