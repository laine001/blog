<script setup>
import { onMounted } from 'vue'
import md5 from 'md5'
import Gitalk from 'gitalk'
import 'gitalk/dist/gitalk.css'
onMounted(() => {
  const config = {
    client_id: '23159cfb3679d024812f',
    client_secret: '2cfc23c09cc95de676e9d761df15963c1e823b8e',
    repo: 'blog',
    owner: 'laine001',
    admin: ['laine001'],
    id: md5(location.pathname),
    distractionFreeMode: false,
  }
  const gitalk = new Gitalk(config)
  gitalk.render('gitalk-container')
})
</script>
<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>
<style>
.git-container .git-header-textarea {
  color: #000;
}
</style>
