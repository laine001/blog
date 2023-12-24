# 洋葱模型

<img class="post-img" src="https://www4.bing.com//th?id=OHR.TunisiaAmphitheatre_ZH-CN4431856872_UHD.jpg" />

## 一个请求经过中间件最后生成响应

![洋葱模型](https://camo.githubusercontent.com/d80cf3b511ef4898bcde9a464de491fa15a50d06/68747470733a2f2f7261772e6769746875622e636f6d2f66656e676d6b322f6b6f612d67756964652f6d61737465722f6f6e696f6e2e706e67)

## 基于 koa2 的 demo

```js
const Koa = require('koa')

const app = new Koa()
const PORT = 3000

// #1

app.use(async (ctx, next) => {
  console.log('wareA')
  await next()
  console.log('wareA')
})
// #2
// app.use和eggjs里配置config.middleware = []同理
app.use(async (ctx, next) => {
  console.log('wareB')
  await next()
  console.log('wareB')
})

app.use(async (ctx, next) => {
  console.log('wareC')
})

app.listen(PORT)
```

> 访问 localhost:3000,控制台输出

```
wareA
wareB
wareC
wareB
wareA
```

> 当程序运行到 await next()时，会进入到下一个中间件，处理完之后才会继续处理 next 之后的程序
> 可以非常方便的实现后置处理逻辑

<git-talk />
