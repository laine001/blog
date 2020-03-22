---
title: 解决vue项目打包vendorjs文件过大
date: 2019-07-17 21:54:44
tags: vue
categories: javascript
---

项目上线后，浏览器第一次加载会特别特别慢，network中看到vendorjs文件1.9M，不慢才怪。
echarts按需引入后，也有1.1M左右，由于对vuecli(2.x)理解不深，自己扒了大量的文档，又测试了很多次，才测试成功，暂时简单记录下。

```javascript
  //可以查看项目文件大小分析
  npm run build --report
```
* app.js存放页面中的js操作，使用路由的按需加载，可把app.js分隔成多个小的js文件

此时分隔好的js文件要看各页面中的业务代码量，其中我这里单独的一个图表页还是很大，

800k左右，又是echarts的锅。暂时放这。
* vendorjs中是项目中所有引用的依赖包，即使用的vue、eleui、axios等等插件框架什么的都在这里边，怪不得大。

  参考文档，找到以下解决方法：
    - cdn引入插件
    - 打包时使用Gzip

##### cdn引入
  1. index.html文件中引入link/script引入(cdn或ukg链接)
  2. build/webpack.base.conf.js中添加external配置，webpack打包时会跳过配置中的插件
  3. 去除import...from..和use什么的，不去除照样会打包，其他照常然后就OK了，我看到的文档大都是这样的，不是很清晰哈，那看代码
  * index.html (tips: 先后顺序、引入的地方)
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
      <title>myapp</title>
    </head>
    <body>
      <div id="app"></div>
      <!-- cdn引入 -->
      <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
      <script src="https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js"></script>
      <script src="https://unpkg.com/element-ui/lib/index.js"></script>
      <script src="https://cdn.bootcss.com/echarts/4.2.0-rc.2/echarts-en.min.js"></script>
    </body>
  </html>
  ```
  * webpack配置
    ```javascript
    module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
      ...
    },
    externals: {
      // 要引入的资源的名字：该模块提供给外部引用的名字(由对应的库自定)
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'element-ui': 'ELEMENTUI',
      'echarts': 'echarts'
    },
    output: {
    　　....19
    }
  ```
  * main.js中 (tips: 文件中import router from './router'  并不是引入的vueRouter 看路径)
  ```javascript
  // import Vue from 'vue'
  import App from './App'

  // 这里不是引入的vueRouter
  import router from './router'

  // import ElementUI from 'element-ui'
  // import 'element-ui/lib/theme-chalk/index.css'
  // import echarts from 'echarts'

  Vue.config.productionTip = false
  // Vue.use(ElementUI)
  // Vue.prototype.$echarts = echarts

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
  ```
  * router/index.js文件下 （tips: 脚手架中初始使用的为router  这里要改为VueRouter 原因看external那一步）
  ```javascript
    // import Vue from 'vue'
    // import router from 'vue-router' // 这里才是引入的路由
    import HelloWorld from '@/components/HelloWorld'

    // Vue.use(VueRouter)

    export default new VueRouter({
      routes: [
        {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld
        }
      ]
    })
  ```
这样配置好之后，开发环境下，项目照常是可以运行的，打包后查看文件大小分布，嗯~真香。