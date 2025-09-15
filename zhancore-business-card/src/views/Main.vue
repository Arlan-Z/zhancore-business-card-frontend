<script setup>
import TitleBlock from "@/components/partials/TitleBlock.vue";
import LogoWithText from "@/assets/logo-with-text-colored.svg?component";
import { getClientReviews } from "@/api/reviews";
import { onMounted, ref } from "vue";

const clientReviews = ref([]);

onMounted(async () => {
  const res = await getClientReviews();
  clientReviews.value = res.data.reviews;
});
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

  <TitleBlock>Our Clients</TitleBlock>
  <div class="our-clients container">
    <div class="block client-review-block" v-for="review in clientReviews">
      <img alt="Company Logo" />
      <div class="client-review">{{ review.message }}</div>
    </div>
  </div>

  <TitleBlock>Interested?</TitleBlock>
  <div class="interested container">
    <div class="interested-wrapper">
      <div class="label">Leave info about you</div>

      <div class="inputs block">
        <input type="text" id="fullname" placeholder="Full Name" />
        <input type="text" id="contact-details" placeholder="Contact Details" />
        <input type="text" id="ticket-reason" placeholder="Ticket Reason" />
      </div>

      <button id="submit">Submit</button>
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

.our-clients {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 50px;
}

.our-clients > .block {
  display: flex;
  align-items: center;
  gap: 20px;
}

.client-review-block > img {
  flex-shrink: 0;
  height: 190px;
  width: 190px;
  background-color: rgb(255, 255, 255);

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #000000;
  text-align: center;
}

.client-review-block > .client-review {
  flex: 1;
  text-align: left;
  display: flex;
  align-items: center;
}

.interested-wrapper {
  grid-column: 1 / -1;
  display: flex;
  width: 100%;
}

.interested-wrapper > .label {
  flex: 430;

  background-color: #21a0a0;
  height: 342px;
  color: #fafafa;
  font-weight: 600;
  font-size: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.interested-wrapper > .inputs {
  flex: 800;

  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  gap: 12px;
}

.inputs > input {
  border-radius: 0;
  width: 100%;
  height: 66px;
  border: none;
  font-size: 32px;
  padding: 0 15px;
}

.inputs > input::placeholder {
  color: #8a8a8a;
  opacity: 0.5;
}

#ticket-reason {
  width: 80%;
}

.interested-wrapper > #submit {
  flex: 190;

  font-size: 32px;
  background-color: #1c8e8e;
  border: none;
  color: #fafafa;
}
</style>
