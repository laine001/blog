---
title: Vue原理一
date: 2020-04-20 17:39:41
tags: vue
---

### 初始化实列

> 根据Vue的生命周期，Vue首先会进行init初始化操作；
> 源码在src/core/instance/init.js中

```js
/*初始化生命周期*/
initLifecycle(vm)

/*初始化事件*/
initEvents(vm)Object.defineProperty 

/*初始化render*/
initRender(vm)

/*调用beforeCreate钩子函数并且触发beforeCreate钩子事件*/
callHook(vm, 'beforeCreate')
initInjections(vm) // resolve injections before data/props
/*初始化props、methods、data、computed与watch*/
initState(vm)

initProvide(vm) // resolve provide after data/props
/*调用created钩子函数并且触发created钩子事件*/
callHook(vm, 'created')
```