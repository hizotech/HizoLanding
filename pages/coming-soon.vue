<script lang="ts" setup>
import { ref } from "vue";
definePageMeta({
  layout:"default",
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
  <layout-waitlist-header />
  <main>
    <app-modal ref="modal">
      <modals-mail-confirmation></modals-mail-confirmation>
    </app-modal>
    <waitlist-hero @submit-email="confirmSubmission" />
    <layout-waitlist-footer />
  </main>
</template>
