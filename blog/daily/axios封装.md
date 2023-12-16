---
title: vue-axios
date: 2019-07-20 21:46:58
tags: vue
categories: javascript
---
### Vue中封装axios的一种方法

> 安装axios
```bash
npm install axios --save
```

<!-- more -->

> 单独写个文件配置axios,此处命名为request.js
```javascript
import axios from axios

//自定义配置新建一个axios实例
const http = axios.create({
    // baseURL: 'https://...' 
    // baseURL: process.env.BASE_API,
    timeout: 5000, // 请求延迟
    // headers: {'x-Request-with': '*'} //自定义请求头
    // ....
})
// 添加请求拦截器
http.interceptors.request.use(config => {
  // 请求前设置请求头
  config.headers['Access-Control-Allow-Origin'] = '*'
    // config.headers['Authorization'] = getToken()
    // config.headers['Actcode'] = getCode()
    return config
}, error => {
  console.log(error, '888') //请求错误 dsth
  return Promise.reject(error)
})
// 响应拦截器
http.interceptors.response.use(response => {
  return response
}, error => {
  console.log(error, '888')//返回消息后 dsth
  return Promise.reject(error)
})
export default http  // 记住此处
```
> api.js文件中配置请求
```javascript
import http from '@/http/request'

export function requestDemo (showapi_appid, showapi_sign) { //方法名 requestDemo
  const pass = {showapi_appid, showapi_sign}
  return http({
    url: 'http://route.showapi.com/60-27',
    method: 'post',
    data: pass
  })
}
```
> 页面中使用
```javascript
import { requestDemo } from '@/../api'

const params = {
  name: 'laine',
  pw: '123456'
}
requestDemo(params).then().catch()
```