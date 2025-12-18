<script setup lang="ts">
defineProps<{
  show: boolean
  message?: string
}>()
</script>


<template>
  <div class="loading-overlay" v-if="show">
    <div class="spinner"></div>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<style scoped>
.loading-overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 40px;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-top-color: #FAFAFA;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

p {
  color: #FAFAFA;
  font-size: 16px;
}
</style>