---
title: vuex的使用
date: 2019-08-26 16:21:42
tags: vue
---
> 使用场景
1. 多个视图依赖于同一状态
2. 来自不同视图的行为需要变更这个同一状态

- 核心概念
```javascript
 state // 记录状态即多个组件依赖的变量
 getter // 相当于单个组件中使用的computed属性，获取state时使用
 mutation // 更改state中的状态
 action // 提交mutation操作、异步操作
 module // 分模块使用store
```

- 使用步骤

```javascript
// 登录后存取用户信息及组件中取用或改变state信息

// 定义state中的属性
const Store = new Vuex.Store({
  state: {
    username: ''
  },
  // 可用可不用
  getters: {
    username(state) {
      return state.username
    }
  },
  // 提交改变的为一属性
  mutations: {
    setUsername(state, value) {
      state.username = value
    }
  },
  actions: {
    // setUsernameAsync(state, value) {
    //   state.commit('setUsername', value)
    // }
    // 触发mutations中的方法，可做异步操作
    setUsernameAsync({ commit }, value) {
      commit('setUsername', `${value}001`)
    }
  }
})
```
```JavaScript
// 视图中提交改变和取用

// 登录后设置username的值
this.$store.dispatch('setUsername', 'laine') // 直接提交mutations中的方法改变
或
this.$store.commit('setUsernameAsync', 'laine') // 通过commit方法触发actions中的方法

// 其他组件中取用state中的值
this.username = this.$store.state.username
或
impot { mapGetters } from 'vuex'

computed: {
  ...mapGetters(['username'])
}
```

> vuex存储状态不是持久的即刷新页面会清除所有状态
解决方法：
- 每次提交改变或设置改变时 利用本地存储保存
- store中写入插件vuex-persist
```bash
  npm install vuex-persist -S
```
```javascript
  import VuexPersistence from 'vuex-persist'

  const vuexLocal = new VuexPersistence({
    storage: window.localStorage
  })
  // 和state、getters等同级
  plugins: [vuexLocal.plugin]
```