# koa 实现基础爬虫

## koa 基础初步使用

> Koa 由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。
> 没有捆绑任何中间件， 而是提供了一套优雅的方法去编写服务端应用程序

### 安装、启动服务

```bash
npm init
npm install koa
```

```javascript
const koa = require('koa')
const app = new koa()

// 启动服务 端口为3000
app.listen(3000)
```

:::tip
这样每次修改文件都需要重新启动服务，可以使用 nodemon 监听文件变化自动重启
`npm install nodemon -g` 然后启动服务时，使用`nodemon app.js`
:::

### 响应返回

```javascript
const koa = require('koa')
const app = new koa()

app.use(async (ctx) => {
  ctx.body = 'Hello World'
})

// 启动服务 端口为3000
// 浏览器访问locahost:3000 返回hello world
app.listen(3000)
```

### 使用 koa-router 插件管理路由

> 为 koa 设计的路由中间件，路由由 url 生成

```javascript
const koa = require('koa')
const app = new koa()
// 引入路由、实例化
const router = require('koa-router')()

router.get('/api/testapi', async (ctx) => {
  // const data = await fetchData()
  const data = '这是从testapi返回出去的数据'
  ctx.body = data
})

app.use(router.routes())
app.use(router.allowedMethods())

// 浏览器访问locahost:3000/api/testapi
app.listen(3000)
```

## 爬取数据

### 安装插件、首次完整抓取

```bash
# 安装所需插件
npm install superagent cheerio superagent-charset
```

```javascript
const koa = require('koa')
const app = new koa()
const router = require('koa-router')()

// 引入插件
const charset = require('superagent-charset')
const superagent = require('superagent')
charset(superagent)
const cheerio = require('cheerio')

superagent
  .get('https://s.weibo.com/top/summary?cate=realtimehot')
  .charset()
  .end((err, sres) => {
    const html = sres.text
    console.log(html)
  })

router.get('/api/testapi', async (ctx) => {
  const data = '这是从testapi返回出去的数据'
  ctx.body = data
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
```

> 此时启动服务，就会去访问微博热搜页面，命令行中打印页面源码说明爬取成功

### 分析节点源码，处理数据

```js
const $ = cheerio.load(html)
let hotList = []
$('#pl_top_realtimehot table tbody tr').each(function (index) {
  if (index !== 0) {
    const $td = $(this).children().eq(1)
    const link = 'https://s.weibo.com' + decodeURI($td.find('a').attr('href'))
    const text = $td.find('a').text()
    const hotValue = $td.find('span').text()
    const icon = $td.find('img').attr('src') ? 'https:' + $td.find('img').attr('src') : ''
    hotList.push({
      sort: index,
      link,
      text,
      hotValue,
      icon,
    })
  }
})
```

### 前端请求数据、查看接口返回

> 本地环境中，koa 服务需要设置 cors 以允许跨域访问
> 使用 koa-router 管理请求

```bash
npm install koa2-cors koa-router --save
```

```javascript
const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')();

// 设置允许跨域访问服务
const cors = require('koa2-cors')
app.use(cors())

- app.use(async ctx => {
- 	const data = await getSinaData()
- 	ctx.body = data
- })

+ router.get('/api/getSinaHotSearchList', async ctx => {
+ 	const data = await getSinaData()
+ 	ctx.body = data
+ })

app.listen(3000, () => {
  console.log(`success and it is listening at port 3000`)
})

```

> 页面接口请求、查看返回数据

```javascript
fetch
  .get('http://localhost:3000/api/getSinaHotSearchList')
  .then((response) => response.json())
  .then((res) => {
    console.log(res)
  })
```

<git-talk />
