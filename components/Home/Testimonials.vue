<script setup lang="ts">
import { testimonials } from "~/utils/mock_data/testimonials";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
</script>
<template>
  <section class="px-5 py-32">
    <div class="mx-auto max-w-[75rem]">
      <div class="mx-auto mb-14 text-center md:w-9/12">
        <h2
          class="mb-5 font-bold uppercase inline-block px-7 py-3 rounded-full bg-[#FCFF45]"
        >
          TESTIMONIALS
        </h2>
        <p class="font-display text-4xl font-bold md:text-6xl">
          Don’t take our words for it
        </p>
      </div>
      <div>
        <Swiper
          :slides-per-view="1"
          :space-between="30"
          :autoplay="{
            delay: 4000,
          }"
          :loop="true"
        >
          <SwiperSlide v-for="(testimony, index) in testimonials">
            <div class="flex flex-col md:flex-row-reverse gap-3">
              <div
                class="w-full md:w-[294px] flex-shrink-0 rounded-lg overflow-hidden"
              >
                <img
                  :src="testimony.profile_img"
                  class="w-full h-[20rem] md:h-full object-top md:object-center object-cover"
                  alt="testimonial"
                />
              </div>
              <div
                class="w-full rounded-xl bg-white overflow-hidden px-5 py-8 md:p-14 lg:p-20 flex justify-center items-center"
              >
                <div class="max-w-md">
                  <p class="text-base md:text-2xl">
                    {{ testimony.comment }}
                  </p>
                  <div class="mt-8">
                    <p class="text-sm md:text-lg font-bold">
                      {{ testimony.name }}
                    </p>
                    <p class="text-xs md:text-sm">{{ testimony.title }}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <template v-slot:container-end>
            <div class="flex item-center justify-end mt-5">
              <AppSwiperBtn></AppSwiperBtn>
            </div>
          </template>
        </Swiper>
      </div>
    </div>
  </section>
</template>
