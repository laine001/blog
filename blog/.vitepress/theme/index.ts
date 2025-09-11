// https://vitepress.dev/guide/custom-theme
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Comment from '../components/Gitalk/index.vue'
import HomeUnderline from '../components/HomeUnderline/index.vue'
import NavSiteList from '../components/NavSiteList/index.vue'
import Confetti from '../components/Confetti/index.vue'
import { Image, ImagePreviewGroup } from 'ant-design-vue'
import './styles/vp-var.css'
import './styles/my-style.scss'
import './styles/override-vp.scss'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }) {
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
    app.component('git-talk', Comment)
    app.component('a-image', Image)
    app.component('a-image-preview-group', ImagePreviewGroup)
    app.component('HomeUnderline', HomeUnderline)
    app.component('Confetti', Confetti)
    app.component('NavSiteList', NavSiteList)
  }
}
