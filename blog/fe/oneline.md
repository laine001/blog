# 一句话记录

<img src="/images/z-1.jpg" class="zoom post-cover" />

## 有时候修改由 git 提交过的文件名称的大小写无效

全局设置 Git 大小写敏感 `git config --global core.ignorecase false`

## 后端工程设置了允许所有源跨域请求，前端依旧调用失败

一般带有登录鉴权的请求，前端需要配置`withCredentials: true`，此时后端 `cors` 配置如果为`*`，则浏览器依旧会有限制，此时后端应配置请求的来源地址而不是`*`

## target="\_blank"的安全漏洞

使用 window.open 或 a 标签 target="\_blank"，目标页面可以通过`opener.location.replace`跳转钓鱼网站，可通过重置 opener 可以阻止目标页的相关程序

```js
var otherWindow = window.open('https://xxxx')
otherWindow.opener = null
otherWindow.location = url

a标签跳转可直接添加属性rel，其中
// noopener：将 window.opener置空
// noreferrer：兼容老浏览器/火狐。禁用HTTP头部Referer属性（后端方式）
<a target="_blank" href="" rel="noopener noreferrer nofollow">xxx</a>
```

## 伪类与伪元素的区别

伪类用于当已有的元素处于某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。比如，当用户悬停在指定的元素时，我们可以通过:hover 来描述这个元素的状态。

伪元素用于创建一些不在文档树中的元素，并为其添加样式。它允许我们为元素的某些部分设置样式。比如，我们可以通过::before 来在一个元素前增加一些文本，并为文本添加样式。虽然用户可以看到文本，但是实际上它不在文档树中。

<!-- ## localhost 与 127.0.0.1 的区别

localhost: 本地服务器。不经网卡传输，不受网络防火墙和网卡相关的限制
127.0.0.1：本机地址(本机服务器) -->

<!-- localhost 它并不是 IP，而是一种特殊的域名（没有后缀），默认的情况下它解析到的是本地 IP（即 127.0.0.1），主要通过本机的 hosts 文件进行管理，如果你愿意，也可以把 localhost 域名解析到某个公网 IP 上去，也可以被配置为任意的 IP 地址（也就是说，可以通过 hosts 这个文件进行更改），不过通常情况下都（如下）指向： -->

## npm run xxx 基本原理

- 运行`npm run xxx`的时候，npm 会先在当前目录的 node_modules/.bin 查找要执行的程序，如果找到则运行

- 没有找到则从全局的 node_modules/.bin 中查找，npm i -g xxx 就是安装到到全局目录

- 如果全局目录还是没找到，那么就从 path 环境变量中查找有没有其他同名的可执行程序

## 通过设置元素的边框属性`border-inline/block-start/end-width`可以实现类按钮组的样式(边框问题)
https://ant.design/components/radio-cn

## npm link

## 浏览器扩展开发
在浏览器的扩展程序时，如果要开发自定义的调试面板，使用`chrome.devtools.panels.create`方法创建，参数分别为名称、icon、文件、回调。其中名称需为**英文**。[官方文档](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels)

<git-talk />
