<script setup lang="ts">

</script>

<template>
  <section class="who-we-are">
    <div class="container">
      <div class="content">
        <h2>What are We?</h2>
        <div class="line"></div>
        <p class="description">
          We are a team of developers, designers, and tech enthusiasts turning ideas into modern digital solutions.
        </p>
        <p class="mission">
          Our mission is to build user-friendly, reliable, and scalable apps that help businesses grow and deliver great experiences.
        </p>
      </div>
      <div class="circle-image"></div>
    </div>
  </section>
</template>

<style scoped>
.who-we-are {
  background: #4C5C96;
  padding: 80px 0;
  position: relative;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  position: relative;
}

.content {
  flex: 1;
  max-width: 910px;
}

.content h2 {
  font-size: 48px;
  font-weight: 700;
  color: #FAFAFA;
  margin-bottom: 30px;
  text-align: right;
}

.line {
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.25);
  margin-bottom: 30px;
}

.description, .mission {
  font-size: 32px;
  font-weight: 300;
  line-height: 1.3;
  color: #FAFAFA;
  text-align: right;
  margin-bottom: 30px;
}

.circle-image {
  width: 428px;
  height: 428px;
  border: 3px solid #FFFFFF;
  border-radius: 50%;
  margin-left: 50px;
  background: rgba(255, 255, 255, 0.1);
}
</style>