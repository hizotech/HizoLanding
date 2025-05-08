<script lang="ts" setup>
import { ref } from "vue";
import { FaqList } from "../../types/faqs";
interface IFaqs {
  question: string;
  answer: string;
  active: boolean;
}
const faqProps = withDefaults(
  defineProps<{
    faqs: IFaqs[];
  }>(),
  {
    faqs: () => [
      {
        question: "",
        answer: "",
        active: false,
      },
    ],
  }
);
const faqs = ref<FaqList>(faqProps.faqs);
const toggleFaqActivity = (index: number) => {
  faqs.value.forEach((faq, faQindex) => {
    faQindex === index ? (faq.active = !faq.active) : (faq.active = false);
  });
};
</script>
<template>
  <!-- FAQs -->
   <a href="#faqs">
     <section class="px-5 py-32" id="faqs">
    <div class="mx-auto max-w-[75rem]">
      <div class="mx-auto mb-14 text-center md:w-9/12">
        <h2
          class="mb-5 font-bold uppercase inline-block px-7 py-3 rounded-full bg-pink-500 text-white"
        >
          FAQs
        </h2>
        <p class="font-display text-4xl font-bold md:text-6xl">
          We’ve got the answers
        </p>
      </div>
      <div class="flex flex-col gap-5">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          @click="toggleFaqActivity(index)"
          class="w-full cursor-pointer rounded-xl border-4 border-transparent bg-white overflow-hidden p-5 hover:border-green-200 md:px-14 md:py-10 transition-all duration-200 ease-out"
          tabindex="-1"
        >
          <div class="flex w-full items-center justify-between gap-4">
            <p class="font-display text-base font-bold md:text-2xl">
              {{ faq.question }}
            </p>
            <span
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 origin-center transition-transform duration-200 ease-out"
              :class="{
                'rotate-180': faq.active === true,
              }"
            >
              <icon name="mdi:chevron-down" size="1.3rem" />
            </span>
          </div>
          <!-- FAQ description -->
          <div
            class="text-sm overflow-hidden transition-all duration-300 ease-out"
            :class="[faq.active ? 'h-auto mt-7' : 'h-0']"
            v-html="faq.answer"
          ></div>
          <!-- FAQ description end -->
        </div>
      </div>
    </div>
  </section>
</a>
 
  <!-- FAQs -->
</template>
