<script setup>
import HeaderSection from "./components/HeaderSection.vue";
import AboutUsSection from "@/components/AboutUsSection.vue";
import AdvantagesSection from "@/components/AdvantagesSection.vue";
import ClientSliderSection from "@/components/ClientSliderSection.vue";
import ProjectList from "@/components/ProjectList.vue";
import ContactForm from "@/components/ContactForm.vue";
import SectionDivider from "@/components/partials/SectionDivider.vue";
</script>

<template>
  <div id="app">
    <HeaderSection/>
    <main>
      <AboutUsSection />
      <SectionDivider from="#4C5C96" to="#45558D" side="right" difference="100px"/>
      <AdvantagesSection />
      <SectionDivider from="#45558D" to="#3F4E85" side="left" difference="120px"/>
      <ClientSliderSection />
      <SectionDivider from="#3F4E85" to="#2E3141" side="right" difference="150px"/>
      <ProjectList />
    </main>
    <div class="angled-divider"/>
    <ContactForm />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #EAE0CC;
}

.angled-divider {
  height: 120px;
  background: #2E3141;
  clip-path: polygon(0 100%, 100% 60%, 100% 0, 0 0);
  margin-bottom: -100px;
}
</style>
