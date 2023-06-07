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
      class="mx-auto relative overflow-hidden flex max-w-[75rem] flex-wrap rounded-3xl border-4 border-white bg-green-100 px-5 py-8 md:p-14 lg:p-20"
    >
      <div class="w-full md:w-7/12">
        <div class="mb-2 md:hidden">
          <img
            src="/img/hero.svg"
            class="w-full"
            alt="Currency supported images"
          />
        </div>
        <!-- <div
          class="mb-4 bg-green-400 inline-flex gap-3 px-5 py-2 rounded-lg text-white text-xs"
        >
          <span>Comming soon</span>
          <span>
            <icon name="noto:fire" size="1rem" />
          </span>
        </div> -->
        <h1 class="font-display text-5xl font-bold md:text-7xl">
          Spend Naira anywhere in Africa
        </h1>
        <p class="mt-10 text-sm">
          Open RWF, KES, ZAR, GHC and other African Accounts <br />
          for Free & Spend with <b>Hizo app</b>
        </p>
        <form
          @submit.prevent="submitEmail"
          class="mt-10 flex items-stretch gap-3 text-xs md:text-sm"
        >
          <input
            type="text"
            placeholder="Your Email ..."
            class="flex-1 shrink rounded-xl border-2 border-transparent bg-white px-1 py-4 outline-none transition-all duration-200 hover:border-green-500 focus:border-green-500 md:px-6 md:py-5"
          />
          <button
            type="submit"
            class="flex-shrink-0 rounded-xl border-2 border-transparent bg-green-400 px-4 py-4 font-display font-bold transition-all duration-200 hover:border-white md:px-6 md:py-5"
          >
            Join our wishlist
          </button>
        </form>
      </div>
      <img
        src="/img/hero.svg"
        class="w-[45rem] absolute right-[-18rem] top-[-3rem] hidden md:inline-block"
        alt=""
      />
    </div>
  </section>
  <!-- hero end -->
</template>
