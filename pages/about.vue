<script lang="ts" setup>
import { ref } from "vue";
definePageMeta({
  pageTransition: { name: "fade", mode: "out-in" },
});
useHead({
  title: "About Hizo",
  meta: [
    {
      name: "description",
      content: `Hizo is a team of passionate individuals committed to
      simplifying cross-border transactions and empowering our users with seamless
      currency exchange solutions.`,
    },
  ],
});
const modal = ref<{
  closeModal(): void;
  openModal(): void;
}>({
  closeModal: () => {},
  openModal: () => {},
});
const confirmSubmission = () => {
  modal.value.openModal();
};
</script>
<template>
  <div>
    <app-modal ref="modal">
      <modals-mail-confirmation></modals-mail-confirmation>
    </app-modal>
    <about-hero />
    <about-mission-vision />
    <home-waitlist-form @submit-email="confirmSubmission">
      <h1 class="font-display font-light text-3xl md:text-5xl text-white">
        Join Nigerians all over Africa to experience freedom
      </h1>
    </home-waitlist-form>
  </div>
</template>
