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
  <!-- waitlist -->
  <section class="px-5 pb-14" id="waitlistForm">
    <div
      class="mx-auto flex max-w-[75rem] flex-wrap rounded-3xl bg-[#4845FF] px-5 py-14 md:p-14 lg:p-20 relative overflow-hidden"
    >
      <img src="/img/form_bg.svg" class="absolute -top-1 right-0" alt="" />
      <img
        src="/img/form_bg_2.svg"
        class="absolute -bottom-20 right-0"
        alt=""
      />
      <img src="/img/form_bg_3.svg" class="absolute -bottom-5 left-0" alt="" />
      <div class="w-full md:w-7/12 relative z-3">
        <slot>
          <h1
            class="font-display font-light text-3xl md:text-[2.8rem] md:leading-[3.1rem] text-white"
          >
            <b class="font-bold">Download Hizo today </b>and embark on a journey
            where your <b class="font-bold">Naira knows no boundaries</b>!
          </h1>
        </slot>
        <div
          class="mt-10 flex items-stretch gap-3 text-xs md:text-sm max-w-[25rem]"
        >
          <div
            class="mt-6 flex md:flex-row items-center gap-3 text-xs md:text-sm"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.hizo.hizo"
            >
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
    </div>
  </section>
  <!-- waitlist end -->
</template>
