<script lang="ts" setup>
import { useSwiper } from "swiper/vue";
const testimony = useSwiper();

const goPrevious = () => {
  testimony.value.slidePrev();
};

const goNext = () => {
  testimony.value.slideNext();
};
</script>
<template>
  <div class="inline-flex px-1 py-1 bg-white rounded-md">
    <button
      @click="goPrevious"
      class="px-3 py-2 rounded-md hover:bg-green-600 hover:text-white bg-white text-slate-400 flex items-center justify-center"
    >
      <icon name="material-symbols:arrow-back-rounded" size="1.3rem"></icon>
    </button>
    <button
      @click="goNext"
      class="px-3 py-2 rounded-md hover:bg-green-600 hover:text-white bg-white text-slate-400 flex items-center justify-center"
    >
      <icon name="material-symbols:arrow-forward-rounded" size="1.3rem"></icon>
    </button>
  </div>
</template>
