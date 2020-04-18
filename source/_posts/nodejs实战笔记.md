---
title: nodejs实战笔记
date: 2020-03-28 17:42:32
tags: nodejs
---

# 创建静态文件服务器

## 所需模块
```js
var http = require('http')
var fs = require('fs')
var path = require('path')
var mime = require('mime') // 附加的mime模块 有根据文件扩展名得出mime类型的能力

var cache = {}
```

## 工具函数
```js
// 错误数据
function send404(response) {
    response.writeHead(404, { 'Content-Type': 'text/plain' })
    response.write('Error 404: resource not found')
    response.end()
}
// 文件数据
function sendFile(response, filePath, fileContents) {
    response.writeHead(
        200,
        { 'Content-Type': mime.lookup(path.basename(filePath)) }
    )
    response.end(fileContents)
}
```
## 提供静态服务
> 访问内存(ram)要比访问文件系统快很多，node程序中通常会把常用的数据缓存到内存里。
> 只有第一次访问的时候需要从文件系统中读取

```js
function serveStatic(response, cache, absPath) {
    if (cache[absPath]) {
        sendFile(response, absPath, cache[absPath])
    } else {
        fs.exists(absPath, function(isExist) {
            if (isExist) {
                fs.readFile(absPath, function(err, data) {
                    if (err) {
                        send404(response)
                    } else {
                        // 从硬盘中读取文件并返回
                        cache[absPath] = data
                        sendFile(response, absPath, data)
                    }
                })
            } else {
                send404(response)
            }
        })
    }
}
```
## 创建http服务器

```js
var server = http.createServer(function(request, response) {
    var filePath = false

    if (request.url == '/') {
        filePath = 'public/index.html'
    } else {
        // 将url路径转为文件的相对路径
        filePath = 'public' + request.url
    }
    var absPath = './' + filePath
    serveStatic(response, cache, absPath)
})

server.listen(3000)
```