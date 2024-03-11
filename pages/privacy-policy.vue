<script lang="ts" setup>
definePageMeta({
  pageTransition: { name: "zoom", mode: "out-in" },
});

useHead({
  title: "Privacy Policy",
  meta: [
    {
      name: "description",
      content: `HIZO is committed to protecting your privacy`,
    },
    {
      property: "og:description",
      content: `HIZO is committed to protecting your privacy`,
    },
    {
      property: "twitter:description",
      content: `HIZO is committed to protecting your privacy`,
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
    <PrivacyPolicyHero></PrivacyPolicyHero>
    <section class="mt-20 px-7">
      <div class="max-w-[75rem] mx-auto">
        <LayoutTcTabs>
          <PrivacyPolicyContent></PrivacyPolicyContent>
        </LayoutTcTabs>
      </div>
    </section>
    <div class="mt-20">
      <home-waitlist-form @submit-email="confirmSubmission" />
    </div>
  </div>
</template>
