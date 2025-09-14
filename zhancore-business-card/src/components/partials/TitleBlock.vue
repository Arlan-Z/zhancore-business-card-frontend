<script setup></script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="title-block">
        <slot> INSERT TEXT HERE </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-block {
  background-color: #21a0a0;
  height: 118px;
  color: #fafafa;
  font-size: 48px;
  font-weight: bold;
  text-align: center;

  line-height: 118px;
  grid-column: 1 / 7;
}
</style>
