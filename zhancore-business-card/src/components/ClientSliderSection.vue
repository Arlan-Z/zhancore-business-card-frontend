<template>
  <section class="clients-section">
    <div class="container">
      <div class="section-header">
        <h2>Our Clients</h2>
      </div>

      <div
          class="clients-content"
          @mouseenter="pauseAuto"
          @mouseleave="resumeAuto"
      >
        <div class="slider-wrapper">
          <div class="slider-container" ref="sliderContainer">
            <div
                class="slider-track"
                ref="sliderTrack"
                :class="{ 'no-transition': !transitionEnabled }"
                :style="{ transform: `translateX(-${currentOffset}px)` }"
            >
              <div
                  v-for="(client, idx) in displayClients"
                  :key="`${client.name}-${idx}`"
                  class="client-card"
              >
                <h4>{{ client.name }}</h4>
                <div class="client-image">
                  <img :src="client.imageUrl" :alt="client.name" @error="handleImageError" />
                </div>
                <p>{{ client.review }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template><script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'

type Client = { name: string; review: string; imageUrl: string }

const CARD_WIDTH = 400
const GAP = 40
const VISIBLE_CARDS = 3
const CONTAINER_WIDTH = (CARD_WIDTH * VISIBLE_CARDS) + (GAP * (VISIBLE_CARDS - 1))
const CLONE_COUNT = VISIBLE_CARDS

const clients = ref<Client[]>([
  { name: 'Client 1', review: 'Excellent service and delivery', imageUrl: '/client1.jpg' },
  { name: 'Client 2', review: 'Great team to work with', imageUrl: '/client2.jpg' },
  { name: 'Client 3', review: 'Highly recommended', imageUrl: '/client3.jpg' },
  { name: 'Client 4', review: 'Outstanding results', imageUrl: '/client4.jpg' },
  { name: 'Client 5', review: 'Professional and reliable', imageUrl: '/client5.jpg' },
  { name: 'Client 6', review: 'Exceeded expectations', imageUrl: '/client6.jpg' },
])

const N = computed(() => clients.value.length)

const displayClients = computed(() => {
  if (N.value <= VISIBLE_CARDS) return clients.value
  const frontClones = clients.value.slice(-CLONE_COUNT)
  const endClones = clients.value.slice(0, CLONE_COUNT)
  return [...frontClones, ...clients.value, ...endClones]
})

const sliderTrack = ref<HTMLElement | null>(null)
let autoTimer: number | null = null
const transitionEnabled = ref(true)

const initialIndex = computed(() => N.value > VISIBLE_CARDS ? CLONE_COUNT : 0)
const index = ref(initialIndex.value)

const currentOffset = computed(() => index.value * (CARD_WIDTH + GAP))

const handleImageError = (e: Event) => {
  const t = e.target as HTMLImageElement
  t.src = 'https://via.placeholder.com/378x170'
}

const goNext = () => {
  if (N.value <= VISIBLE_CARDS) return

  const resetPoint = N.value + CLONE_COUNT

  if (index.value >= resetPoint - 1) {
    index.value++

    setTimeout(() => {
      transitionEnabled.value = false;
      index.value = CLONE_COUNT;

      requestAnimationFrame(() => {
        transitionEnabled.value = true;
      });
    }, 800);

    return
  }

  index.value++
}

const startAuto = () => {
  stopAuto()
  if (N.value > VISIBLE_CARDS) {
    autoTimer = window.setInterval(goNext, 3000)
  }
}

const stopAuto = () => {
  if (autoTimer) clearInterval(autoTimer)
}
const pauseAuto = () => stopAuto()
const resumeAuto = () => startAuto()

onMounted(() => {
  if (sliderTrack.value?.parentElement) {
    sliderTrack.value.parentElement.style.width = `${CONTAINER_WIDTH}px`
    sliderTrack.value.parentElement.style.margin = "0 auto"
  }

  if (N.value > VISIBLE_CARDS) {
    transitionEnabled.value = false
    index.value = initialIndex.value
    nextTick(() => {
      transitionEnabled.value = true
      startAuto()
    })
  }
})

onBeforeUnmount(() => stopAuto())
</script>
<style scoped>
.clients-section {
  background: #3F4E85;
  padding: 80px 0;
  overflow: hidden;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.section-header {
  padding: 0 30px;
  margin-bottom: 40px;
}

.section-header h2 {
  font-size: 48px;
  font-weight: 700;
  color: #FAFAFA;
  padding-bottom: 20px;
  border-bottom: 3px solid rgba(255, 255, 255, 0.12);
}

.slider-wrapper {
  position: relative;
  overflow: hidden;
  padding: 20px 60px;
  box-sizing: content-box;
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

.client-card {
  min-width: 400px;
  max-width: 400px;
  height: 420px;
  background: #424C6D;
  border-radius: 12px;
  box-shadow: 10px 10px 6px rgba(0, 0, 0, 0.2);
  padding: 20px;
  flex-shrink: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.client-card:hover {
  transform: translateY(-8px);
  box-shadow: 15px 15px 12px rgba(0, 0, 0, 0.25);
}

.client-card h4 {
  font-size: 28px;
  font-weight: 600;
  color: #FAFAFA;
  margin-bottom: 15px;
}

.client-image {
  width: 100%;
  height: 180px;
  background: #D9D9D9;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 15px;
}

.client-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.client-card p {
  font-size: 18px;
  font-weight: 300;
  color: #FAFAFA;
  line-height: 1.3;
}
</style>
