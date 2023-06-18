<script lang="ts" setup>
import { ref } from "vue";
import { useBusinessFaqs } from "../composables/useBusinessFaqs";
definePageMeta({
  pageTransition: { name: "fade", mode: "out-in" },
});
useHead({
  title: "Hizo Business",
  meta: [
    {
      name: "description",
      content: `Empower Your Business with Instant Payment Solutions`,
    },
  ],
});
const list = useBusinessFaqs();
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
    <business-hero @submit-email="confirmSubmission" />
    <business-steps />
    <business-features />
    <app-faqs :faqs="list" />
    <home-waitlist-form @submit-email="confirmSubmission" />
  </div>
</template>
