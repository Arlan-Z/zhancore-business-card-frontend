<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { getClients } from '@/api/index.ts'
import BaseCard from '@/components/common/BaseCard.vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import { useSlider } from '@/composables/useSlider'
import { useImageError } from '@/composables/useImageError'
import { useApi } from '@/composables/useApi'
import type Client from '@/api/models/client'

const { data: clients, loading, error, execute: fetchData } = useApi<Client[]>(getClients)

const SLIDER_CONFIG = {
  cardWidth: 400,
  gap: 40,
  visibleCards: 3,
  autoPlayInterval: 3000,
  transitionDuration: 800
}

const {
  displayItems: displayClients,
  currentOffset,
  containerWidth,
  transitionEnabled,
  pauseAuto,
  resumeAuto
} = useSlider(computed(() => clients.value || []), SLIDER_CONFIG)

const { handleImageError } = useImageError('https://via.placeholder.com/378x170')

onMounted(() => {
  fetchData()
})

watch(clients, (newClients) => {
  if (newClients && newClients.length > 0) {
    resumeAuto()
  }
})
</script>

<template>
  <section class="clients-section">
    <div class="container">
      <div class="section-header">
        <h2>Our Clients</h2>
      </div>

      <LoadingSpinner :show="loading" message="Loading clients..." />

      <div v-if="error && !loading" class="error-state">
        <p>{{ error }}</p>
        <button @click="fetchData" class="retry-btn">Retry</button>
      </div>

      <div
          v-if="!loading && !error && clients && clients.length > 0"
          class="clients-content"
          @mouseenter="pauseAuto"
          @mouseleave="resumeAuto"
      >
        <div class="slider-wrapper">
          <div class="slider-container" :style="{ width: `${containerWidth}px`, margin: '0 auto' }">
            <div
                class="slider-track"
                :class="{ 'no-transition': !transitionEnabled }"
                :style="{ transform: `translateX(-${currentOffset}px)` }"
            >
              <BaseCard
                  v-for="(client, idx) in displayClients"
                  :key="`${client.name}-${idx}`"
                  variant="client"
                  :title="client.name"
                  :image-height="'180px'"
                  :hoverable="true"
              >
                <template #image>
                  <img :src="client.imageUrl" :alt="client.name" @error="handleImageError" />
                </template>
                <p>{{ client.review }}</p>
              </BaseCard>
            </div>
          </div>
        </div>
      </div>

      <div v-if="!loading && !error && clients && clients.length === 0" class="empty-state">
        <p>No clients to display yet.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.clients-section {
  background: #3F4E85;
  padding: 80px 0;
  overflow: hidden;
  min-height: 600px;
  display: flex;
  align-items: center;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.section-header {
  padding: 0 30px;
  margin-bottom: 40px;
  width: 100%;
}

.section-header h2 {
  font-size: 48px;
  font-weight: 700;
  color: #FAFAFA;
  padding-bottom: 20px;
  border-bottom: 3px solid rgba(255, 255, 255, 0.12);
  display: inline-block;
  width: 30%;
}

.slider-wrapper {
  position: relative;
  overflow: hidden;
  padding: 20px 60px;
  box-sizing: content-box;
  width: 100%;
}

.slider-container {
  overflow: visible;
}

.slider-track {
  display: flex;
  gap: 40px;
  transition: transform 0.8s ease-in-out;
  will-change: transform;
}

.slider-track.no-transition {
  transition: none !important;
}

p {
  font-size: 18px;
  font-weight: 300;
  color: #FAFAFA;
  line-height: 1.3;
}

.error-state {
  width: 100%;
  text-align: center;
  padding: 60px 20px;
  color: #FAFAFA;
}

.error-state p {
  font-size: 18px;
  margin-bottom: 20px;
  color: #ff6b6b;
}

.retry-btn {
  padding: 12px 30px;
  background: rgba(33, 160, 160, 0.4);
  border: 1px solid #FFFFFF;
  border-radius: 8px;
  color: #FAFAFA;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.retry-btn:hover {
  background: rgba(33, 160, 160, 0.6);
  transform: translateY(-2px);
}

.empty-state {
  width: 100%;
  text-align: center;
  padding: 60px 20px;
  color: #FAFAFA;
}

.empty-state p {
  font-size: 20px;
  opacity: 0.7;
}

@media (max-width: 1400px) {
  .slider-wrapper {
    padding: 20px 40px;
  }
}

@media (max-width: 768px) {
  .section-header h2 {
    font-size: 36px;
  }

  .slider-wrapper {
    padding: 20px;
  }
}
</style>