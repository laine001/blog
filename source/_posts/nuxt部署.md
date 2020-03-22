---
title: nuxt部署
date: 2020-03-22 20:56:43
tags: server
---

> 服务器: centos7.6版本

### 安装nginx

> 不怎么懂各种操作的意思，网上有很多参考文章。https://www.cnblogs.com/bluestorm/p/4574688.html

- nginx配置

```bash
server {
    listen       8000;
    #    listen       somename:8080;
    server_name  localhost;
 
    location /admin {  // 访问ip:8080/admin 时会出现/var/www/admin下的indexhtml文件
        #    root   html;
        alias /var/www/admin;
        index  index.html index.htm;
    }
}
```
- 安装nodejs、yarn、pm2

```bash
url --silent --location https://rpm.nodesource.com/setup_10.x | sudo bash - // 下载源文件

sudo yum install -y nodejs // 安装nodejs (node -v)

sudo yum install yarn // 安装yarn

npm install -g pm2

```

- 本地nuxt项目代码执行npm run build (.nuxt文件夹下会生成dist文件目录)

- 把 .nuxt、static、nuxt.config.js 、package.json四个文件夹复制到服务器上

- 服务器上 执行npm install -production（生产环境安装依赖）

- npm run start （开启node服务）（若缺失什么文件会有提示，再复制过去即可）

> 此时正常情况下，网站已经可以访问。退出xshell后，就会报错（缺少pm2进程守护）

- pm2 start npm --name "package.json文件中的name" -- run start


### 问题

公司服务器上安装nodejs的时候 执行curl和install 两步后 node -v 查看版本后 没有出现版本号

试了很多次，都没有成功，最后

- 到/etc/yum.repos.d下关于nodesource...的文件有两个，全部手动删除

- 重新执行curl 和 install 那两步后 node -v npm -v 成功安装

### pm2常用命令

```bash
- pm2 list  查看所有启动的应用程序

- pm2 show app-name 查看某app所有信息

- pm2 delete all 删除所有

- pm2 stop 0 停止指定id的应用
```
 

### 目前更新项目：

```bash
npm run build 后 把那五个文件夹放到服务器上之后 需要重启node服务

ps aux | grep node 查看node进程 sudo kill -9 <进程号>

目录下启动服务 npm run start

目录下开启进程守护  pm2 start npm --name "package.json文件中的name" -- run start

```