---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: '嘎嘣跳的博客'
  # text: '菜鸟的日常记录'
  # tagline: Caring is not an advantage .
  image:
    # src: /logo.jpg
    alt: Laine's Blog
  actions:
    - theme: brand
      text: ✨ 开 始
      link: /fe/oneline
    - theme: alt
      text: 👉Github
      link: https://github.com/LAINE001/blog

features:
  - title: 📒 博客
    details: 记录一些前端的知识点或者工作中的一些问题
    link: /fe/oneline.html
    linkText: 去看看
  - title: 🐔 学习
    details: 一些学习记录或者总结，也会有自己精选的博客或者文章
    link: /fe/oneline.html
    linkText: 去看看
  - title: 💕 生活
    details: 一些简单的生活记录
    link: /life/medicine.html
    linkText: 去看看
---

<script setup lang="ts">
import { onMounted } from 'vue'
import confetti from 'canvas-confetti'
onMounted(() => {
  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 170,
      origin: { y: 0.6 },
    })
  }, 200)
})

// var end = Date.now() + (1 * 260);
// var colors = ['#3451b2', '#6f42c1', '#299764'];
// (function frame() {
//   confetti({
//     particleCount: 2,
//     angle: 60,
//     spread: 55,
//     origin: { x: 0 },
//     // colors: colors ?? []
//   });
//   confetti({
//     particleCount: 2,
//     angle: 120,
//     spread: 55,
//     origin: { x: 1 },
//     // colors: colors ?? []
//   });

//   if (Date.now() < end) {
//     requestAnimationFrame(frame);
//   }
// }());
</script>
