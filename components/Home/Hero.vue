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
      class="mx-auto relative overflow-hidden flex justify-center items-center gap-7 md:gap-24 max-w-[75rem] flex-wrap md:flex-nowrap px-0 py-8"
    >
      <div class="w-full md:w-4/12">
        <h1
          class="font-display text-4xl md:text-6xl font-bold tracking-tighter"
        >
          Unlock the full potential of your Naira
        </h1>
        <p class="mt-6 text-sm lg:text-base">
          Why have difficulty in spending your own money when you travel? GET
          HIZO!
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
        <div class="flex items-center gap-3 text-xs text-[#A0A0A0] mt-5">
          <div class="flex items-center gap-3">
            <img src="/img/cbn_logo.png" class="w-8" alt="cbn" />
            <span class="">Fully licensed by CBN</span>
          </div>
          <span class="inline-block border-l h-4"></span>
          <span> Deposits insured by <b>NDIC</b> </span>
        </div>
      </div>
      <div class="w-full md:w-6/12">
        <img
          src="/img/home_hero_img.webp"
          class="w-full"
          alt="Unlocking Seamless Currency Exchange for Nigerians Abroad!"
        />
      </div>
    </div>
  </section>
  <!-- hero end -->
</template>
