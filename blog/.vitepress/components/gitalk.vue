<script setup>
import { onMounted } from 'vue'
import md5 from 'md5'
import Gitalk from 'gitalk'
import 'gitalk/dist/gitalk.css'
onMounted(() => {
  const config = {
    client_id: '589f872f60f860d5c296',
    client_secret: 'c8d38af3417f2ffce09d1a0079daa27bc7c3ca70',
    repo: 'laine001',
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
