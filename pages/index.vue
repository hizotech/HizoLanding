<script lang="ts" setup>
import { ref } from "vue";
useHead({
  title: "Hizo Finance",
  meta: [
    {
      name: "description",
      content: "Unlocking Seamless Currency Exchange for Nigerians Abroad!",
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
  <app-modal ref="modal">
    <modals-mail-confirmation></modals-mail-confirmation>
  </app-modal>
  <home-hero @submit-email="confirmSubmission"></home-hero>
  <home-steps></home-steps>
  <home-instant-currency />
  <home-features></home-features>
  <home-for-business />
  <home-faqs></home-faqs>
  <home-waitlist-form></home-waitlist-form>
</template>
