# 使用 vitejs 和 vue 搭建个 ui 组件库

## 工程、技术栈

- 🌈 使用的`Monorepo`方式的仓库，将多个包放在已在仓库便于管理:`packages`作为组件源码的包，`docs`作为组件文档，`play` or `dev`作为本地开发时使用
- 🚀 [vue 组件](https://cn.vuejs.org/guide/components/registration.html#component-registration)的开发和注册
- ⚡ 组件文档使用 [vitepress](https://vitepress.dev/zh/)搭建
- 🎉 规范代码工具`eslint`和`prettier`，代码提交检查`Husky`，单元测试`vitest`
- ✨ 提交代码后的文档部署`git action`，免费站点托管`gitPages` or `vercel` or `netlify`
- 🚨 another...

<!-- ## 组件实现

普通组件通常在使用的时候直接引用，ui 库或者通用组件作为全局组件需要暴露出`install`函数。
例如以下的`button组件`，
:::tip
常规使用时，直接 `import MyButton from 'xxx'`。 然后`<MyButton>按钮</MyButton>`
:::

通用组件

<button class="my-button">按钮</button>

:::details

```vue
<template>
  <button class="my-button">按钮</button>
</template>
<style>
.my-button {
  padding: 2px 14px;
  background: pink;
  border-radius: 8px;
}
</style>
```

::: -->

## IKun UI

[文档 🏀](https://github.com/LAINE001/ikun-ui)

<git-talk />
