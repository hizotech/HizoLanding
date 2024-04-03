<script lang="ts" setup>
const visitStore = () => {
  const isAndroid = /android/i.test(navigator.userAgent);
  window.location.href = isAndroid
    ? `https://play.google.com/store/apps/details?id=com.hizo.hizo`
    : `https://apps.apple.com/ng/app/hizo/id6477319387`;
};

onBeforeMount(() => {
  visitStore();
});
</script>
<template></template>
