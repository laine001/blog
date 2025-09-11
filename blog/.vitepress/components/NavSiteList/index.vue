<script setup lang="ts">
import someSite from '../../config/some-site';
import NavCard from '../NavCard/index.vue';
</script>
<template>
  <div class="nav-site-list">
    <template v-for="group in someSite" :key="group.category">
      <h2 class="group-title">{{ group.category }}</h2>
      <div class="list">
        <template v-for="value in group.list" :key="value.link">
          <NavCard :name="value.name" :desc="value.desc" :link="value.link" :img="value.img" />
        </template>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.nav-site-list {
  .group-title {
    margin: 32px 0 16px 0;
    font-size: 1.5em;
    font-weight: 600;
    color: var(--vp-c-text-1);
    // border-bottom: 1px solid var(--vp-c-divider);
    padding-bottom: 8px;

    &:first-child {
      margin-top: 20px;
    }
  }

  .list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
    margin-bottom: 20px;
  }
}
</style>