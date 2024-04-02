<script lang="ts" setup>
import { computed } from "vue";
interface AppButtonProp {
  bgColor?: string;
  textColor?: string;
  disabled?: boolean;
  loading?: boolean;
  width?: string;
}
const appButtonProp = withDefaults(defineProps<AppButtonProp>(), {
  bgColor: "bg-green-400",
  textColor: "",
  loading: false,
  disabled: false,
  width: "100%",
});

const buttonIsDisabled = computed(
  () => appButtonProp.disabled || appButtonProp.loading
);

const buttonIsLoading = computed(() => appButtonProp.loading);
</script>
<style>
.btn-spinner {
  @apply inline-block absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-[1];
}
</style>
<template>
  <button
    type="submit"
    :disabled="buttonIsDisabled"
    :style="{
      width: appButtonProp.width,
    }"
    class="rounded-full border-2 inline-flex justify-center items-center border-transparent bg-green-400 px-4 py-3 font-display font-bold transition-all duration-200 hover:border-white"
    :class="[
      bgColor,
      textColor,
      {
        ' brightness-[80%] cursor-not-allowed': buttonIsDisabled === true,
      },
    ]"
  >
    <span
      class="relative inline-block w-auto z-[2]"
      :class="{
        invisible: buttonIsLoading,
      }"
    >
      <slot> Join our waitlist </slot>
    </span>
    <span v-if="buttonIsLoading" class="btn-spinner">
      <Icon name="svg-spinners:3-dots-rotate" size="1.3rem"></Icon>
    </span>
  </button>
</template>
