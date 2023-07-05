<script lang="ts" setup>
const focusHandler = useInputFocusHandler();
const inputElement = "waitlistFormInput";
</script>
<template>
  <!-- spend naira -->
  <section class="bg-teal-950 px-5 py-20 relative overflow-hidden">
    <img
      src="/img/ellipse.svg"
      class="w-[30rem] rotate-[-45deg] absolute top-10 -right-[22rem]"
      alt=""
    />
    <div class="mx-auto max-w-[75rem]">
      <div
        class="flex flex-wrap items-center justify-between gap-7 px-5 py-8 md:flex-nowrap md:p-14 lg:p-20"
      >
        <div class="w-full md:w-5/12">
          <img src="" class="mb-4 h-auto w-5" alt="" />
          <h3
            class="mb-7 font-display text-5xl font-bold text-white md:text-6xl"
          >
            Real Time <br> Rate Update
          </h3>
          <p class="mb-9 text-sm text-green-50 w-full md:w-10/12">
            Get real-time rate values for all available currencies paired with
            the naira at all time.
          </p>
          <button
            @click="focusHandler.focusOnAnyInput(inputElement)"
            class="inline-block rounded-xl border-2 border-transparent bg-green-400 px-4 py-4 font-display font-bold text-teal-950 transition-all duration-200 hover:border-white md:px-6 md:py-5"
          >
            Join our waitlist
          </button>
        </div>
        <div class="w-full md:w-5/12 relative">
          <img
            src="/img/spend_naira_item_1.svg"
            class="absolute -left-2 top-44 z-2"
            alt=""
          />
          <img
            src="/img/spend_naira_item_2.svg"
            class="absolute -right-2 bottom-5 z-2"
            alt=""
          />
          <img
            src="/img/spend_naira.png"
            class="w-full"
            alt="Spend naira with ease"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- spend naira end-->
</template>
