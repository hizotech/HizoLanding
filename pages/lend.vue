<script lang="ts" setup>
import { ref } from "vue";
definePageMeta({
  layout: "hizo-lend",
  // pageTransition: { name: "fade", mode: "out-in" },
  layoutTransition: { name: "fade", mode: "out-in" },
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
    <lend-hero @submit-email="confirmSubmission" />
    <lend-about />
    <lend-why-lend />
    <lend-steps />
    <home-waitlist-form @submit-email="confirmSubmission">
      <h1 class="font-display font-light text-3xl md:text-5xl text-white">
        Get Started Now
      </h1>
      <p class="text-blue-100 mt-5 text-xs md:text-sm w-full md:w-10/12">
        Once approved, receive the funds directly in your account and start
        achieving your financial goals. Join the Hizo Lend community and embark
        on your journey towards financial success today.
      </p>
    </home-waitlist-form>
  </div>
</template>
