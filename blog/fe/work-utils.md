# 项目工具随手记

## 获取路径中的参数

```js
function getQuery(k) {
  let searchStr = window && window.location.search && location.search.slice(1)
  if (searchStr) {
    const searchArr = searchStr.split('&') || []
    const result = searchArr.reduce((obj, item) => {
      let [key, ...value] = item.split('=')
      let ans = decodeURIComponent(value.join(''))
      obj[key] = ans
      return obj
    }, {})
    return k ? result[k] : result
  }
}
```

## eggjs 中使用 mock

> 在项目中新建 mock 文件夹，里面专门存放各个 mock 数据 json 文件

```javascript
const glob = require('glob')
const path = require('path')

const mockRoutes = []
// 读取mock文件夹下的所有文件路径
const mockFiles = glob.sync(path.join(__dirname, '../mock/**/*.json'))

mockFiles.forEach((file) => {
  let route = file.split('/mock')[1].replace('.json', '') // 获取真实api路径
  if (route.includes('_/')) {
    route = `${route.split('_/')[0]}*`
  }
  mockRoutes.push(route)
})

module.exports = (app) => {
  const { router, controller } = app
  mockRoutes.forEach((path) => {
    router.all(path, controller.proxy.proxyToMock)
  })
}
```

## 生成指定范围的随机整数

```js
// @param {Number} start 区间起点
// @param {Number} end  区间终点
function rand(start, end) {
  return Math.round(Math.random() * (end - start) + start)
}
```

## 防抖

```js
/**
 * @param {Function} fn  函数
 * @param {Number} delay 时延
 * @param {Object} context 上下文
 * @return {Function}
 */
export function debounce(fn, delay = 100, context = null) {
  let timer = null
  return (...params) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(context, ...params)
    }, delay)
  }
}
```

## 节流

```js
/**
 * @param {Function} fn  函数
 * @param {Number} threshold 时延
 * @param {Object} context 上下文
 * @return {Function}
 */
function throttle(fn, threshold = 50, context = null) {
  let last
  let timer = null
  return (...params) => {
    const now = +new Date()
    if (last && now < last + threshold) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        fn.call(context, ...params)
      }, threshold)
    } else {
      last = now
      fn.call(context, ...params)
    }
  }
}
```

## 复制

```js
// import ***
function copyText(text) {
  return new Promise(function (resolve, reject) {
    var fakeElement = document.createElement('button')
    var clipboard = new Clipboard(fakeElement, {
      text: function () {
        return text
      },
      action: function () {
        return 'copy'
      },
      container: document.body,
    })
    clipboard.on('success', function (e) {
      clipboard.destroy()
      resolve(e)
    })
    clipboard.on('error', function (e) {
      clipboard.destroy()
      reject(e)
    })
    document.body.appendChild(fakeElement)
    fakeElement.click()
    document.body.removeChild(fakeElement)
  })
}
```

## 获取字符的长度（包括中英文符号等）

```js
const getStringWidth = (val) => {
  let len = 0
  for (let i = 0; i < val.length; i++) {
    const length = val.charCodeAt(i)
    if (length >= 0 && length <= 128) {
      len += 1
    } else {
      len += 2
    }
  }
  return len
}
```

## 等待执行

```js
export const sleep = (delay) => new Promise((resolve) => setTimeout(() => resolve(null), delay))
```

## 是否为闰年

```js
export function isLeapYear(y) {
  return y % 100 ? !(y % 4) : !(y % 400)
}
```

## 获取路径中所有的 query

```js
export const getUrlParam = () => {
  try {
    // 获取url中"?"符后的字串
    const url = location.search
    const theRequest: any = {}
    if (url.indexOf('?') !== -1) {
      const str = url.substr(1)
      const strs = str.split('&')
      for (let i = 0; i < strs.length; i++) {
        const [k = '', v = ''] = strs[i].split('=')
        theRequest[k] = decodeURIComponent(v)
      }
    }
    return theRequest
  } catch (e) {
    return {}
  }
}
```

## 将 object 拼接成 query 格式的 string

```js
/**
 * 将object拼接成query格式的string
 * @param object
 * @returns string param1=xxx&param2=xxx
 */
export const setUrlSearch = (objs = {}) => {
  const _rt: any = []
  Object.keys(objs).forEach((key) => {
    const _val = objs[key]
    if (_val) {
      _rt.push(`${key}=${typeof _val === 'object' ? JSON.stringify(_val) : _val}`)
    }
  })
  return _rt.join('&')
}
```

<git-talk />
