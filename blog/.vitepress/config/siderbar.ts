const siderbar = {
  '/fe/': [
    {
      text: '日常Blog',
      // collapsed: true,
      items: [
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
          text: 'css相关',
          link: '/fe/css',
        },
      ],
    },
    {
      text: '问题记录',
      items: [
        { text: '一句话记录', link: '/fe/oneline' },
        { text: '面试题', link: '/fe/interview' },
      ],
    },
    {
      text: '学习记录',
      items: [
        {
          text: 'markdown语法',
          link: '/fe/markdown-examples'
        },
        // {
        //   text: 'Vue源码学习',
        //   link: '/fe/vue2-source-code',
        // },
        // {
        //   text: 'React源码学习',
        // },
        {
          text: 'Flutter学习记录',
        },
      ],
    },
  ],
  '/service': [
    {
      text: 'Java学习笔记',
      link: '/service/java',
    },
  ],
  '/life/': [
    {
      text: '生活记录',
      items: [
        {
          text: '常见药物相关',
          link: '/life/medicine',
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
  ]
}

export default siderbar
