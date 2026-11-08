/**
 * 作品集内容层：只放事实（项目、描述、链接、语义状态）。
 * 各皮肤的文案、标签与配色由各自组件映射，不在这里维护。
 */

export type ProjectType =
  | 'component-library'
  | 'documentation'
  | 'catalog'
  | 'mini-program'
  | 'writing'
  | 'data'

export type ProjectStatus = 'live' | 'no-link' | 'tbd'

/** 详情页截图。src 为 public/ 下的根相对路径，由各皮肤用 withBase 拼上站点 base */
export interface ProjectShot {
  src: string
  alt: string
  caption: string
}

export interface Project {
  no: string
  name: string
  type: ProjectType
  desc: string
  status: ProjectStatus
  pending?: boolean
  url?: string
  host: string
  shots?: ProjectShot[]
}

export const projects: Project[] = [
  {
    no: '01',
    name: 'ikunui',
    type: 'component-library',
    desc: '基于 Vue 3 与 monorepo 的前端 UI 组件库，GitHub 100+ star。从组件设计到仓库工程化一并自己搭。',
    status: 'live',
    url: 'https://laine001.github.io/ikun-ui/',
    host: 'laine001.github.io/ikun-ui',
  },
  {
    no: '02',
    name: 'ITPMP',
    type: 'documentation',
    desc: '软考高项的系统化文档记录与总结，长期整理、持续更新，在 Google / Bing 相关检索中排在前列。',
    status: 'live',
    url: 'https://itpmp.cc/',
    host: 'itpmp.cc',
  },
  {
    no: '03',
    name: 'emoji 博物馆',
    type: 'catalog',
    desc: '完整收录 emoji，支持一键复制与本地收藏。把零散的符号整理成一份可检索、可带走的清单。',
    status: 'live',
    url: 'https://emoji.ikuncool.top/',
    host: 'emoji.ikuncool.top',
  },
  {
    no: '04',
    name: '资源分享小程序',
    type: 'mini-program',
    desc: '按品类收录多种资源，支持一键分享、免费获取。面向微信场景的轻量工具，扫码即可用。',
    status: 'no-link',
    pending: true,
    host: '小程序内访问 / 暂无外链',
    shots: [
      { src: '/portfolio/shot-01.svg', alt: '资源分享小程序首页界面占位图', caption: '首页 · 分类入口' },
      { src: '/portfolio/shot-02.svg', alt: '资源分享小程序资源列表界面占位图', caption: '资源列表' },
      { src: '/portfolio/shot-03.svg', alt: '资源分享小程序详情与分享界面占位图', caption: '详情 / 一键分享' },
    ],
  },
  {
    no: '05',
    name: '个人博客',
    type: 'writing',
    desc: '记录前端、与生活的技术博客。基于 VitePress，自定义主题、组件与动效，也是这个页面所在的地方。',
    status: 'live',
    url: 'https://blog.ikuncool.top/',
    host: 'blog.ikuncool.top',
  },
  {
    no: '06',
    name: '原研药查询',
    type: 'data',
    desc: '原研药查询',
    status: 'live',
    url: 'rx-dog.vercel.app',
    host: 'rx-dog.vercel.app',
  },
]
