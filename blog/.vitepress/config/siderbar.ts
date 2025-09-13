import { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  '/fe/': [
    {
      text: '日常Blog',
      // collapsed: true,
      items: [
        {
          text: '一句话记录',
          link: '/fe/oneline',
        },
        {
          text: 'package.json详解',
          link: '/fe/pkg-json',
        },
        {
          text: 'nuxt2小结',
          link: '/fe/nuxt2',
        },
        {
          text: '搭建组件库仓库',
          link: '/fe/components-proj',
        },
        {
          text: '项目工具随手记',
          link: '/fe/work-utils',
        },
        {
          text: '算法笔记',
          link: '/fe/hello算法笔记',
        },
        {
          text: '基础爬虫',
          link: '/fe/koa-spider',
        },
        {
          text: '发布订阅',
          link: '/fe/pub-sub',
        },
        {
          text: '洋葱模型',
          link: '/fe/onion-model',
        },
        {
          text: '一些面试题',
          link: '/fe/interview',
        },
        {
          text: 'webpack工程化',
          link: '/fe/webpack',
        },
        {
          text: 'nodejs',
          link: '/fe/nodejs-1',
        },
        {
          text: 'css相关',
          link: '/fe/css',
        },
      ],
    },
  ],
  // '/service': [
  //   {
  //     text: 'Java学习笔记',
  //     link: '/service/java',
  //   },
  // ],
  '/life/': [
    {
      text: '生活记录',
      items: [
        {
          text: '一些不错的网站',
          link: '/life/some-site',
        },
        {
          text: '常见药物相关',
          link: '/life/medicine',
        },
        {
          text: '泰国行',
          link: '/life/thailand',
        },
      ],
    },
  ],
  '/about/': [
    {
      text: "",
      items: [
        {
          text: '我',
          link: '/about/me'
        },
        {
          text: '友链',
          link: '/about/link'
        },
      ]
    }
  ],
  '/ai/': [
    {
      text: 'AI',
      items: [
        {
          text: '1',
          link: '/ai/1'
        },
        {
          text: '2',
          link: '/ai/2'
        },
        {
          text: '4',
          link: '/ai/4'
        },
      ]
    }
  ]
}

export default sidebar
