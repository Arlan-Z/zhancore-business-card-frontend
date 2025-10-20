<script setup lang="ts">
defineProps<{
  from: string
  to: string
  difference: number
  side: string
}>()
</script>

<template>
  <div
      class="section-divider"
      :style="{
      background: `linear-gradient(${side == 'left' ? 'to left bottom': 'to right bottom'}, ${from} 50%, ${to} 20%)`
    }"
  ></div>
</template>

<style scoped>
.section-divider {
  height: v-bind(difference);
  width: 100%;
}
</style>
