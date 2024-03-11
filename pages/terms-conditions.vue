<script lang="ts" setup>
definePageMeta({
  pageTransition: { name: "zoom", mode: "out-in" },
});

useHead({
  title: "Terms and Conditions",
  meta: [
    {
      name: "description",
      content: `These terms apply to the entire website and
        any email or other type of communication between you and Hizo`,
    },
    {
      property: "og:description",
      content: `These terms apply to the entire website and
        any email or other type of communication between you and Hizo`,
    },
    {
      property: "twitter:description",
      content: `These terms apply to the entire website and
        any email or other type of communication between you and Hizo`,
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
    <TcHero />
    <section class="mt-20 px-7">
      <div class="max-w-[75rem] mx-auto">
        <LayoutTcTabs>
          <TcContent></TcContent>
        </LayoutTcTabs>
      </div>
    </section>
    <div class="mt-20">
      <home-waitlist-form @submit-email="confirmSubmission" />
    </div>
  </div>
</template>
