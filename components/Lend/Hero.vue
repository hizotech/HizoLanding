<script lang="ts" setup>
import { useEmailHandler } from "~/composables/useEmailHandler";
const emit = defineEmits(["submitEmail"]);
const mailHandler = useEmailHandler();
const mail = mailHandler.email;
const mailIsVald = mailHandler.mailIsValid;
const mailIsSending = mailHandler.mailIsSending;
const submitEmail = () => {
  mailHandler.sendMail().then((value) => {
    emit("submitEmail");
  });
};
</script>
<template>
  <!-- hero -->
  <section class="mb-20 mt-12 px-5" id="heroForm">
    <div
      class="mx-auto relative overflow-hidden flex items-center gap-7 md:gap-14 max-w-[75rem] flex-wrap md:flex-nowrap rounded-3xl border-4 border-white bg-pink-50 px-5 py-8 md:p-14 lg:p-20"
    >
      <div class="w-full md:w-7/12 lg:w-9/12">
        <h1
          class="font-display text-3xl md:text-5xl lg:text-7xl text-black font-bold tracking-tighter"
        >
          <span class="relative inline-block">
            <img
              src="/img/pink_ellipse.svg"
              class="absolute z-0 -top-2 -left-2 w-9/12"
              alt=""
            />
            <span class="relative z-2">Scale</span></span
          >
          Your Business with Lend by Hizo
        </h1>
        <p class="mt-6 text-sm lg:text-base">
          Gain access to affordable lending credit for businesses, SMEs, and
          individuals.
        </p>
        <form
          @submit.prevent="submitEmail"
          class="mt-6 flex items-stretch gap-3 text-xs md:text-sm max-w-[34rem]"
        >
          <input
            type="text"
            id="heroFormInput"
            v-model="mail"
            placeholder="Your Email ..."
            class="w-full min-w-[2rem] rounded-xl border-2 border-transparent bg-white px-3 py-4 outline-none transition-all duration-200 hover:border-pink-500 focus:border-pink-500 md:px-6 md:py-5"
          />
          <app-button
            :disabled="!mailIsVald"
            bg-color="bg-pink-500"
            text-color="text-pink-50"
            :loading="mailIsSending"
          ></app-button>
        </form>
      </div>
    </div>
  </section>
  <!-- hero end -->
</template>
