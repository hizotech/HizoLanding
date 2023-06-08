<script lang="ts" setup>
const emit = defineEmits(["submitEmail"]);
const submitEmail = () => {
  emit("submitEmail");
};
</script>
<template>
  <!-- hero -->
  <section class="mb-20 mt-12 px-5">
    <div
      class="mx-auto relative overflow-hidden flex justify-center items-center gap-7 md:gap-14 max-w-[75rem] flex-wrap md:flex-nowrap rounded-3xl border-4 border-white bg-green-100 px-5 py-8 md:p-14 lg:p-20"
    >
      <div class="w-full md:w-6/12">
        <h1
          class="font-display text-3xl md:text-5xl font-bold tracking-tighter"
        >
          Unlocking
          <span class="relative inline-block">
            <img
              src="/img/ellipse.svg"
              class="absolute z-0 -top-4 w-8/12"
              alt=""
            />
            <span class="relative z-2">Seamless</span></span
          >
          Currency Exchange for Nigerians Abroad!
        </h1>
        <p class="mt-10 text-sm lg:text-base">
          Spend naira on the go while in
          <b> Ghana, South Africa, Kenya, and Rwanda</b>
        </p>
        <form
          @submit.prevent="submitEmail"
          class="mt-10 flex items-stretch gap-3 text-xs md:text-sm max-w-[25rem]"
        >
          <input
            type="email"
            required
            placeholder="Your Email ..."
            class="w-full min-w-[2rem] rounded-xl border-2 border-transparent bg-white px-3 py-4 outline-none transition-all duration-200 hover:border-green-500 focus:border-green-500 md:px-6 md:py-5"
          />
          <button
            type="submit"
            class="flex-shrink-0 rounded-xl border-2 border-transparent bg-green-400 px-4 py-4 font-display font-bold transition-all duration-200 hover:border-white md:px-6 md:py-5"
          >
            Join our waitlist
          </button>
        </form>
      </div>
      <div class="w-full md:w-5/12">
        <img
          src="/img/home_hero.png"
          class="w-full"
          alt="Unlocking Seamless Currency Exchange for Nigerians Abroad!"
        />
      </div>
    </div>
  </section>
  <!-- hero end -->
</template>
