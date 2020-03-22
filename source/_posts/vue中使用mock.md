---
layout: using Mock In Vue
title: Vue中使用mock
date: 2019-08-02 22:49:03
tags: vue
categories: javascript
---
配置mock之前需配置好axios
```bash
  npm install mock
```
> 基础使用（单独页面中使用）
```html
<button @click="getData"> 生成数据 </button>
```
```javascript
import Mock from 'mockjs' // node方式引入 (CommonJS)

export default {
  name: 'HelloWorld',
  data() {
    return {
      mockData: [] // 生成数据
    }
  },
  methods: {
    getRandom () {
      this.mockData = Mock.mock({ //生成数据规则
        'list|1-10': [{
          'id|+1': 1
        }]
      })
      document.body.innerHTML += '<pre>' + JSON.stringify(this.mockData, null, 4) + '</pre>' // 展示到页面中
    }
  }
```

> 全局配置
配置好的requestjs文件中
```javascript
import axios from 'axios'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-urlencoded'
const http = axios.create()

http.defaults.timeout = 3000

http.interceptors.request.use(config => { // 请求拦截器配置 // 可不配置
    // do sth
    return config
}, error => {
    console.log(error)
    return Promise.reject(error)
})

http.interceptors.response.use(response => { // 响应拦截器配置 // 可不配置
    // do something
    return response
}, error => {
    console.log(error)
    return Promise.reject(error)
})

export function fetch(url, params) { // 封装axios的post请求
    return new Promise((resolve, reject) => { // promise 用法,自行查阅
        axios.post(url, params).then(response => {
            resolve(response.data) // promise相关
        }).catch(error => {
            reject(error) // promise相关
        })
    })
}

export default { // 暴露htto_mock方法，即后面页面中用到的方法
    http_mock(url, params) {
        return fetch(url, params)
    }
}
```
> 然后配置mockjs
```javascript
import Mock from 'mockjs'

const Random = Mock.Random

var listData = function() {
    let _data = []
    for (let i = 0; i < 20; i++) {
    let newList = { // 详细 规则 参照mockjs官网
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      imgSrc: Random.dataImage('200x160', '这是图片中的文本'), // Random.dataImage( size, text ) 生成图片（base64位数据格式）
      author_name: Random.cname(), // Random.cname() 随机生成中文名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
      _data.push(newList)
  }
  return {_data: _data}
}
// url为要拦截的请求地址  请求方式  请求数据（规则） （此处api会被mockjs拦截）
Mock.mock('http://route.showapi.com/60-27', 'post', listData)

```
> mainjs中引入即可
```javascript
import request from '@/http/request'
```
> 最后就是页面中使用了
```javascript
// import request from '@/http/request' // 页面中引入配置好的api请求
created () {
    this.getData()
},
method: {
    getData() { // 假装要使用http_mock发送请求（#手动滑稽#）（mock自动拦截请求并生成数据）
         request.http_mock('http://route.showapi.com/60-27','api_id=63114&api_sign=3847b0').then(response => {
            console.log(response._data)
         }
    }  
}
```
完事其他页面中引入下就能使用了，后台接口对接好之后，mockjs直接取消使用就ok了