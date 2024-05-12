# vue2-source-code

## vue 源码目录

```bash
├── build --------------------------------- 构建相关的文件
├── dist ---------------------------------- 构建后文件的输出目录
├── examples ------------------------------ 存放使用Vue开发的的例子
├── flow ---------------------------------- 类型声明，使用开源项目 [Flow](https://flowtype.org/)
├── package.json -------------------------- 项目依赖
├── test ---------------------------------- 包含所有测试文件
├── src ----------------------------------- 这个是我们最应该关注的目录，包含了源码
│   ├──platforms --------------------------- 包含平台相关的代码
│   │   ├──web -----------------------------  包含了不同构建的包的入口文件
│   │   |   ├──entry-runtime.js ---------------- 运行时构建的入口，输出 dist/vue.common.js 文件，不包含模板(template)到render函数的编译器，所以不支持 `template` 选项，我们使用vue默认导出的就是这个运行时的版本。大家使用的时候要注意
│   │   |   ├── entry-runtime-with-compiler.js -- 独立构建版本的入口，输出 dist/vue.js，它包含模板(template)到render函数的编译器
│   ├── compiler -------------------------- 编译器代码的存放目录，将 template 编译为 render 函数
│   │   ├── parser ------------------------ 存放将模板字符串转换成元素抽象语法树的代码
│   │   ├── codegen ----------------------- 存放从抽象语法树(AST)生成render函数的代码
│   │   ├── optimizer.js ------------------ 分析静态树，优化vdom渲染
│   ├── core ------------------------------ 存放通用的，平台无关的代码
│   │   ├── observer ---------------------- 反应系统，包含数据观测的核心代码
│   │   ├── vdom -------------------------- 包含虚拟DOM创建(creation)和打补丁(patching)的代码
│   │   ├── instance ---------------------- 包含Vue构造函数设计相关的代码
│   │   ├── global-api -------------------- 包含给Vue构造函数挂载全局方法(静态方法)或属性的代码
│   │   ├── components -------------------- 包含抽象出来的通用组件
│   ├── server ---------------------------- 包含服务端渲染(server-side rendering)的相关代码
│   ├── sfc ------------------------------- 包含单文件组件(.vue文件)的解析逻辑，用于vue-template-compiler包
│   ├── shared ---------------------------- 包含整个代码库通用的代码
```

<!-- more -->

## Vue 构造函数

> 目录[/src/instance/index.js](https://github.com/vuejs/vue/blob/dev/src/core/instance/index.js)

```js
function Vue(options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
// 在vue的原型prototype上挂载方法或属性 都在/src/core/instance目录下
initMixin(Vue)
stateMixin(Vue)
eventMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue

// initMixin
Vue.prototype._init = function (options) {}

// stateMixin
Vue.prototype.$data
Vue.prototype.$props
Vue.prototype.$set
Vue.prototype.$delete = del
Vue.prototype.$watch = function () {}

// eventsMxin
Vue.prototype.$on
Vue.prototype.$once
Vue.prototype.$off
Vue.prototype.$emit

// lifecycleMixin
Vue.prototype._update
Vue.prototype.$forceUpdate
Vue.prototype.$destory

// renderMixin
Vue.prototype.$nextTick
Vue.prototype._render
Vue.prototype._o = markOnce
Vue.prototype._n = toNumber
Vue.prototype._s = toString
Vue.prototype._l = renderList
Vue.prototype._t = renderSlot
Vue.prototype._q = looseEqual
Vue.prototype._i = looseIndexOf
Vue.prototype._m = renderStatic
Vue.prototype._f = resolveFilter
Vue.prototype._k = checkKeyCodes
Vue.prototype._b = bindObjectProps
Vue.prototype._v = createTextVNode
Vue.prototype._e = createEmptyVNode
Vue.prototype._u = resolveScopedSlots
Vue.prototype._g = bindObjectListeners
```

### 初始化实列

> 根据 Vue 的生命周期，Vue 首先会进行 init 初始化操作；
> 源码在 src/core/instance/init.js 中

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

## 引入依赖，挂载静态方法和属性

```js
// [/src/core/index.js](https://github.com/vuejs/vue/blob/dev/src/core/index.js)
import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
// import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

initGlobalAPI(Vue)

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering,
})

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  },
})

// expose FunctionalRenderContext for ssr runtime helper installation
// Object.defineProperty(Vue, 'FunctionalRenderContext', {
//   value: FunctionalRenderContext
// })

Vue.version = '__VERSION__'

export default Vue
```

### 进入 global-api

```js
Vue.set = set
Vue.delete = del
Vue.nextTick = nextTick
// ASSET_TYPES: ['component', 'directive', 'filter']
// ASSET_TYPES.forEach(type => {
//   Vue.options[type + 's'] = Object.create(null)
// })
Vue.options = {
  components: { KeepAlive },
  directives: {},
  filters: {},
  _base: Vue,
}
Vue.use
Vue.mixin
Vue.cid = 0
Vue.extend
Vue.component = function () {}
Vue.directive = function () {}
Vue.filter = function () {}
```

#### Object.defineProperty 响应式实现

```js
export function defineReactive(obj: Object, key: string, val: any, customSetter?: ?Function, shallow?: boolean) {
  // ...
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      const value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
          if (Array.isArray(value)) {
            dependArray(value)
          }
        }
      }
      return value
    },
    set: function reactiveSetter(newVal) {
      const value = getter ? getter.call(obj) : val
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter()
      }
      if (setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal
      }
      childOb = !shallow && observe(newVal)
      dep.notify()
    },
  })
}
```

#### VNode 概念

```js
export default class VNode {
  tag: string | void
  data: VNodeData | void
  children: ?Array<VNode>
  text: string | void
  elm: Node | void
  ns: string | void
  context: Component | void // rendered in this component's scope
  key: string | number | void
  componentOptions: VNodeComponentOptions | void
  componentInstance: Component | void // component instance
  parent: VNode | void // component placeholder node

  // strictly internal
  raw: boolean // contains raw HTML? (server only)
  isStatic: boolean // hoisted static node
  isRootInsert: boolean // necessary for enter transition check
  isComment: boolean // empty comment placeholder?
  isCloned: boolean // is a cloned node?
  isOnce: boolean // is a v-once node?
  asyncFactory: Function | void // async component factory function
  asyncMeta: Object | void
  isAsyncPlaceholder: boolean
  ssrContext: Object | void
  fnContext: Component | void // real context vm for functional nodes
  fnOptions: ?ComponentOptions // for SSR caching
  fnScopeId: ?string
  // ...
}
```
