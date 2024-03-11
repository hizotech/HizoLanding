<script lang="ts" setup>
definePageMeta({
  pageTransition: { name: "zoom", mode: "out-in" },
});
useHead({
  title: "KYC/AML/CFT Policy",
  meta: [
    {
      name: "description",
      content: `Hizo is dedicated to establishing and upholding effective internal
        controls to halt money laundering and terrorist funding schemes`,
    },
    {
      property: "og:description",
      content: `Hizo is dedicated to establishing and upholding effective internal
        controls to halt money laundering and terrorist funding schemes`,
    },
    {
      property: "twitter:description",
      content: `Hizo is dedicated to establishing and upholding effective internal
        controls to halt money laundering and terrorist funding schemes`,
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
    <KycHero />
    <section class="mt-20 px-7">
      <div class="max-w-[75rem] mx-auto">
        <LayoutTcTabs>
          <KycContent></KycContent>
        </LayoutTcTabs>
      </div>
    </section>
    <div class="mt-20">
      <home-waitlist-form @submit-email="confirmSubmission" />
    </div>
  </div>
</template>
