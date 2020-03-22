---
title: nuxt2.x小结
date: 2020-01-22 20:54:37
tags: vue
---

[使用之前先撸遍官方文档](https://zh.nuxtjs.org/guide/installation)
#### 绝多部分问题，都可以在网上搜得到，所以整体开发还算顺利，难度一般，以下纪录本人项目中用到和总结的一些知识，后面有新的问题会更新，欢迎讨论！
## 路由守卫
    使用nuxt的middleware功能，中间件允许一个函数在每个页面进入之前运行
    可以在页面中使用/可以全局使用
```javascript
// middleware/route.js
// 接收context作为第一个参数
export default ({ route, redirect, app, store }) => {
  if (!store.state.userInfo.userId) {
    return redirect('/login')
  }
  if (route.fullPath === '/mine') {
    return redirect('/mine/account')
  }
}
// nuxt.config.js中配置
module.exports = {
    router: {
        middleware: 'route'
    }
}
```
## 自定义全局方法
    
    用到nuxt中的plugins功能
    nuxt在运行程序之前执行js插件（适用自己的库或第三方模块,修改plugin时需要重启项目）
    此处封装localstorge操作 // 只允许mounted之中调用
     
```javascript
// /plugins/utils.js
import Vue from 'vue'
const storge = {
  install(Vue) {
    /**
     * @params key setItem key
     * @params value setItem value
     * @params expire 过期时间<number> 默认7
     */
     
    Vue.prototype.$setStorge = (key, value, expire = 7) => {
      let obj = {
        value,
        time: Date.now(),
        expire: expire * 60 * 60 *24
      }
      localStorage && localStorage.setItem(key, JSON.stringify(obj))
    }
    
    Vue.prototype.$getStorge = (key) => {
      let val = localStorage.getItem(key)
      if (!val) return null
      val = JSON.parse(val)
      // 过期
      if ((Date.now() - val.time) > val.expire) {
        localStorage.removeItem(key)
        return null
      }
      return val.value
    }
    
    Vue.prototype.$delStorge = (key) => {
      localStorage.removeItem(key)
    }
  }
}
Vue.use(storge)

// nuxt.config.js中需配置plugins字段，参考middleware
```
## nuxt中使用vuex

    store目录中新建user.js 直接暴露state等属性
    不使用模块化，直接新建index.js 暴露

```javascript
export const state = () => ({
  userInfo: null
})

export const mutations = {
  setUserInfo(state, data) {
    state.userInfo = data
  }
}
export default {
  state,
  // getters,
  // actions,
  mutations
}
```

## 服务端获取数据

    asyncData方法
- 页面级组件中服务端才会生效的钩子
- 页面刷新时不执行
- return出去的对象会放入到客户端中的data数据中

```
nuxtServerInit
```
 - 获取服务端数据
 - 可访问到服务端的context对象
 - 只存在于vuex中
  
```!
    nuxt会在每一次请求服务器页面时执行，即：首次进入页面或刷新页面
    且只存在于vuex中的action对象中
```

```js
// vuex中记录获取cookie记录登录状态
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    try {
      let cookies = req.headers['cookie']
      console.log(cookies)
    } catch (error) {
      console.log(error)
    }
  }
}
```
## 页面或全局引用script链接
```js
// 组件或nuxtconfigjs
export default {
    head: {
        script: [
            { src: '***' }
        ]
    }
}
```

## 动态设置页面title及meta信息
```js
export default {
    head() {
        return {
            title: '***'，
            meta: {
                hid: 'description', name: 'description', content: '***'
            }
        }
    }
}
```
## nuxt部署

- 服务端安装工具node、yarn、pm2

```bash
  curl --silent --location https://rpm.nodesource.com/setup_10.x | sudo bash -
  sudo yum install -y nodejs
  sudo yum install yarn
  npm install -g pm2
```
- 本地nuxt项目代码执行npm run build（.nuxt文件夹下会生成dist文件目录）
- 把.nuxt、static、nuxt.config.js、package.json server五个文件夹拖到服务器上
- 服务器上安装依赖 npm install
- 启动项目 npm run start
- 启动进程守护 pm2 start npm --name "package.json文件中得name" -- run start


#### 第一次部署时出错

```js
- Unexpected identifier // 意外的识别码

(function (exports, require, module, __filename, __dirname) { import Modal from './confirm' })

// 很多说的是项目中缺少识别import引入方式的babel
// 按照参考下载了也没用
// 找不到解决方法, 后来发现，iview的按需引入处的错误
// package.json中的iview版本为3.15也就是iview
// 而按需引入中的包名使用'iview'就会报错
// 改为'view-design'解决
```

```javascript
  "plugins": [
    ["import", {
      "libraryName": "view-design",
      "libraryDirectory": "src/components"
    }]
  ]
```
## nginx部分配置

```bash
  location / {
    proxy_pass http://localhost:3000;
  }
```

## 引入百度统计代码

- 新建plugins/baidu.js
```javascript
export default ({app: {router}, store}) => {
  /* 每次路由变更时进行pv统计 */
  router.afterEach((to, from) => {
    /* 告诉增加一个PV */
    try {
      window._hmt = window._hmt || []
      window._hmt.push(['_trackPageview', to.fullPath])
    } catch (e) {
    }
  })
}
```
``` javascript
script: [
  { src: 'https://hm.baidu.com/hm.js?****' }
]
```
- nuxt.config.js中配置plugins字段

## 开启https

nuxt.config.js中的server字段
```javascript
  const path = require('path')
  const fs = require('fs')

  module.exports = {
    server: {
      https: {
        // 此处路径可以直接写死 读取https证书文件
        // key: fs.readFileSync(path.resolve(__dirname, '**server.key'))
        key: fs.readFileSync('/usr/local/***.key')
      }
    }
  }
```
