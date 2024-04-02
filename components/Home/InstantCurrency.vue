<script lang="ts" setup>
const focusHandler = useInputFocusHandler();
const inputElement = "waitlistFormInput";
</script>
<template>
  <!-- spend naira -->
  <section class="px-5 py-20 relative overflow-hidden">
    <div class="mx-auto max-w-[75rem]">
      <div
        class="flex flex-wrap bg-white rounded-3xl items-center justify-center md:gap-20 gap-7 px-5 py-8 md:flex-nowrap md:p-14 lg:p-20"
      >
        <div class="w-full md:w-4/12 lg:w-3/12">
          <img src="" class="mb-4 h-auto w-5" alt="" />
          <h3 class="mb-7 font-display text-5xl font-bold md:text-6xl">
            Real Time <br />
            Rate Update
          </h3>
          <p class="mb-9 text-sm w-full md:w-10/12">
            Get real-time rate values for all available currencies paired with
            the naira at all time.
          </p>
          <nuxt-link
            to="/"
            class="inline-block rounded-xl border-2 border-transparent bg-green-400 px-4 py-4 font-display font-bold text-teal-950 transition-all duration-200 hover:border-white md:px-6 md:py-5"
          >
            Learn more
          </nuxt-link>
        </div>
        <div class="w-full md:w-6/12 relative">
          <img
            src="/img/real_time_update.png"
            class="w-full"
            alt="real time update"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- spend naira end-->
</template>
