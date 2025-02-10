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

const visitStore = () => {
  const isAndroid = /android/i.test(navigator.userAgent);
  window.location.href = isAndroid
    ? `https://play.google.com/store/apps/details?id=com.hizo.hizo`
    : `https://apps.apple.com/ng/app/hizo/id6477319387`;
};

onMounted(() => {
  try {
    inputFocusHandler.observeInput();
  } catch (error) {}
});
</script>
<template>
  <app-modal ref="modal">
    <modals-mobile-menu @navigateToPage="closeMenu"></modals-mobile-menu>
  </app-modal>
  <!-- navbar -->
  <header class="sticky left-0 top-0 w-full px-5 py-2 z-20">
    <nav
      class="mx-auto bg-white py-4 px-8 rounded-lg backdrop-blur-lg bg-opacity-70 flex max-w-[1260px] items-center justify-between"
    >
      <nuxt-link to="/">
        <slot name="header-logo">
          <img class="w-20" src="/img/hizo_logo.svg" alt="Hizo finance" />
        </slot>
      </nuxt-link>
      <ul class="hidden items-center gap-9 text-sm md:flex">
        <li>
          <nuxt-link
            to="/"
            active-class="border-b-4 border-green-500"
            class="text-green-950 inline-block pb-3 transition-colors duration-200 ease-out hover:text-green-600"
          >
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/about"
            active-class="border-b-4 border-green-500"
            class="text-green-950 inline-block pb-3 transition-colors duration-200 ease-out hover:text-green-600"
          >
            About
          </nuxt-link>
        </li>
        <li>
          <a
            href="http://blog.hizo.africa"
            active-class="border-b-4 border-green-500"
            class="text-green-950 inline-block pb-3 transition-colors duration-200 ease-out hover:text-green-600"
          >
            Blog
          </a>
        </li>
        
        <li>
          <a
            href="http://lend.hizo.africa"
            active-class="border-b-4 border-green-500"
            class="text-green-950 inline-block pb-3 transition-colors duration-200 ease-out hover:text-green-600"
          >
            LendByHizo
          </a>
        </li>
      </ul>
      <div class="flex items-stretch gap-3">
        <slot name="header-button">
          <nuxt-link
            to="/download"
            class="inline-block rounded-full font-display border-2 border-transparent bg-green-400 px-4 py-3 text-sm font-bold text-green-950 transition-all duration-200 ease-in hover:border-white md:px-6 md:py-3"
          >
            Use Hizo
          </nuxt-link>
        </slot>
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
