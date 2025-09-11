<template>
  <a :href="link" target="_blank" rel="noopener noreferrer" class="nav-card">
    <div class="card-image">
      <img v-if="img" :src="img" :alt="name" />
      <div v-else class="image-placeholder">
        <span class="placeholder-text">{{ name.charAt(0).toUpperCase() }}</span>
      </div>
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ name }}</h3>
      <p class="card-desc">{{ desc }}</p>
    </div>
  </a>
</template>

<script setup lang="ts">
interface Props {
  name: string
  desc: string
  link: string
  img?: string
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.nav-card {
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: var(--cov-default-radius);
  background-color: #ffffff;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-1);
}

.card-image {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  margin-right: 16px;
  border-radius: var(--cov-small-radius);
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--cov-small-radius);
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background-color: #f3f4f6;
  border-radius: var(--cov-small-radius);
  // border-radius: var(--cov-default-radius);
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-text {
  font-size: 24px;
  font-weight: 600;
  color: #9ca3af;
}

.card-content {
  flex: 1;
  min-width: 0;
}

.card-title {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  line-height: 1.4;
}

.card-desc {
  margin: 0;
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* 暗色主题适配 */
html.dark .nav-card {
  background-color: #1f2937;
  border-color: #374151;
}

html.dark .nav-card:hover {
  border-color: #4b5563;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

html.dark .image-placeholder {
  background-color: #374151;
}

html.dark .placeholder-text {
  color: #6b7280;
}

html.dark .card-title {
  color: #f9fafb;
}

html.dark .card-desc {
  color: #d1d5db;
}
</style>