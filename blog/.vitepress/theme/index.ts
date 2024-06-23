// https://vitepress.dev/guide/custom-theme

import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Comment from '../components/gitalk.vue'
import { Image, ImagePreviewGroup } from 'ant-design-vue'
import './style.css'
import './custom.css'

// /** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout,
  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  enhanceApp({ app, router }) {
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
    app.component('git-talk', Comment)
    app.component('a-image', Image)
    app.component('a-image-preview-group', ImagePreviewGroup)
  },
}
