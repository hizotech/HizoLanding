<script lang="ts" setup>
const focusHandler = useInputFocusHandler();
const inputElement = "waitlistFormInput";
</script>
<template>
  <!-- For nigerians -->
  <section class="bg-[#4845FF] px-5 py-20">
    <div class="mx-auto max-w-[75rem]">
      <div
        class="flex flex-wrap items-center justify-between gap-7 px-5 py-8 md:flex-nowrap md:p-14 lg:p-20"
      >
        <div class="w-full md:w-5/12">
          <img src="" class="mb-4 h-auto w-5" alt="" />
          <h3
            class="mb-7 font-display text-5xl font-bold text-white md:text-6xl"
          >
            Hizo for Business
          </h3>
          <p class="mb-9 text-sm text-white w-full md:w-10/12">
            Seamless funding and withdrawal services available for Nigerians
            throughout Africa.
          </p>
          <nuxt-link
            to="/hizo-business"
            class="inline-block rounded-xl border-2 border-transparent bg-white px-4 py-4 font-display font-bold text-[#4845FF] transition-all duration-200 hover:border-blue-200 md:px-6 md:py-5"
          >
            Read more
        </nuxt-link>
        </div>
        <div class="w-full md:w-5/12 relative">
          <!-- <img
            src="/img/for_nigerians_item_1.svg"
            class="absolute -left-2 bottom-20 z-2"
            alt=""
          />
          <img
            src="/img/for_nigerians_item_2.svg"
            class="absolute -right-2 top-20 z-2"
            alt=""
          /> -->
          <img
            src="/img/for_nigeria.png"
            class="w-full"
            alt="Hizo for nigerians across africa"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- For nigerians end-->
</template>
