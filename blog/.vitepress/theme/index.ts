// https://vitepress.dev/guide/custom-theme
// import { h } from 'vue'
// import type { Theme } from 'vitepress'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Comment from '../components/gitalk.vue'
import './style.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  enhanceApp({ app, router, siteData }) {
    console.log(busuanzi, 'siteData')
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
    app.component('git-talk', Comment)
  },
}
