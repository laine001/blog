# package.json文件中各字段

[官方文档(英文)](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)

## `type`

默认的模板系统：
1. `commonjs`(默认)，使用时使用`require()`
2. `module`，使用时使用`import/export`，文件后缀`.js`会被当做ESM处理

## `exports`
现代推荐。更精细的控制模块导出（替代`main`、`brower`、`module`等字段），支持条件导出，适配不同的环境。

```json
"exports" : {
  ".": {
    "import": "./dist/index.esm.js", // 或者 "./dist/index.mjs"
    "require": "./dist/index.cjs.js" // 后者 "./dist/index.cjs"
  },
  "./utils": "./dist/utils.js"
}
```

## `scripts`

脚本：定义常用的快捷命令。

```json
// 常用脚本
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
  "build": "webpack --mode production",
  "test": "jest",
  "lint": "eslint . --ext .js,.jsx",
  "prepublishOnly": "npm run build",
  "postinstall": "npx prisma generate"
}
```

## `dependencies`
生产环境中必需的包，被项目直接使用。

## `devDependencies`
仅在开发时用到的依赖包。安装时一般后缀加上`-dev`

## `peerDependencies`
声明当前包需要宿主环境提供的依赖（常用于插件库）在项目中不起作用。
开发时一般会配合 devDependencies 来实现开发和发包时的版本解耦。

```json
{
  "peerDependencies": {
    "react": "16 || 17 || 18" // or react: ">=16.8.0"
  },
  "devDependencies": {
    "react": "16"
  }
}
```

## `optionalDependencies`
定义可选依赖项，和 dependencies 非常类似，主要的差别：
在 optionalDependencies 中的依赖包安装报错甚至找不到时不会影响到包管理器的安装行为。

## `engines`
指定项目运行所需的 Node.js/npm 版本范围

```json
"engines": {
  "node": ">=16.0.0",
  "npm": ">=8.0.0"
}
```

## `bin`

定义全局可执行命令（CLI 工具）。用于将你包中的某个JavaScript文件注册为全局可执行命令。

🌰

1. 在项目目录新建文件/bin/hello.js并编写

```js
#!/usr/bin/env node
// 第一行是 shebang，告诉系统这是一个 Node.js 脚本（重要！）

console.log('hello world ~')
```

2. 修改 package.json

```json
{
  "bin": {
    "hello": "./bin/hello.js"
  }
}
```

或者简写形式：

```json
{
  "bin": "./bin/hello.js"
}
```

3. 此包发布之后，安装之后，可直接终端执行 `hello`，将输出 `hello world ~`。

## `private`

是否私有，为true时将不允许发布到npm。



## npm 常见命令

### npm link

可以让你在本地写的模块，在别的项目里直接使用，就像已经在当前项目里安装了一样。

举例：

本地有两个项目：`utils-project`和`app-project`。
1. 在`utils-project`中执行 `npm link`
2. 在`app-project`中执行 `npm link utils-project`

在app项目里可以直接使用utils-project中的方法，**且会自动更新**。

发布的时候记得 `unlink`

### 其他

|命令 | 作用 | 示例 | 说明 |
|------|------|------|------|
| `npm config list` | 查看当前 npm 的所有配置（全局 + 项目级） | `npm config list` | 显示 registry、cache、prefix、user-agent 等全部配置项，可用于排查安装问题 |
| `npm config get <key>` | 获取指定配置项的值 | `npm config get registry` | 输出如：`https://registry.npmmirror.com`<br>常用于确认镜像源是否生效 |
| `npm config set <key> <value>` | 设置指定配置项 | `npm config set registry https://registry.npmmirror.com` | 常用于切换国内镜像加速下载<br>等价于修改 `~/.npmrc` 文件 |
| `npm ls` | 查看项目依赖树（完整结构） | `npm ls` | 展示所有包及其嵌套依赖层级<br>可加 `--depth=0` 只显示顶层依赖 |
| `npm ls <package-name>` | 检查某个依赖是否已安装及版本 | `npm ls lodash` | 若未安装：`empty`<br>若已安装：显示版本号和路径<br>推荐用于排查“幽灵依赖”或缺失包 |
| `npm install --legacy-peer-deps` | 安装依赖时忽略 peerDependencies 冲突 | `npm install --legacy-peer-deps` | 解决因 peer 版本不兼容导致的安装失败<br>适用于旧项目或第三方库兼容性问题<br>⚠️ 不是长期解决方案，建议修复版本约束 |
| `npm view <package> [field]` | 查看包的元信息（如版本、作者、依赖等） | `npm view react version`<br>`npm view express versions` | `version`：最新版本<br>`versions`：所有可用版本（数组） |

## 幽灵依赖

::: danger
你的项目没有在 package.json 中显式声明某个依赖包，但在代码中却能正常使用它 —— 因为它被其他依赖包"间接安装"了。 

它是一个隐蔽但危险的陷阱。
:::

比如：你在项目中使用到了 `lodash`，但是没有在 `package.json` 中声明（dependencies和devDependencies中没有lodash），但是存在`express`。

代码可以正常执行，因为express（比如v4.17.x）内部已经安装了lodash（node_modules中存在）。