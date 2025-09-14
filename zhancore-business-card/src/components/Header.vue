<script setup>
import Logo from "@/assets/logo.svg?component";
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <Logo class="header-logo" />
      <h2 class="header-text">ZHANCORE KZ</h2>
      <div class="language-switcher option">Language switcher</div>
      <div class="theme-toggle option">Light/Dark switcher</div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: #1e555c;
  height: 100px;
}

.container {
  align-items: center;
  height: 100px;
}

.header-logo {
  grid-column: 1;
  justify-self: end;

  fill: #21a0a0;
  width: 105px;
  height: 77px;
}

.header-text {
  grid-column: 2;
  justify-self: start;
  position: relative;

  color: #f5f5f5;
  font-size: 32px;
  width: 190px;
  height: 78px;
  font-weight: bold;
}

.header-text::before {
  display: block;
  content: "";
  width: 3px;
  height: 50px;
  background-color: #eae0cc;
  position: absolute;

  left: -25px;
  top: 13px; /* 25 - 0.5 * (100 - header-text height) */
}

.option {
  font-size: 24px;
  width: 190px;
  text-align: center;
  color: #f5f5f5;
}

.language-switcher {
  grid-column: 5;
  justify-self: center;
}

.theme-toggle {
  grid-column: 6;
  justify-self: center;
}
</style>
