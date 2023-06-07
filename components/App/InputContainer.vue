<script lang="ts" setup>
interface ContainerProps {
  label: string;
  error?: string;
  for?: string;
}
const containerProps = withDefaults(defineProps<ContainerProps>(), {
  label: "",
});

const requestError = computed(() => containerProps.error);
</script>
<template>
  <div class="input-container">
    <label
      v-if="containerProps.label.length > 0"
      :for="containerProps.for"
      class="mb-2 inline-block text-xs text-slate-600"
      >{{ containerProps.label }}</label
    >
    <slot> </slot>
    <span class="error">{{ requestError }}</span>
  </div>
</template>
<style scoped>
.input-container .error {
  @apply text-xs text-red-500 block mt-1;
}

.input-container:deep(input[type="text"]),
.input-container:deep(input[type="email"]),
.input-container:deep(input[type="number"]),
.input-container:deep(input[type="password"]),
.input-container:deep(input[type="date"]),
.input-container:deep(input[type="time"]) {
  @apply h-12 w-full rounded-md border p-2 outline-0 hover:border-primary-600 hover:ring-4 hover:ring-primary-100 focus:border-primary-600 focus:ring-4 focus:ring-primary-100;
}
</style>
