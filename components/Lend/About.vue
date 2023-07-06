<script lang="ts" setup>
const focusHandler = useInputFocusHandler();
const inputElement = "waitlistFormInput";
</script>
<template>
  <!-- For nigerians -->
  <section class="bg-transparent px-5 py-20">
    <div class="mx-auto max-w-[75rem]">
      <div
        class="flex flex-wrap items-center justify-between gap-7 px-5 py-8 md:flex-nowrap md:p-14 lg:p-20"
      >
        <div class="w-full md:w-5/12">
          <img src="" class="mb-4 h-auto w-5" alt="" />
          <h3
            class="mb-7 font-display text-5xl font-bold text-black md:text-6xl"
          >
            <span class="relative inline-block">
              <img
                src="/img/ellipse.svg"
                class="absolute z-0 -top-1 -left-2 w-9/12"
                alt=""
              />
              <span class="relative z-2">Unlock</span></span
            >
            Your Potential
          </h3>
          <p class="mb-9 text-sm text-neutral-800 w-full md:w-10/12">
            At Hizo Lend, we believe that financial empowerment is key to
            achieving your goals. Our innovative platform, coupled with the Hizo
            App, provides you with seamless access to affordable lending credit
            for businesses, SMEs, and individuals. We understand the importance
            of financial flexibility and are committed to supporting your
            journey towards success.
          </p>
          <button
            @click="focusHandler.focusOnAnyInput(inputElement)"
            class="inline-block rounded-xl border-2 border-transparent bg-pink-500 px-4 py-4 font-display font-bold text-white transition-all duration-200 hover:border-pink-200 md:px-6 md:py-5"
          >
            Join our waitlist
          </button>
        </div>
        <div class="w-full md:w-5/12 relative">
          <img
            src="/img/hizo_lend_about.png"
            class="w-full"
            alt="Hizo for nigerians across africa"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- For nigerians end-->
</template>
