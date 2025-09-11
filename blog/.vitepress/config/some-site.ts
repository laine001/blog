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
