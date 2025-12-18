<template>
  <div class="base-card" :class="[variant, { hoverable }]">
    <div v-if="$slots.image" class="card-image" :class="`card-image-${variant}`">
      <slot name="image"></slot>
    </div>
    <div class="card-content" :class="`card-content-${variant}`">
      <h3 v-if="title" class="card-title">{{ title }}</h3>
      <div v-if="showDivider" class="card-divider"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  variant?: 'project' | 'client'
  showDivider?: boolean
  hoverable?: boolean
}>()
</script>

<style scoped>
.base-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.base-card.project {
  background: #353849;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.base-card.client {
  min-width: 400px;
  max-width: 400px;
  height: 500px;
  background: #424C6D;
  box-shadow: 10px 10px 6px rgba(0, 0, 0, 0.2);
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
}

.base-card.hoverable:hover {
  transform: translateY(-8px);
  box-shadow: 15px 15px 12px rgba(0, 0, 0, 0.25);
}

.card-image {
  width: 100%;
  overflow: hidden;
  flex-shrink: 0;
}

.card-image-project {
  height: 331px;
  background: #FFFFFF;
}

.card-image-project :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.card-image-client {
  height: 250px;
  background: #D9D9D9;
  border-radius: 6px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-image-client :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
}

.card-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-content-project {
  padding: 28px;
  min-height: 331px;
}

.card-content-client {
  padding: 0;
}

.card-title {
  font-size: 28px;
  font-weight: 600;
  color: #FAFAFA;
  margin-bottom: 15px;
}

.base-card.project .card-title {
  font-size: 32px;
}

.card-divider {
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.25);
  margin-bottom: 20px;
}

.card-content :deep(p) {
  font-size: 18px;
  font-weight: 300;
  color: #FAFAFA;
  line-height: 1.3;
}

.card-content-project :deep(p) {
  font-size: 24px;
  line-height: 1.2;
}
</style>