<!-- .vitepress/theme/Layout.vue -->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-bottom>
      <div class="pv-uv-count">
        本站总访问量 <span id="busuanzi_value_site_pv" /> 次 本站访客数 <span id="busuanzi_value_site_uv" /> 人次
      </div>
    </template>
    <template #home-footer>123</template>
  </DefaultTheme.Layout>
</template>
<style>
.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
