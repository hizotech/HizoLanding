<template>
  <div class="content">
    <slot />
  </div>
</template>
<style scoped>
.content:deep(h2) {
  @apply font-display text-2xl md:text-4xl font-bold tracking-[-0.15rem] mb-10;
}

.content:deep(h3) {
  @apply font-display text-xl md:text-3xl font-bold tracking-[-0.1rem] -mt-6 mb-10;
}

.content:deep(p),
.content:deep(li) {
  @apply text-xs md:text-sm mb-6;
}

.content:deep(.items) li {
  @apply text-xs md:text-sm mb-3;
}

.content:deep(.section) {
  @apply mb-16;
}

.content:deep(ul.dashed) {
  list-style-type: circle;
}

.content:deep(ul) {
  @apply list-disc;
}

.content:deep(ol) {
  @apply list-decimal;
}
.content:deep(ol[type="a"]) {
  list-style-type: lower-alpha;
}

.content:deep(ol[type="i"]) {
  list-style-type: lower-roman;
}

.content:deep(li > h3) {
  @apply inline-block font-bold;
}
</style>
