<script setup lang="ts">
import { ref } from "vue";

const modalIsOpen = ref<boolean>(false);
const emit = defineEmits(["closeModal", "openModal"]);

const openModal = () => {
  modalIsOpen.value = true;
  document.querySelector("body")?.classList.add("overflow-y-hidden");
  emit("openModal");
};

const closeModal = () => {
  modalIsOpen.value = false;
  document.querySelector("body")?.classList.remove("overflow-y-hidden");
  emit("closeModal");
};

defineExpose({
  closeModal,
  openModal,
});
</script>
<template>
  <transition name="fade">
    <div
      v-if="modalIsOpen"
      @click="closeModal"
      class="fixed w-screen h-screen top-0 left-0 backdrop-blur-lg bg-black bg-opacity-25 z-50"
    ></div>
  </transition>
  <transition name="slideUpModal">
    <div
      v-if="modalIsOpen"
      class="w-full md:w-[40rem] left-[50%] translate-x-[-50%] fixed bottom-0 h-[90vh] rounded-t-3xl bg-white z-[60]"
    >
      <div class="max-w-7xl mx-auto flex flex-col h-full">
        <div class="flex justify-end py-4 sticky top-0 w-full z-50">
          <button
            @click="closeModal"
            class="text-neutral-400 hover:text-primary-400 relative pr-6 py-3"
          >
            <span class="sr-only">Close</span>
            <Icon name="fe:close" size="1.8rem"></Icon>
          </button>
        </div>
        <div class="w-full flex-grow overflow-y-auto px-4 -mt-5">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
