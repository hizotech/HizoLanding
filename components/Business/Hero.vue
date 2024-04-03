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
      class="mx-auto relative overflow-hidden flex items-center gap-7 md:gap-14 max-w-[75rem] flex-wrap md:flex-nowrap rounded-3xl border-4 border-white bg-[#f2f2ff] px-5 py-8 md:p-14 lg:p-20"
    >
      <div class="w-full md:w-7/12 lg:w-9/12">
        <h1
          class="font-display text-3xl md:text-5xl lg:text-7xl text-[#4845FF] font-bold tracking-tighter"
        >
          <span class="relative inline-block">
            <img
              src="/img/ellipse.svg"
              class="absolute z-0 -top-2 w-7/12"
              alt=""
            />
            <span class="relative z-2">Empower</span></span
          >
          Your Business with Instant Payment Solutions
        </h1>
        <p class="mt-6 text-sm lg:text-base">
          Send and receive business payments from countries across Africa
        </p>
        <div
          class="mt-6 flex md:flex-row items-center gap-3 text-xs md:text-sm max-w-[25rem]"
        >
          <a href="https://play.google.com/store/apps/details?id=com.hizo.hizo">
            <app-button
              ><div class="inline-flex items-center gap-x-2">
                <span class="w-10 block">
                  <img
                    src="/img/hero_btn_playstore.svg"
                    class="w-full"
                    alt=""
                  />
                </span>
                <span class="text-left"> Download on Playstore </span>
              </div></app-button
            >
          </a>
          <a href="https://apps.apple.com/ng/app/hizo/id6477319387">
            <app-button
              ><div class="inline-flex items-center gap-x-2">
                <span class="w-10 block">
                  <img
                    src="/img/hero_btn_applestore.svg"
                    class="w-full"
                    alt=""
                  />
                </span>
                <span class="text-left">Download on Applestore</span>
              </div></app-button
            >
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- hero end -->
</template>
