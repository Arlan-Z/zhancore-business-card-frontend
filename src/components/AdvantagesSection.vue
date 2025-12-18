<script setup lang="ts">
</script>

<template>
  <section class="advantages">
    <div class="advantage-item left">
      <div class="container">
        <div class="content">
          <h3>Scalable Solutions</h3>
          <div class="line"></div>
          <p>From startups to enterprises, our apps adapt and grow together with your business needs.</p>
        </div>
      </div>
    </div>

    <div class="advantage-item right">
      <div class="container">
        <div class="content">
          <h3>Innovation Driven</h3>
          <div class="line"></div>
          <p>By embracing the latest technologies and trends, we create products that stay relevant and competitive.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.advantages {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.advantage-item {
  width: 100%;
  padding: 100px 25px;
  position: relative;
  overflow: hidden;
}

.advantage-item.left {
  background: #45558D;
}

.advantage-item.right {
  background: #45558D;
  margin-top: -100px;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.advantage-item.left .container {
  justify-content: flex-start;
}

.advantage-item.right .container {
  justify-content: flex-end;
}

.content {
  max-width: 600px;
}

.advantage-item.right .content {
  text-align: right;
}

.content h3 {
  font-size: 48px;
  font-weight: 700;
  color: #FAFAFA;
  margin-bottom: 20px;
}

.line {
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.25);
  margin-bottom: 20px;
}

.content p {
  font-size: 28px;
  font-weight: 300;
  line-height: 1.4;
  color: #FAFAFA;
}
</style>
