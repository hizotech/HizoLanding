<script lang="ts" setup>
definePageMeta({
  layout: "download",
});

useHead({
  title: "Hizo Finance",
  meta: [
    {
      name: "description",
      content: "Unlocking Seamless Currency Exchange for Nigerians Abroad!",
    },
    {
      property: "og:description",
      content: `Unlocking Seamless Currency Exchange for Nigerians Abroad!`,
    },
    {
      property: "twitter:description",
      content: `Unlocking Seamless Currency Exchange for Nigerians Abroad!`,
    },
  ],
});

const visitStore = () => {
  const isAndroid = /android/i.test(navigator.userAgent);
  window.location.href = isAndroid
    ? `https://play.google.com/store/apps/details?id=com.hizo.hizo`
    : `https://apps.apple.com/ng/app/hizo/id6477319387`;
};

onMounted(() => {
  visitStore();
});
</script>
<template></template>
