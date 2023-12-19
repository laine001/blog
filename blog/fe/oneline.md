# 一句话问题记录

<img class="post-img" src="https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/7p/wallhaven-7prmdv.jpg?" />

## 有时候修改由 git 提交过的文件名称的大小写无效

全局设置 Git 大小写敏感 `git config --global core.ignorecase false`

## 后端工程设置了允许所有源跨域请求，前端依旧调用失败

一般带有登录鉴权的请求，前端需要配置`withCredentials: true`，此时右端 cors 配置如果为`*`，则浏览器依旧会有限制，此时后端应配置请求的来源地址而不是`*`

## target="_blank"的安全漏洞
使用window.open或a标签target="_blank"，目标页面可以通过`opener.location.replace`跳转钓鱼网站，可通过重置opener可以阻止目标页的相关程序
```js
var otherWindow = window.open('https://xxxx')
otherWindow.opener = null
otherWindow.location = url

a标签跳转可直接添加属性rel，其中
// noopener：将 window.opener置空
// noreferrer：兼容老浏览器/火狐。禁用HTTP头部Referer属性（后端方式）
<a target="_blank" href="" rel="noopener noreferrer nofollow">xxx</a>
```

<git-talk />

