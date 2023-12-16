# 一句话问题记录

## 有时候修改由git提交过的文件名称的大小写无效

全局设置Git大小写敏感 `git config --global core.ignorecase false`


## 后端工程设置了允许所有源跨域请求，前端依旧调用失败

一般带有登录鉴权的请求，前端需要配置`withCredentials: true`，此时右端cors配置如果为`*`，则浏览器依旧会有限制，此时后端应配置请求的来源地址而不是`*`