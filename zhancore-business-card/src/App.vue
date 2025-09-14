<script setup>
import Header from "./components/Header.vue";
import Main from "./views/Main.vue";
</script>

<template>
  <Header class="header" />
  <Main class="main" />
</template>

<style>
.header {
  width: 100%;
  height: 100px;
  margin-bottom: 42px;
}

.main {
  width: 100%;
  height: auto;
}
</style>
