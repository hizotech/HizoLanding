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
  <section class="mb-20 mt-12 px-5">
    <div
      class="mx-auto relative overflow-hidden flex items-center justify-center gap-7 md:gap-14 lg:gap-20 max-w-[75rem] flex-wrap md:flex-nowrap rounded-3xl border-4 border-white bg-green-100 px-5 py-8 md:p-14 lg:p-20"
    >
      <div class="w-full md:w-6/12">
        <div
          class="mb-4 bg-green-400 inline-flex gap-3 px-5 py-2 rounded-lg text-white text-xs"
        >
          <span>Comming soon</span>
          <span>
            <icon name="noto:fire" size="1rem" />
          </span>
        </div>
        <h1
          class="font-display text-5xl font-bold md:text-7xl tracking-tighter"
        >
          Spend Naira anywhere in Africa
        </h1>
        <p class="mt-10 text-sm">
          Open <b> RWF, KES, ZAR, GHC</b> and other African Accounts <br />
          for Free & Spend with <b>Hizo app</b>
        </p>
        <form
          @submit.prevent="submitEmail"
          id="waitlistForm"
          class="mt-10 flex items-stretch gap-3 text-xs md:text-sm max-w-[25rem]"
        >
          <input
            type="text"
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
        <img src="/img/waitlist_hero.png" class="w-full" alt="" />
      </div>
    </div>
  </section>
  <!-- hero end -->
</template>
