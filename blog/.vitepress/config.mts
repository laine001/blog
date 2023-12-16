import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "嘎嘣跳的博客",
  description: "个人技术与知识记录",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端",
        items: [
          {
            text: "问题记录",
            link: "/fe/oneline",
          },
          {
            text: "学习记录",
            link: "/fe/vue3-source-code",
          },
        ],
      },
      {
        text: "服务端",
        items: [
          {
            text: "Java",
            link: "/service/java",
          },
          {
            text: "Docker",
            link: "/service/java",
          },
        ],
      },
      { text: "日常blog", link: "/daily/项目工具随手记" },
      { text: "生活记录", link: "/life/medicine" },
    ],

    sidebar: {
      "/fe/": [
        {
          text: "问题记录",
          items: [
            { text: "一句话问题", link: "/fe/oneline" },
            { text: "面试题", link: "/fe/interview" },
          ],
        },
        {
          text: "学习记录",
          items: [
            {
              text: "Vue源码学习",
              link: "/fe/vue3-source-code",
            },
            {
              text: "React源码学习",
            },
            {
              text: "Flutter学习记录",
            },
          ],
        },
      ],
      "/service": [
        {
          text: "Java学习笔记",
          link: "/service/java",
        },
      ],
      "/daily/": [
        {
          text: "日常blog",
          items: [
            {
              text: "项目工具随手记",
              link: "/daily/项目工具随手记",
            },
            {
              text: "算法笔记",
              link: "/daily/hello算法笔记",
            },
            {
              text: "基础爬虫",
              link: "/daily/koa实现基础爬虫",
            },
          ],
        },
      ],
      "/life/": [
        {
          text: "生活记录",
          // collapsed: true,
          items: [
            {
              text: "常见药物相关",
              link: "/life/medicine",
            },
          ],
        },
      ],
    },

    footer: {
      message: "MIT Licensed",
      copyright: "©ikuncool",
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  },
});
