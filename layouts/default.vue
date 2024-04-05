<script lang="ts" setup>
const preparePixelCode = () => {
  const head = document.querySelector("head");
  const noScript = document.createElement("noscript");
  const image = document.createElement("img");
  image.height = 1;
  image.width = 1;
  image.src =
    "https://www.facebook.com/tr?id=440689385121131&ev=PageView&noscript=1";
  image.style.display = "none";
  noScript.append(image);
  head?.append(noScript);
};
onMounted(() => {
  preparePixelCode();
});
</script>
<template>
  <div class="min-h-screen bg-[#F4F4F4] font-body text-teal-950">
    <layout-header></layout-header>
    <main>
      <slot />
      <layout-footer></layout-footer>
    </main>
  </div>
</template>
