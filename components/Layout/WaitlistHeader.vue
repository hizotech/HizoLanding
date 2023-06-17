<script lang="ts" setup>
const modal = ref<{
  closeModal(): void;
  openModal(): void;
}>({
  closeModal: () => {},
  openModal: () => {},
});
const openMenu = () => {
  modal.value.openModal();
};
const closeMenu = () => {
  modal.value.closeModal();
};
const focusOnInput = () => {
  const formInput = document.getElementById("heroFormInput");
  formInput?.focus();
};
</script>
<template>
  <app-modal ref="modal">
    <modals-mobile-menu @navigateToPage="closeMenu"></modals-mobile-menu>
  </app-modal>
  <!-- navbar -->
  <!-- navbar -->
  <header
    class="sticky left-0 top-0 w-full bg-[#F1F9F7] backdrop-blur-lg bg-opacity-50 px-5 py-5 z-20"
  >
    <nav class="mx-auto flex max-w-[75rem] items-center justify-between">
      <nuxt-link to="/">
        <img class="w-20" src="/img/hizo_logo.svg" alt="Hizo finance" />
      </nuxt-link>
      <ul class="hidden items-center gap-9 text-sm md:flex">
        <li>
          <nuxt-link
            to="/about"
            class="text-green-950 transition-colors duration-200 ease-out hover:text-green-600"
          >
            About
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/"
            class="text-green-950 transition-colors duration-200 ease-out hover:text-green-600"
          >
            Blog
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/hizo-business"
            class="text-green-950 transition-colors duration-200 ease-out hover:text-green-600"
          >
            HizoBusiness
          </nuxt-link>
        </li>
      </ul>
      <div class="flex items-stretch gap-3">
        <button
          @click="focusOnInput"
          class="inline-block rounded-xl font-display border-2 border-transparent bg-green-400 px-4 py-3 text-sm font-bold text-green-950 transition-all duration-200 ease-in hover:border-white md:px-6 md:py-5"
        >
          Join our waitlist
        </button>
        <button
          @click="openMenu"
          class="rounded-lg bg-white px-4 py-3 hover:text-green-600 md:hidden md:px-6 md:py-5"
        >
          <icon name="solar:list-linear" size="1.2rem" />
        </button>
      </div>
    </nav>
  </header>
  <!-- navbar end -->
</template>
