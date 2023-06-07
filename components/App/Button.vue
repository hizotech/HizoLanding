<script lang="ts" setup>
import { computed } from "vue";
interface AppButtonProp {
  size?: "sm" | "md" | "lg";
  light?: boolean;
  type?: "primary" | "secondary" | "danger";
  outlined?: boolean;
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
}
const appButtonProp = withDefaults(defineProps<AppButtonProp>(), {
  size: "md",
  light: false,
  type: "primary",
  outlined: false,
  loading: false,
  disabled: false,
  block: true,
});

const buttonIsDisabled = computed(
  () => appButtonProp.disabled || appButtonProp.loading
);

const buttonIsLoading = computed(() => appButtonProp.loading);
</script>
<style>
.btn {
  @apply rounded-md border relative py-3 px-6 inline-flex justify-center items-center gap-x-2 font-bold;
}

.btn--md {
  @apply text-base;
}

.btn--sm {
  @apply text-sm;
}

.btn--lg {
  @apply text-lg;
}

.btn--block {
  display: flex !important;
  width: 100%;
}

.btn:disabled {
  @apply brightness-50 cursor-not-allowed;
}

.btn-spinner {
  @apply inline-block absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-[1];
}

.btn-primary {
  @apply bg-primary-700 text-primary-100 border-transparent hover:bg-primary-900;
}

.btn-primary-light--outlined {
  @apply border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-primary-900;
}

.btn-primary-light {
  @apply border-primary-200 text-primary-700 bg-primary-200 hover:bg-primary-300 hover:border-primary-300 hover:text-primary-900;
}

.btn-secondary {
  @apply bg-secondary-500 text-secondary-100 border-transparent hover:bg-secondary-700;
}

.btn-secondary-light--outlined {
  @apply border-secondary-200 text-secondary-200 hover:bg-secondary-200 hover:text-secondary-700;
}

.btn-secondary-light {
  @apply border-secondary-200 text-secondary-700 bg-secondary-200 hover:bg-secondary-300 hover:border-secondary-300 hover:text-secondary-900;
}
</style>
<template>
  <button
    :disabled="buttonIsDisabled"
    :class="[
      'btn',
      `btn--${appButtonProp.size} `,
      `btn-${appButtonProp.type}${appButtonProp.light ? '-light' : ''}${
        appButtonProp.outlined ? '--outline' : ''
      } `,
      appButtonProp.block && 'btn--block',
    ]"
  >
    <span
      class="relative z-[2]"
      :class="{
        invisible: buttonIsLoading,
      }"
    >
      <slot> Button </slot>
    </span>
    <span v-if="buttonIsLoading" class="btn-spinner">
      <Icon name="svg-spinners:3-dots-rotate" size="1.3rem"></Icon>
    </span>
  </button>
</template>
