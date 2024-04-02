<script lang="ts" setup>
import { ref } from "vue";
definePageMeta({
  pageTransition: { name: "zoom", mode: "out-in" },
});
useHead({
  title: "Hizo Finance",
  meta: [
    {
      name: "description",
      content: "Unlocking Seamless Currency Exchange for Nigerians Abroad!",
    },
    {
      property: "og:description",
      content: `Unlocking Seamless Currency Exchange for Nigerians Abroad!`,
    },
    {
      property: "twitter:description",
      content: `Unlocking Seamless Currency Exchange for Nigerians Abroad!`,
    },
  ],
});
const list = useFaqs();
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
    <home-hero @submit-email="confirmSubmission"></home-hero>
    <home-steps></home-steps>
    <home-features></home-features>
    <home-instant-currency />
    <home-downlaod-hizo></home-downlaod-hizo>
    <app-faqs :faqs="list" />
    <home-testimonials></home-testimonials>
    <home-waitlist-form @submit-email="confirmSubmission" />
  </div>
</template>
