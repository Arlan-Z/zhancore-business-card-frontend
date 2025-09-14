<script setup>
import TitleBlock from "@/components/partials/TitleBlock.vue";
import LogoWithText from "@/assets/logo-with-text-colored.svg?component";
</script>

<template>
  <TitleBlock class="title"> What are We? </TitleBlock>

  <div class="what-are-we container">
    <div class="image-section block">
      <LogoWithText class="logo-with-text" />
    </div>

    <div class="info-section">
      <div class="block">
        We are a team of developers, designers, and tech enthusiasts turning ideas into
        modern digital solutions.
      </div>

      <div class="block">
        Our mission is to build user-friendly, reliable, and scalable apps that help
        businesses grow and deliver great experiences.
      </div>
    </div>
  </div>

  <TitleBlock>Why Us?</TitleBlock>
  <div class="why-us container">
    <div class="keys-section">
      <div class="block primary">Scalable Solutions</div>
      <div class="block primary">Innovation Driven</div>
    </div>

    <div class="description-section">
      <div class="block">
        From startups to enterprises, our apps adapt and grow together with your business
        needs.
      </div>

      <div class="block">
        By embracing the latest technologies and trends, we create products that stay
        relevant and competitive.
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 42px;
  margin-bottom: 65px;
}

.block {
  display: flex;
  background-color: #c9ada1;
  color: #1b4353;
  font-size: 32px;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
}

.block.primary {
  color: #173753;
  font-weight: 600;
  font-size: 40px;
}

.logo-block {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-with-text {
  width: 453.25px;
  height: 318.67px;
}

.image-section {
  grid-column: 1 / span 3;
  height: 404px;
}

.info-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  grid-column: 4 / span 3;
  height: 404px;
}

.info-section > .block {
  width: 100%;
  height: 177px;
}

.keys-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  grid-column: 1 / span 2;
  height: 402px;
}

.keys-section > .block {
  height: 177px;
}

.description-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  grid-column: 3 / span 4;
  height: 402px;
}

.description-section > .block {
  height: 177px;
}
</style>
