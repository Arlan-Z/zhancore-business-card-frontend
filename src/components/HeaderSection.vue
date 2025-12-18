<script setup lang="ts">
import Logo from "@/assets/logo.svg";
</script>

<template>
  <header class="header-section">
    <div class="header-content">
      <Logo class="logo" />
      <div class="header-text">
        <h1>ZHANCORE KAZAKHSTAN</h1>
        <div class="divider"></div>
        <p class="tagline">YOU WISH, WE ACCOMPLISH</p>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-section {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background: url('@/assets/background.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
}

.header-content {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 25px;
}

.logo {
  width: 120px;
  height: auto;
  margin-bottom: 20px;
}

.logo-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 48px;
  font-weight: bold;
}

.header-text h1 {
  font-size: 48px;
  font-weight: 700;
  color: #F5F5F5;
  margin-bottom: 20px;
}

.divider {
  width: 960px;
  height: 3px;
  background: rgba(255, 255, 255, 0.25);
  margin-bottom: 20px;
}

.tagline {
  font-size: 32px;
  font-weight: 300;
  color: #C2C2C2;
}
</style>