---
title: webpack工程化
date: 2020-06-12 09:47:08
tags:
---
### webpack是什么

> webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。
> 当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，
> 其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle

### 几个基本概念
  - entry 入口文件
  - output 输出
  - loader
  - plugins
  
<!-- more -->

#### entry
> 入口文件，类似于其他语言的起始文件
> 指示webpack使用某个文件作为构建内部依赖图的开始，可以为多个
> 以entry属性配置

#### output
> 告诉webpack构建好后 在哪里输出所创建的bundle 及如何命名等
> output: { path: '', filename: '' }

#### loader
> 让webpack处理非javascript文件(webpack自身只理解js)
> loader可以将各个类型的文件转换为webpack可以处理的模块 如css less vue jsx'

#### plugins
> 打包优化和压缩，重新定义环境中的变量等更广的任务

### 基础demo理解打包模式

#### 建立工程目录
```bash
mkdir webpack-demo && cd webpack-demo

npm init -y

npm install webpack webpack-cli --save-dev

# 目录结构
# webpack-demo
/src
  - index.js
/dist
  - index.html
package.json
webpack.config.js

```
##### 编写/src/index.js

```js
var dom = document.createElement('div)
dom.innerHTML = 'hello webpack'
document.body.appendChild(dom)

```

##### 编写/dist/index.html

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>xxx</title>
</head>
<body>
  <script src="./bundle.js"></script>
</body>
</html>
```

##### 编写webpack.config.js

```javascript
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }
}
```

#### 构建

```bash
npx webpack
# 查看dist下的index.html是否生效
```

#### 配置loader加载css

### loader原理

> 很多loader的职责都是单一的，只需要完成一种转换。
> 若一个源文件需要多步转换才能使用,就需要多个loader去转换，loader会顺序执行

#### 一个最简单的loader源码

```js
// 运行在nodejs中
const sass = require('node-sass')

module.exports = function(source) {
  // source 为 compiler 传递给 Loader 的一个文件的原内容
  // 该函数需要返回处理后的内容，这里简单起见，直接把原内容返回了，相当于该 Loader 没有做任何转换
  // return source
  // or
  return sass(source)
}

// 使用
// nodemodule中
// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.sass$/',
//         use: ['sass-loader', 'node-sass'],
//         // include
//       }
//     ]
//   }
// }
// 自定义文件（vuecli中）
// vue.config.js
module.exports = {
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.txt$/,
      use: [
        {
          // 文件在本地的地址
          loader: path.resolve('./test-loader'),
          // options: {}
        }
      ]
    })
  }
}
```
#### bable-loader转换es6

```js
module.exports = function(source) {
  // 通过 this.callback 告诉 Webpack 返回的结果
  this.callback(null, source, sourceMaps);
  // 当你使用 this.callback 返回内容时，该 Loader 必须返回 undefined，
  // 以让 Webpack 知道该 Loader 返回的结果在 this.callback 中，而不是 return 中 
  return
  // 其中的 this.callback 是 Webpack 给 Loader 注入的 API，以方便 Loader 和 Webpack 之间通信
  // this.callback(
  //   // 当无法转换原内容时，给 Webpack 返回一个 Error
  //   err: Error | null,
  //   // 原内容转换后的内容
  //   content: string | Buffer,
  //   // 用于把转换后的内容得出原内容的 Source Map，方便调试
  //   sourceMap?: SourceMap,
  //   // 如果本次转换为原内容生成了 AST 语法树，可以把这个 AST 返回，
  //   // 以方便之后需要 AST 的 Loader 复用该 AST，以避免重复生成 AST，提升性能
  //   abstractSyntaxTree?: AST
  // )
}
```
### plugins原理

#### 编写plugin

```js
class DemoPlugin {
  // 在构造函数中获取用户给该插件传入的配置
  constructor(option) {
  }
  // Webpack 会调用 DemoPlugin 实例的 apply 方法给插件实例传入 compiler 对象
  apply(compiler) {
    compiler.plugin('compilation', function(compilation) {
    })
  }
}

modue.exports = DemoPlugin

// 使用
const DemoPlugin = require('./DemoPlugin.js')
module.export = {
  plugins: [
    new DemoPlugin(options)
  ]
}
```