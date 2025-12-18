<script setup lang="ts">
import { getProjects } from '@/api/index'  
import BaseCard from '@/components/common/BaseCard.vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import { useApi } from '@/composables/useApi'
import { useImageError } from '@/composables/useImageError'

import type Project from '@/api/models/project'


import { onMounted, TransitionGroup } from 'vue'

const { data: projects, loading, error, execute: fetchData } = useApi<Project[]>(getProjects)
const { handleImageError } = useImageError('https://via.placeholder.com/670x331')

onMounted(() => {
  fetchData()
})
</script>

<template>
  <section class="projects-section">
    <div class="container">
      <div class="section-header">
        <h2>Our Projects</h2>
      </div>

      <LoadingSpinner :show="loading" message="Loading projects..." />

      <div v-if="error" class="error-state">
        <p>{{ error }}</p>
        <button @click="fetchData" class="retry-btn">Retry</button>
      </div>

      <TransitionGroup
        v-else-if="!loading && projects && projects.length > 0"
        name="project-list"
        tag="div"
        class="projects-grid"
      >
        <BaseCard
          v-for="project in projects"
          :key="project.name"
          variant="project"
          :title="project.name"
          :show-divider="true"
        >
          <template #image>
            <img :src="project.imageUrl" :alt="project.name" @error="handleImageError" />
          </template>
          <p>{{ project.review }}</p> 
        </BaseCard>
      </TransitionGroup>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  background: #2E3141;
  padding: 80px 0 100px;
  min-height: 1000px;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-header {
  padding: 0 25px;
  margin-bottom: 80px;
  width: 100%;
  text-align: right;
}

.section-header h2 {
  font-size: 48px;
  font-weight: 700;
  color: #FAFAFA;
  display: inline-block;
  padding-bottom: 20px;
  border-bottom: 3px solid rgba(255, 255, 255, 0.25);
  width: 670px;
  margin-left: auto;
  text-align: right;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  gap: 40px;
  max-width: 1390px;
  padding: 0 25px;
  margin: 0 auto;
  justify-items: center;
}

.error-state {
  text-align: center;
  padding: 40px;
  color: #FAFAFA;
}

.error-state p {
  font-size: 18px;
  margin-bottom: 20px;
}

.retry-btn {
  padding: 12px 24px;
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

p {
  font-size: 24px;
  font-weight: 300;
  color: #FAFAFA;
  line-height: 1.2;
}

.project-list-move,
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.5s ease;
}

.project-list-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.project-list-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

@media (max-width: 1400px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(800px, 1fr));
  }
}
</style>
