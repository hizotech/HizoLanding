<script lang="ts" setup>
import { ref } from "vue";
import { useFaqs } from "../../composables/useFaqs";
import { FaqList } from "../../types/faqs";
const list = useFaqs();
const faqs = ref<FaqList>(list);
const toggleFaqActivity = (index: number) => {
  faqs.value.forEach((faq, faQindex) => {
    faQindex === index ? (faq.active = !faq.active) : (faq.active = false);
  });
};
</script>
<template>
  <!-- FAQs -->
  <section class="px-5 py-32">
    <div class="mx-auto max-w-[75rem]">
      <div class="mx-auto mb-14 text-center md:w-9/12">
        <h2 class="mb-5 font-bold uppercase">FREQUENTLY ASKED QUESTIONS</h2>
        <p class="font-display text-5xl font-bold md:text-7xl">FAQs</p>
      </div>
      <div class="flex flex-col gap-8">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          @click="toggleFaqActivity(index)"
          class="w-full cursor-pointer rounded-xl border-4 border-transparent bg-white p-5 hover:border-green-200 md:px-14 md:py-10 transition-transform duration-200 ease-out"
          tabindex="-1"
        >
          <div class="flex w-full items-center justify-between gap-4">
            <p class="font-display text-base font-bold md:text-2xl">
              {{ faq.question }}
            </p>
            <span
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 origin-center transition-transform duration-200 ease-out"
              :class="{
                'rotate-180': faq.active === true,
              }"
            >
              <icon name="mdi:chevron-down" size="1.3rem" />
            </span>
          </div>
          <!-- FAQ description -->
          <transition name="fade">
            <div
              class="mt-7 text-sm"
              v-if="faq.active"
              v-html="faq.answer"
            ></div>
          </transition>
          <!-- FAQ description end -->
        </div>
      </div>
    </div>
  </section>
  <!-- FAQs -->
</template>
