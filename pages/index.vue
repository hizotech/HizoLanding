<script lang="ts" setup>
import { ref } from "vue";
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
  <home-spend-naira />
  <home-easy-fund />
  <home-for-nigerians></home-for-nigerians>
  <home-features></home-features>
  <home-faqs></home-faqs>
  <home-waitlist-form></home-waitlist-form>
</template>
