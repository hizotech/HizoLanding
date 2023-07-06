<script lang="ts" setup>
const modal = ref<{
  closeModal(): void;
  openModal(): void;
}>({
  closeModal: () => {},
  openModal: () => {},
});

const routesWithDoubleForms = ["/", "/hizo-business"];
const waitlistFormId = "waitlistFormInput";
const openMenu = () => {
  modal.value.openModal();
};
const closeMenu = () => {
  modal.value.closeModal();
};
const inputFocusHandler = useInputFocusHandler(
  "heroFormInput",
  "waitlistFormInput"
);

const focusOnInput = () => {
  routesWithDoubleForms.includes(useRoute().path)
    ? inputFocusHandler.focusOnInput()
    : inputFocusHandler.focusOnAnyInput(waitlistFormId);
};
onMounted(() => {
  try {
    inputFocusHandler.observeInput();
  } catch (error) {}
});
</script>
<template>
  <app-modal ref="modal">
    <modals-lend-mobile-menu
      @navigateToPage="closeMenu"
    ></modals-lend-mobile-menu>
  </app-modal>
  <!-- navbar -->
  <header
    class="sticky left-0 top-0 w-full bg-[#F1F9F7] backdrop-blur-lg bg-opacity-50 px-5 py-5 z-20"
  >
    <nav class="mx-auto flex max-w-[75rem] items-center justify-between">
      <nuxt-link to="/">
        <slot name="header-logo">
          <img
            class="w-[6rem] md:w-[9rem]"
            src="/img/hizo_lend_logo.svg"
            alt="Hizo business"
          />
        </slot>
      </nuxt-link>
      <ul class="hidden items-center gap-9 text-sm md:flex">
        <li>
          <a
            href="http://hizo.africa/about"
            class="text-green-950 transition-colors duration-200 ease-out hover:text-pink-600"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="http://hizo.africa"
            class="text-green-950 transition-colors duration-200 ease-out hover:text-pink-600"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="http://hizo.africa/hizo-business"
            class="text-green-950 transition-colors duration-200 ease-out hover:text-pink-600"
          >
            HizoBusiness
          </a>
        </li>
        <li>
          <a
            href="http://lend.hizo.africa"
            class="text-green-950 transition-colors duration-200 ease-out hover:text-pink-600"
          >
            LendByHizo
          </a>
        </li>
      </ul>
      <div class="flex items-stretch gap-3">
        <slot name="header-button">
          <button
            @click="focusOnInput"
            class="inline-block rounded-xl font-display border-2 border-transparent bg-pink-500 px-4 py-3 text-sm font-bold text-pink-100 transition-all duration-200 ease-in hover:border-pink-200 md:px-6 md:py-5"
          >
            Join our waitlist
          </button>
        </slot>
        <button
          @click="openMenu"
          class="rounded-lg bg-white px-4 py-3 hover:text-pink-600 md:hidden md:px-6 md:py-5"
        >
          <icon name="solar:list-linear" size="1.2rem" />
        </button>
      </div>
    </nav>
  </header>
  <!-- navbar end -->
</template>
