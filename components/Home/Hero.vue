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
              class="absolute z-0 -top-2 w-8/12"
              alt=""
            />
            <span class="relative z-2">Seamless</span></span
          >
          Currency Exchange for Nigerians Abroad!
        </h1>
        <p class="mt-6 text-sm lg:text-base">
          Spend naira on the go while in
          <b> Ghana, South Africa, Kenya, and Rwanda</b>
        </p>
        <form
          @submit.prevent="submitEmail"
          class="mt-6 flex items-stretch gap-3 text-xs md:text-sm max-w-[25rem]"
        >
          <input
            type="text"
            id="heroFormInput"
            v-model="mail"
            placeholder="Your Email ..."
            class="w-full min-w-[2rem] rounded-xl border-2 border-transparent bg-white px-3 py-4 outline-none transition-all duration-200 hover:border-green-500 focus:border-green-500 md:px-6 md:py-5"
          />
          <app-button
            :disabled="!mailIsVald"
            :loading="mailIsSending"
          ></app-button>
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
