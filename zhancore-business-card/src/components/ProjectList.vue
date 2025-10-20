<template>
  <section class="projects-section">
    <div class="container">
      <div class="section-header">
        <h2>Our Projects</h2>
      </div>
      <div class="projects-content">
        <div class="projects-grid">
          <div v-for="(project, index) in projects" :key="project.name" class="project-card">
            <div class="project-image">
              <img :src="project.imageUrl" :alt="project.name" @error="handleImageError" />
            </div>
            <div class="project-content">
              <h3>{{ project.name }}</h3>
              <div class="line"></div>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getProjects } from '@/api/index.ts'
import type Project from '@/api/models/project.ts'

const projects = ref<Project[]>([])

const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement
  target.src = 'https://via.placeholder.com/670x331'
}

onMounted(async () => {
  // try {
  //   projects.value = await getProjects()
  // } catch (error) {
  //   console.error('Failed to fetch projects:', error)
    // Mock data for demonstration
    projects.value = [
      { name: 'Project Name', description: 'Description of the project with details about technologies used and problems solved.', imageUrl: '/project1.jpg' },
      { name: 'Project Name', description: 'Description of the project with details about technologies used and problems solved.', imageUrl: '/project2.jpg' },
      { name: 'Project Name', description: 'Description of the project with details about technologies used and problems solved.', imageUrl: '/project3.jpg' },
      { name: 'Project Name', description: 'Description of the project with details about technologies used and problems solved.', imageUrl: '/project4.jpg' },
    ]
  // }
})
</script>

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

.projects-content {
  padding: 0 25px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  gap: 40px;
  max-width: 1390px;
  margin: 0 auto;
  justify-items: center;
}

.project-card {
  background: #353849;
  overflow: hidden;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-image {
  width: 100%;
  height: 331px;
  background: #FFFFFF;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-content {
  padding: 28px;
  height: 331px;
  display: flex;
  flex-direction: column;
}

.project-content h3 {
  font-size: 32px;
  font-weight: 600;
  color: #FAFAFA;
  margin-bottom: 15px;
}

.line {
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.25);
  margin-bottom: 20px;
}

.project-content p {
  font-size: 24px;
  font-weight: 300;
  color: #FAFAFA;
  line-height: 1.2;
  flex-grow: 1;
}

@media (max-width: 1400px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(800px, 1fr));
    justify-items: center;  }
}
</style>