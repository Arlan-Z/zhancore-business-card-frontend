<script setup>
import Header from "./components/Header.vue";
import Main from "./views/Main.vue";
</script>

<template>
  <Header />
  <Main />
</template>

<style>
* {
  margin: 0;
}

body {
  background-color: #eae0cc;
}

Header {
  width: 100%;
  height: 100px;
}
</style>
