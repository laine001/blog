interface SomeSiteItem {
  name: string
  desc: string
  link: string
  img?: string
}

interface SomeSiteCategory {
  category: string
  list: SomeSiteItem[]
}
// https://carbon.now.sh/
export default [
  {
    category: '技术博客',
    list: [
      {
        name: '阮一峰的网络日志',
        desc: '一个非常有名的技术博客，每周五更新',
        link: 'https://www.ruanyifeng.com/blog/',
        img: 'https://www.ruanyifeng.com/favicon.ico',
      },
      {
        name: 'Hello算法',
        desc: '开源的算法学习网站',
        link: 'https://www.hello-algo.com/chapter_hello_algo/',
        img: 'https://www.hello-algo.com/assets/images/logo.svg',
      },
      {
        name: 'Java学习指南',
        desc: '一个开源的Java学习指南',
        link: 'https://javabetter.cn/home.html',
        img: 'https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/logo-02.png',
      },
      {
        name: '函数式编程指北',
        desc: '介绍函数式编程',
        link: 'https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch1.html',
      },
      {
        name: '开源指北',
        desc: '一个帮助你了解开源项目的站点',
        link: 'https://gitee.com/opensource-guide/',
        img: 'https://gitee.com/opensource-guide/logo.png',
      }
    ]
  },
  {
    category: '工具',
    list: [
      {
        name: 'Carbon',
        desc: '可以帮助你生成精美代码截图的工具',
        link: 'https://carbon.now.sh/',
        img: 'https://carbon.now.sh/favicon.ico',
      },
      {
        name: '超全的css动画',
        desc: '纯css动画,可一键复制css代码',
        link: 'https://animista.net/play/basic',
        // img: 'https://animista.net/images/animista-logo-small.svg',
      }
    ]
  },
  {
    category: '其他',
    list: [
      {
        name: '信息系统项目管理师',
        desc: '一个可以帮助你学习软考中信息系统项目管理师的网站',
        link: 'https://itpmp.cc/',
        img: 'https://www.itpmp.cc/images/site/logo.svg',
      }
    ]
  }
] as SomeSiteCategory[]
