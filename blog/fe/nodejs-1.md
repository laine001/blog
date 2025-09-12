---
title: nodejs实现单线程高并发原理
date: 2020-09-04 17:31:43
tags: nodejs
categories: nodejs

cover: https://www4.bing.com//th?id=OHR.LiQiu2023_ZH-CN9197909278_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp
thumbnail: https://www4.bing.com//th?id=OHR.LiQiu2023_ZH-CN9197909278_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp
---

# 一些nodejs相关的知识

## 创建静态文件服务器

### 所需模块
```js
var http = require('http')
var fs = require('fs')
var path = require('path')
var mime = require('mime') // 附加的mime模块 有根据文件扩展名得出mime类型的能力

var cache = {}
```

### 工具函数

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
### 提供静态服务

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

### 创建http服务器

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

## node中的mysql使用

### 连接

```js
const mysql = require('mysql')

const db = mysql.createConnection({
  host:     '127.0.0.1',
  user:     'root',
  password: 'root',
  database: 'myblog'
})
```

### 创建数据库表

```js
db.query(
  `CREATE TABLE IF NOT EXISTS work (
  id INT(10) NOT NULL AUTO_INCREMENT,
  hours DECIMAL(5,2) DEFAULT 0,
  date DATE,
  desc LOGGTEXT,
  PRIMARY KEY(id))`,
  function(err) {
    if (err) throw err
    console.log('server started')
    server.listen(3000, '127.0.0.1')
  }
)
```

### 常用操作

```js
exports.add = (db, req, res) => {
  db.query(
    `ININSERT INTO work (hours, date, desc)
    VALUES (?,?,?)
    [hoursVal,dateval,descVal]`
  )
}
exports.delete = (db, req, res) => {
  db.query(
    `
      DELETE FROM work WHERE id=?
      [idVal]
    `
  )
}
exports.show = (db, req, curId) => {
  const query = `
    SELECT * FROM work
    WHERE archived=?
    ORDER BY date DESC
  `
  const curId = curId ? 1 : 0
  db.query(
    query,
    [curId]
  )
}
```

## 高并发

在接触Nodejs的时候，听的最多的关键字就是：事件驱动、非阻塞I/O、高效、轻量，是单线程且支持高并发的脚本语言。可为什么单线程的nodejs可以支持高并发呢？很多人都不明白其原理，自己也在很长一段时间内被这些概念搞的是云里雾里。下面我们就来一步一步揭开其神秘的面纱。并且，通过底层C/C++源码的学习，来剖析Nodejs实现高并发的之一------事件循环的实现。

从Node.js进入我们的视野时，我们所知道的它就由这些关键字组成`事件驱动`、`非阻塞I/O`、`高效轻量`，它在官网中也是这么描述自己的。


> 于是在我们刚接触Nodejs时，会有所疑问：

- 为什么在浏览器中运行的Javascript 能与操作系统进行如此底层的交互？  
- nodejs 真的是单线程吗？
- 如果是单线程，他是如何处理高并发请求的？
- nodejs 事件驱动是如何实现的？

#### 架构一览

<img src="/assets/nodejs-1.jpeg" />

1. Node.js 标准库，这部分是由 Javascript 编写的，即我们使用过程中直接能调用的 API。在源码中的 lib 目录下可以看到。

2. Node bindings，这一层是 Javascript 与底层 C/C++ 能够沟通的关键，前者通过 bindings 调用后者，相互交换数据。实现在 node.cc
这一层是支撑 Node.js 运行的关键，由 C/C++ 实现。

3. Google 推出的 Javascript VM，也是 Node.js 为什么使用的是 Javascript 的关键，它为Javascript 提供了在非浏览器端运行的环境，它的高效是 Node.js 之所以高效的原因之一。
4. Libuv：它为 Node.js 提供了跨平台，线程池，事件池，异步 I/O 等能力，是 Node.js 如此强大的关键。
5. C-ares：提供了异步处理 DNS 相关的能力。
6. http_parser、OpenSSL、zlib 等：提供包括 http 解析、SSL、数据压缩等其他的能力。

### 与操作系统交互

> 举个简单的例子，我们想要打开一个文件，并进行一些操作，可以写下面这样一段代码：

```javascript
var fs = require('fs');
fs.open('./test.txt', "w", function(err, fd) {
 //..do something
});
```
> 这段代码的调用过程大致可描述为：lib/fs.js → src/node_file.cc → uv_fs

```c++
// src/node_file.cc
lib/fs.js
async function open(path, flags, mode) {
mode = modeNum(mode, 0o666);
path = getPathFromURL(path);
validatePath(path);
validateUint32(mode, 'mode');
return new FileHandle(
await binding.openFileHandle(pathModule.toNamespacedPath(path),
stringToFlags(flags),
mode, kUsePromises));
}
...
uv_fs
/* Open the destination file. */
dstfd = uv_fs_open(NULL,
...
uv_fs_req_cleanup(&fs_req);
```

::: tip
具体来说，当我们调用 fs.open 时，Node.js 通过 process.binding 调用 C/C++ 层面的 Open 函数，然后通过它调用 Libuv 中的具体方法 uv_fs_open，最后执行的结果通过回调的方式传回，完成流程。我们在 Javascript 中调用的方法，最终都会通过 process.binding 传递到 C/C++ 层面，最终由他们来执行真正的操作。Node.js 即这样与操作系统进行互动。
:::

### 为什么单线程效率可以这么高

同时处理数万级的并发而不会造成阻塞呢？就是我们下面所说的--------事件驱动。 

1. 每个Node.js进程只有一个主线程在执行程序代码，形成一个执行栈（execution context stack)。

2. 主线程之外，还维护了一个"事件队列"（Event queue）。当用户的网络请求或者其它的异步操作到来时，node都会把它放到Event Queue之中，此时并不会立即执行它，代码也不会被阻塞，继续往下走，直到主线程代码执行完毕。

3. 主线程代码执行完毕完成后，然后通过Event Loop，也就是事件循环机制，开始到Event Queue的开头取出第一个事件，从线程池中分配一个线程去执行这个事件，接下来继续取出第二个事件，再从线程池中分配一个线程去执行，然后第三个，第四个。主线程不断的检查事件队列中是否有未执行的事件，直到事件队列中所有事件都执行完了，此后每当有新的事件加入到事件队列中，都会通知主线程按顺序取出交EventLoop处理。当有事件执行完毕后，会通知主线程，主线程执行回调，线程归还给线程池。

4. 主线程不断重复上面的第三步。

> 我们所看到的node.js单线程只是一个js主线程，本质上的异步操作还是由线程池完成的，node将所有的阻塞操作都交给了内部的线程池去实现，本身只负责不断的往返调度，并没有进行真正的I/O操作，从而实现异步非阻塞I/O，这便是node单线程和事件驱动的精髓之处了

[原文链接](https://cloud.tencent.com/developer/article/1169075)