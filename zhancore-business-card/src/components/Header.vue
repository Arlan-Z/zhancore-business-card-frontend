<script setup>
import Logo from "@/assets/logo.svg?component";
</script>

<template>
  <div class="main">
    <div class="logo-box">
      <Logo class="logo-icon" />
      <span class="separator-line" />
      <h2 class="logo-text">ZHANCORE KZ</h2>
    </div>
  </div>
</template>

<style scoped>
.main {
  background-color: #1e555c;
  display: flex;
  align-items: center;
  height: 100px;
}

.logo-box {
  display: flex;
  align-items: center;
  gap: 25px;
}

.logo-icon {
  fill: #21a0a0;
  width: 105px;
  height: 77px;
}

.separator-line {
  display: block;
  width: 3px;
  height: 50px;
  background-color: #eae0cc;
}

.logo-text {
  color: #f5f5f5;
  font-size: 32px;
  width: 190px;
  height: auto;
}
</style>
