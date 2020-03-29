---
title: vuepress
date: 2019-10-23 10:27:34
tags: 'vue'
---
# 首页

> 以[此站](http://180.76.104.35/)为例，介绍使用vuepress搭建博客过程 

## 全局安装

```bash
  npm install -g vuepress
  # or
  yarn global add vuepress
```

## 博客目录

1. 新建docs文件夹，docs文件夹中新建.vuepress文件夹和README.md文件
2. 当前目录生成package.json文件

```bash
  # 1
  mkdir docs
  cd docs
  mkdir .vuepress
  echo "# hello vuepress" > README.md
  # 2
  npm init -y
```
#### 当前目录文件结构

``` bash
vuepress-demo
├── package.json
└── docs
    ├── .vuepress
    │   └── config.js # 配置
    ├── README.md # 首页文件
```

## 修改package.json文件 添加执行脚本
``` bash
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
```

## 开发环境运行
``` bash
  npm run dev  # 访问本地端口页面为/docs/README.md文件内的内容
```

## configjs配置

```js
  module.exports = {
    title: '博客',
    description: '嘎嘣跳的博客',
    nav: [
      { text: '关于', link: 'https://laine001.github.io' }
    ],
    sidebar: [
      '/'
    ]
  }
```
> 重启项目,可以看到title和desc。头部右侧多了一个关于选项

## 打包

```bash
  npm run build # 跟目录会生成.vuepress文件夹
```
