# 前端知识点总结


<img class="post-img" src="https://www4.bing.com//th?id=OHR.PontdArcole_ZH-CN5348049357_1920x1080.jpg&rf=LaDigue_1920x1080.jpg" />

## js/浏览器

### 1. JS 垃圾回收与 V8 垃圾回收机制

> 编写 JavaScript 程序时，开发者不需要手工跟踪内存的使用情况，只要按照标准写 JavaScript 代码，JavaScript 程序运行所需的内存分配以及无用内存的回收完全是自动管理。

JavaScript V8 中自动垃圾回收机制的原理为：

- v8 垃圾回收机制使用的是标记清除法

  1.找出那些不再使用的变量，然后释放其占用的内存。

  2.垃圾收集器会按照固定的时间间隔(或预定的收集时间) 周期性 地执行此操作。

- 引用计数法

含义为跟踪记录每个值被引用的次数，当声明一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数为 1，如果同一个值又被赋给另一个变量，该值的引用次数加 1，如果包含这个值引用的变量又取得了另外一个值，则这个值得引用次数减 1.当引用次数为 0 时回收其占用得内存空间。

### 2. js 的事件循环机制

JavaScript 有一个 main thread 主线程和 call-stack 调用栈（执行栈），所有的任务都会放到调用栈中等待主线程执行。
任务进入执行栈之后会判断一下是否是同步任务，若是同步任务就会进入主线程执行；异步任务就会到事件表里面注册回调函数到事件队列。

1. 同步和异步任务分别进入不同的执行”场所”，同步的进入主线程，异步的进入 Event Table 并注册函数
2. 当指定的事情完成时，Event Table 会将这个函数移入 Event Queue
3. 主线程内的任务执行完毕为空，会去 Event Queue 读取对应的函数，进入主线程执行。
4. 上述过程会不断重复，也就是常说的 Event Loop(事件循环)

- 宏任务：整体代码 script、setTimeout、setInterval、setImmediate, I/O, UI rendering。
- 微任务：原生 Promise 中 then 方法、process.nextTick、MutationObserver, Object.observe

> 执行顺序：同步代码 → 全部微任务 → UI渲染 → 取一个宏任务，循环往复。

```javascript
console.log('1')
setTimeout(() => console.log('2'), 0)
Promise.resolve().then(() => console.log('3'))
queueMicrotask(() => console.log('4'))
(async () => {
  console.log('5')
  await null
  console.log('6')
})()
console.log('7')

// 157346;2

```

[事件循环机制](https://juejin.cn/post/6844904079353708557)

### 3. 什么是闭包，为什么有闭包概念，存在什么问题，适用什么应用场景

闭包就是能够读取其他函数内部变量的函数。使用不当造成内存泄露

1. 函数嵌套函数
2. 函数内部可以引用函数外部的参数和变量
3. 参数和变量不会被垃圾回收机制回收

### 4. 讲一下原型链

每个对象都存在一个**proto**属性指向其构造函数的 prototype 属性值

```
var a = {}
a.__proto__ === Object.prototype // true
```

### 5. 浏览器渲染

> reflow（回流）：当浏览器发现某个部分发生了变化影响了布局，这个时候就需要倒回去重新渲染，这个过程就叫做 reflow；
> repaint（重绘）：当改变某个元素的背景色、字体颜色、边框颜色等不影响布局的属性时，屏幕的一部分需要重画，但是元素的几何尺寸和位置都没有发现变化；

1. 浏览器将获取的 HTML 文档解析成 DOM 树
2. 处理 CSS 标记，构成层叠样式表模型（CSSOM）
3. 将 DOM 和 CSSOM 合并为渲染树（rendering tree）
4. 渲染树的每个元素的内容都是计算过的，称之为 布局 layout
5. 将渲染树上的各个节点绘制到屏幕上，称之为 绘制 painting

[浏览器渲染过程简析](https://zhuanlan.zhihu.com/p/212220203)

### 6. 手动实现浅拷贝、深拷贝

浅拷贝：重新在堆中创建内存，拷贝前后对象的基本数据类型互不影响，但对象的引用类型因为还是共享同一块内存，会相互影响。

深拷贝：从堆内存中开辟一个新的区域存放新对象，对对象中的子对象进行递归拷贝，前后的值互不影响。

```javascript
// 浅拷贝
function clone(target) {
  let cloneTarget = {}
  for (const key in target) {
    cloneTarget[key] = target[key]
  }
  return cloneTarget
}
// 只考虑{}和基本类型
function deepClone(target) {
  if (typeof target === 'object') {
    let cloneTarget = {}
    for (const key in target) {
      cloneTarget[key] = deepClone(target[key])
    }
    return cloneTarget
  } else {
    return target
  }
}
// 复杂深拷贝
function deepClone2(target, hash = new WeakMap()) {
  if (target === null) return target
  if (target instanceof Date) return new Date(target)
  if (target instanceof RegExp) return new RegExp(target)
  if (typeof target !== 'object') return target
  // 对象
  let cloneObj = new target.constructor()
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      cloneObj[key] = deepClone2(target[key])
    }
  }
  return cloneObj
}
```

### 7. 手动实现防抖节流函数

```javascript
// 防抖：多次触发合并为最后一次执行，resize、input搜索
function debounce(fn, delay, scope) {
  let timer = null
  // 返回函数对debounce作用域形成闭包
  return function () {
    // setTimeout()中用到函数环境总是window,故需要当前环境的副本；
    let context = scope || this,
      args = arguments
    // 如果事件被触发，清除timer并重新开始计时
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}
// 节流：每隔固定时间，最多执行一次
// 滚动过程中，每隔 200ms 判断一次元素是否进入视口（懒加载、吸顶）
// 防止短时间疯狂点击按钮
function throttle(fn, threshold, scope) {
  let timer
  let prev = Date.now()
  return function () {
    let context = scope || this,
      args = arguments
    let now = Date.now()
    if (now - prev > threshold) {
      prev = now
      fn.apply(context, args)
    }
  }
}
function throttle2(fn, threshold, scope) {
  let timer
  return function () {
    let context = scope || this,
      args = arguments
    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(context, args)
        timer = null
      }, threshold)
    }
  }
}
```

### 8. new 操作符过程发生了什么

1. 创建一个空对象
2. 设置原型链。把构造函数的 prototype 属性 作为空对象的原型(同时也有了 prototype 的方法，例如 this.age 就是用到了 prototype 的 this 这个方法)
3. 改变 this 指向。this 赋值给这个空对象，执行构造函数函数，完成赋值
4. 如果函数没有返回值 就返回这个 this 对象

### 9. 为什么会有跨域、怎么解决

浏览器的同源策略

- 服务端设置允许跨域
- nginx 配置代理
- jsonp 请求

### 10. 图片压缩原理

canvas drawImage

### 11. 函数参数为外部的一个对象，函数内部删除对象的某个属性，元数据会不会改变

会，引用类型

```javascript
const data = {
  a: 1,
}
data.a = 2
function func(data) {
  data.a = 3
  console.log(data, 'in') // { a: 3 }
}
func(data)
console.log(data, 'out') // { a: 3 }
```

### 12. 继承（手写 class 继承）

```js
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayHello(name) {
    console.log(`hello ${name}`)
  }
}
class men extends Person {
  constuctor(name, age) {
    super(name, age)
  }
}
const xiaohong = new Person('小红', 18)
xiaohong.sayHello() // hello 小红
const xiaogang = new men('小刚', 20)
xiaogang.sayHello()
```

### 13. bind、apply、call 的区别与作用

- `apply(thisArg, [arg1,arg2])`：改变 this 指向，**立即执行函数**，参数传入数组。
- `call(thisArg, arg1, arg2)`：改变 this 指向，**立即执行函数**，参数逐个传入。
- `bind(thisArg, arg1, arg2)`：改变 this 指向，**返回新函数，不会立即执行**，支持柯里化分次传参。

当第一个参数为 null /undefined，浏览器环境 this 默认指向 window。

### 14. Promise 简述与原理

Promise 是异步编程方案，有三种状态：pending、fulfilled、rejected，状态一旦改变不可回退。
`.then()`接收成功回调，`.catch()`捕获异常，`.finally()`无论成功失败都会执行。
静态方法：`Promise.all`、`Promise.race`、`Promise.allSettled`、`Promise.any`。

### 15. 手动实现 map 函数

```js
Array.prototype.map2 = function (callback) {
  // map 要返回的结果
  const result = []
  for (let i = 0; i < this.length; i++) {
    // 执行callback 函数 并传入数组的值
    result.push(callback(this[i], i, this))
  }
  return result
}
const arr = [1, 2, 3]
const arr2 = arr.map2((item) => item * 2)
console.log(arr2) // [2, 4, 6]
```

### 16.  webworker是什么，什么场景使用

JavaScript 在浏览器里是单线程的。主线程同时负责：执行 JS、计算样式、布局、绘制、处理用户输入。如果一段 JS 计算跑了 2 秒，这 2 秒内页面完全卡死——点击没反应、动画停住、滚动卡顿。

Web Worker 让你开一个独立的后台线程跑 JS，主线程继续响应 UI。两个线程通过 postMessage 通信，不共享内存

## vue

### 1. Vue 双向绑定

`Object.defineProperty`

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <script src="https://cdn.bootcss.com/vue/2.5.16/vue.js"></script>
    <div id="box">
      <new-input v-bind:name.sync="name"></new-input>
      {{name}}
      <input type="text" v-model="name" />
    </div>
    <script>
      Vue.component('new-input', {
        props: ['name'],
        data: function () {
          return {
            newName: this.name,
          }
        },
        template: `<label><input type="text" @keyup="changeName"
        v-model="newName" /> 你的名字：</label>`,
        methods: {
          changeName: function () {
            this.$emit('update:name', this.newName)
          },
        },
        watch: {
          name: function (v) {
            this.newName = v
          },
        },
      })
      new Vue({
        el: '#box',
        data: {
          name: 'nick',
        },
      })
    </script>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <input type="text" v-mode="msg" />
    <p v-mode="msg"></p>
    <script>
      const data = {
        msg: '你好',
      }
      const input = document.querySelector('input')
      const p = document.querySelector('p')
      input.value = data.msg
      p.innerHTML = data.msg
      // 视图变数据跟着变
      input.addEventListener('input', function () {
        data.msg = input.value
      })
      // 数据变视图变
      let temp = data.msg
      Object.defineProperty(data, 'msg', {
        get() {
          return temp
        },
        set(value) {
          temp = value
          // 视图修改
          input.value = temp
          p.innerHTML = temp
        },
      })
      data.msg = '小李'
    </script>
  </body>
</html>
```

### 2. router 原理

> https://juejin.cn/post/6844903615283363848 > https://juejin.cn/post/6844903600913645582

```js
history.reaplceState  history.pushState
```

### 3. nextTick 原理，除了 Mutation Observer 还有什么实现方式
nextTick 在 DOM 更新完成之后执行回调。

### 4. computed 实现原理
computed 是惰性求值，内部有 watcher，依赖发生改变才重新计算；有缓存，多次访问不会重复执行函数。
### 5. created 和 mounted 的区别

- created：实例创建完成，data、methods 已经初始化，DOM 还未生成，$el 不存在。
- mounted：组件 DOM 已经挂载完成，可以操作 DOM。
  
## react

### 1. react 的 setState 是同步异步？为什么

并非真正异步。**合成事件、生命周期内会批量合并 state 更新，表现为异步；原生事件、setTimeout 中同步执行**。
React18 自动批处理，统一做 state 合并。

### 2. 什么是高阶组件（hoc）

> 高阶组件[higher order component]是一个以组件为参数并返回一个新组件的函数。HOC 运行你重用代码、逻辑和引导抽象。最常见的可能是 Redux 的 connect 函数。除了简单分享工具库和简单的组合，HOC 最好的方式是共享 React 组件之间的行为。如果你发现你在不同的地方写了大量代码来做同一件事时，就应该考虑将代码重构为可重用的 HOC。

### 3. 什么是 react fiber
React16 引入 Fiber 架构，把大的渲染任务拆分成多个小任务，可中断、可恢复，解决同步渲染长时间阻塞主线程问题。

### 4. hooks 原理
Hooks 依靠链表保存状态，函数组件每次执行按顺序读取 hooks；**hooks 不能写在条件、循环内部**。

### 5. 简述 redux
三大原则：单一数据源、state 只读、使用纯函数 reducer 修改 state。
核心概念：Action、Reducer、Store、View。
流程：View dispatch (action) → reducer 计算新 state → store 更新 → view 获取最新 state 渲染。
### 6. diff 算法实现
React Diff 只比较同层节点；key 用来做节点复用；类型不同直接销毁重建；列表 diff 通过 key 做移动、删除、新增优化。

### 7. fiber 原理与实现

```js
// 三个原则
// 单一事实来源：整个应用的状态存储在单个 store 中的对象/状态树里。单一状态树可以更容易地跟踪随时间的变化，并调试或检查应用程序。
// 状态是只读的：改变状态的唯一方法是去触发一个动作。动作是描述变化的普通 JS 对象。就像 state 是数据的最小表示一样，该操作是对数据更改的最小表示。
// 使用纯函数进行更改：为了指定状态树如何通过操作进行转换，你需要纯函数。纯函数是那些返回值仅取决于其参数值的函数。

// redux的组件
// Action – 这是一个用来描述发生了什么事情的对象。
// Reducer – 这是一个确定状态将如何变化的地方。
// Store – 整个程序的状态/对象树保存在Store中。
// View – 只显示 Store 提供的数据。

// 定义action
// React 中的 Action 必须具有 type 属性，该属性指示正在执行的 ACTION 的类型。必须将它们定义为字符串常量，并且还可以向其添加更多的属性。在 Redux 中，action 被名为 Action Creators 的函数所创建。以下是 Action 和Action Creator 的示例：
function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  }
}
// 简述
// redux 是一个应用数据流框架，主要是解决了组件间状态共享的问题，原理是集中式管理，主要有三个核心方法，action，store，reducer，
// 工作流程是 view 调用 store 的 dispatch 接收 action 传入 store，reducer 进行 state 操作，view 通过 store 提供的 getState 获取最新的数据，
// flux 也是用来进行数据操作的，有四个组成部分 action，dispatch，view，store，工作流程是 view 发出一个 action，派发器接收 action，让 store 进行数据更新，更新完成以后 store 发出 change，view 接受 change 更新视图。Redux 和 Flux 很像。主要区别在于 Flux 有多个可以改变应用状态的 store，在 Flux 中 dispatcher 被用来传递数据到注册的回调事件，但是在 redux 中只能定义一个可更新状态的 store，redux 把 store 和 Dispatcher 合并,结构更加简单清晰
// 新增 state,对状态的管理更加明确，通过 redux，流程更加规范了，减少手动编码量，提高了编码效率，同时缺点时当数据更新时有时候组件不需要，但是也要重新绘制，有些影响效率。一般情况下，我们在构建多交互，多数据流的复杂项目应用时才会使用它们
```

### 8. vue和react的根本区别

- vue：声明式、模板语法、响应式（劫持数据，读取时收集依赖，修改时通知对应依赖更新。）
- react：jsx、不可变状态 + 重新执行组件函数


## webpack

### 1. 生产环境，webpack 如何加快编译速度

### 2. webpack 的几大概念？都是做什么的

- entry
- output
- loader
- plugin

### 3. loader 和 plugins 的区别和基本原理

- loader：文件转换器，处理模块，作用在文件级别，串行执行。
- plugin：插件，基于 tapable 钩子，监听 webpack 构建生命周期，做更复杂的功能。

## 网络

### 1. TCP

三次握手（建立连接）

1. 客户端发送 SYN 报文，请求建立连接
2. 服务端收到，回复 SYN+ACK：同意连接，并确认收到客户端请求
3. 客户端收到应答，回复 ACK，连接建立，开始传输数据

**目的：确认双方收发能力正常，同步序列号**

> 握手过程中传送的包里不包含数据，三次握手完毕后，客户端与服务器才正式开始传送数据。理想状态下，TCP 连接一旦建立，在通信双方中的任何一方主动关闭连接之前，TCP 连接都将被一直保持下去。断开连接时服务器和客户端均可以主动发起断开 TCP 连接的请求，断开过程需要经过“四次握手”（过程就不细写了，就是服务器和客户端交互，最终确定断开）

四次挥手（断开连接）

TCP 是全双工通信，两个方向通道需要分别关闭：

1. 客户端发送 FIN：我方不再发送数据
2. 服务端返回 ACK：收到关闭请求，继续传输剩余数据
3. 服务端数据传输完毕，发送 FIN：服务端发送通道关闭
4. 客户端返回 ACK，等待一段时间后，连接彻底释放

### 2. TCP和UDP

- **TCP**：面向连接、可靠传输；有握手挥手、ACK 确认、超时重传、拥塞控制；数据有序；开销大。适用：网页、文件传输、HTTP。
- **UDP**：无连接、不可靠；无握手，直接发包；无确认、不重传；开销小速度快，存在丢包乱序。适用：直播、视频通话、DNS 查询。

### 3. http、https、http2

- **HTTP1.1**：文本明文协议；支持 keep‑alive 长连接；同域名最多 6 个并行连接，请求串行；每次请求重复携带完整 header，头部冗余。
- **HTTP2**：二进制分帧传输，不再是文本；**多路复用**，单条 TCP 连接并行处理多个请求；HPACK 头部压缩；支持服务端推送，依然是明文传输。
- **HTTPS = HTTP + TLS**：在 TCP 和 HTTP 中间增加 TLS 加密；传输数据加密，防窃听、防篡改、服务器身份认证；HTTPS 底层可以是 HTTP1.1 或 HTTP2。

> 核心区别：HTTP1.1 串行明文；HTTP2 单连接多路复用，明文；HTTPS 带 TLS 加密，保障传输安全。

### 4. 在地址栏里输入一个地址回车会发生哪些事情

> https://juejin.cn/post/6844903919395536910 > https://segmentfault.com/a/1190000006879700

1. 解析 URL：首先会对 URL 进行解析，分析所需要使用的传输协议和请求的资源的路径。如果输入的 URL 中的协议或者主机名不合法，将会把地址栏中输入的内容传递给搜索引擎。如果没有问题，浏览器会检查 URL 中是否出现了非法字符，如果存在非法字符，则对非法字符进行转义后再进行下一过程。
2. 缓存判断：浏览器会判断所请求的资源是否在缓存里，如果请求的资源在缓存里并且没有失效，那么就直接使用，否则向服务器发起新的请求。
3. DNS 解析： 下一步首先需要获取的是输入的 URL 中的域名的 IP 地址，首先会判断本地是否有该域名的 IP 地址的缓存，如果有则使用，如果没有则向本地 DNS 服务器发起请求。本地 DNS 服务器也会先检查是否存在缓存，如果没有就会先向根域名服务器发起请求，获得负责的顶级域名服务器的地址后，再向顶级域名服务器请求，然后获得负责的权威域名服务器的地址后，再向权威域名服务器发起请求，最终获得域名的 IP 地址后，本地 DNS 服务器再将这个 IP 地址返回给请求的用户。用户向本地 DNS 服务器发起请求属于递归请求，本地 DNS 服务器向各级域名服务器发起请求属于迭代请求。
4. 获取 MAC 地址： 当浏览器得到 IP 地址后，数据传输还需要知道目的主机 MAC 地址，因为应用层下发数据给传输层，TCP 协议会指定源端口号和目的端口号，然后下发给网络层。网络层会将本机地址作为源地址，获取的 IP 地址作为目的地址。然后将下发给数据链路层，数据链路层的发送需要加入通信双方的 MAC 地址，本机的 MAC 地址作为源 MAC 地址，目的 MAC 地址需要分情况处理。通过将 IP 地址与本机的子网掩码相与，可以判断是否与请求主机在同一个子网里，如果在同一个子网里，可以使用 APR 协议获取到目的主机的 MAC 地址，如果不在一个子网里，那么请求应该转发给网关，由它代为转发，此时同样可以通过 ARP 协议来获取网关的 MAC 地址，此时目的主机的 MAC 地址应该为网关的地址。
5. TCP 三次握手： 下面是 TCP 建立连接的三次握手的过程，首先客户端向服务器发送一个 SYN 连接请求报文段和一个随机序号，服务端接收到请求后向客户端发送一个 SYN ACK 报文段，确认连接请求，并且也向客户端发送一个随机序号。客户端接收服务器的确认应答后，进入连接建立的状态，同时向服务器也发送一个 ACK 确认报文段，服务器端接收到确认后，也进入连接建立状态，此时双方的连接就建立起来了。
6. HTTPS 握手： 如果使用的是 HTTPS 协议，在通信前还存在 TLS 的一个四次握手的过程。首先由客户端向服务器端发送使用的协议的版本号、一个随机数和可以使用的加密方法。服务器端收到后，确认加密的方法，也向客户端发送一个随机数和自己的数字证书。客户端收到后，首先检查数字证书是否有效，如果有效，则再生成一个随机数，并使用证书中的公钥对随机数加密，然后发送给服务器端，并且还会提供一个前面所有内容的 hash 值供服务器端检验。服务器端接收后，使用自己的私钥对数据解密，同时向客户端发送一个前面所有内容的 hash 值供客户端检验。这个时候双方都有了三个随机数，按照之前所约定的加密方法，使用这三个随机数生成一把秘钥，以后双方通信前，就使用这个秘钥对数据进行加密后再传输。
7. 返回数据： 当页面请求发送到服务器端后，服务器端会返回一个 html 文件作为响应，浏览器接收到响应后，开始对 html 文件进行解析，开始页面的渲染过程。
8. 页面渲染： 浏览器首先会根据 html 文件构建 DOM 树，根据解析到的 css 文件构建 CSSOM 树，如果遇到 script 标签，则判端是否含有 defer 或者 async 属性，要不然 script 的加载和执行会造成页面的渲染的阻塞。当 DOM 树和 CSSOM 树建立好后，根据它们来构建渲染树。渲染树构建好后，会根据渲染树来进行布局。布局完成后，最后使用浏览器的 UI 接口对页面进行绘制。这个时候整个页面就显示出来了。
9. TCP 四次挥手： 最后一步是 TCP 断开连接的四次挥手过程。若客户端认为数据发送完成，则它需要向服务端发送连接释放请求。服务端收到连接释放请求后，会告诉应用层要释放 TCP 链接。然后会发送 ACK 包，并进入 CLOSE_WAIT 状态，此时表明客户端到服务端的连接已经释放，不再接收客户端发的数据了。但是因为 TCP 连接是双向的，所以服务端仍旧可以发送数据给客户端。服务端如果此时还有没发完的数据会继续发送，完毕后会向客户端发送连接释放请求，然后服务端便进入 LAST-ACK 状态。客户端收到释放请求后，向服务端发送确认应答，此时客户端进入 TIME-WAIT 状态。该状态会持续 2MSL（最大段生存期，指报文段在网络中生存的时间，超时会被抛弃） 时间，若该时间段内没有服务端的重发请求的话，就进入 CLOSED 状态。当服务端收到确认应答后，也便进入 CLOSED 状态。

## 算法

### 排序

- 快速排序
- 插入排序
- 冒泡排序
- 选择排序
- 归并排序

快速排序

> 快速排序的基本思想就是分治法的思想，寻找中间点，并对其左右的序列递归进行排序，直到左右都排序完成。

```
function quickSort (arr) {
    if (arr.length == 0) {
        return arr
    }
    var pirotIndex = Math.floor(arr.length/2)
    var pirot = arr.splice(pirotIndex,1)[0]
    var left = [], right = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > pirot) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return quickSort(left).concat(pirot, quickSort(right))
}
console.log(quickSort([2,4,6,1,7,8,4,9,99,6]))
```

插入排序

> 将数组分为无序区和有序区两个区，然后不断将无序区的第一个元素按大小顺序插入到有序区中去，最终将所有无序区元素都移动到有序区完成排序

冒泡排序

> 比较相邻的元素。如果第一个比第二个大，就交换他们两个。对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。

```
function bubbleSort(arr){
    if(arr.length==0){
        return arr
    }
    for(var i=0;i<arr.length;i++){
        for(j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                // 交换位置
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]] //ES6解构
            }
        }
    }
    return arr
}
console.log(bubbleSort([2,4,6,1,7,8,4,9,99,6]))
```

### 二叉树

## 其他

### 什么是进程、什么是线程

**进程是操作系统资源分配的最小单位；线程是 CPU 调度的最小单位。一个进程可以包含多个线程，线程共享所属进程资源。**

### 设计原则与设计模式

1. 工厂模式

故名思意，我们从字面上的意思就可以看到，可以想象一座工厂源源不断产出一样的产品，流水线作业。没错，工厂模式就是这样。


2. 单例模式

单例模式就是保证一个类仅有一个实例，并提供一个访问它的全局访问点。其实这有一点像我们 vuex 当中的实现，也是一个全局的状态管理，并且提供一个接口访问。

3. 代理模式

我们在事件代理的时候其实就是使用了代理模式，通过把监听事件全部交由父节点进行监听，这样你添加节点或者删除节点的时候就不用去改变监听的代码。

4. 发布订阅模式
这种模式在生活中随处可见，比如你订阅了一个网课，开始前 10 分钟就会提醒你去听课。这里其实就是发布-订阅的模式，你订阅了它的开课信息，但是你不会接收到另一门的开课信息，因为你没有订阅。

5. 适配器模式
6. 策略模式
7. 迭代器模式

<git-talk />
