<script lang="ts" setup></script>
<template>
  <div class="flex gap-x-8 gap-y-8 flex-col md:flex-row">
    <aside
      class="w-full md:w-[10rem] flex-shrink-0 sticky md:self-start top-[5.5rem] md:top-[6rem]"
    >
      <ul class="flex flex-row md:flex-col w-full overflow-x-auto">
        <li class="inline-block md:block">
          <nuxt-link
            class="tc-link"
            active-class="tc-active"
            to="/terms-conditions"
            >Terms & <br class="hidden md:inline" />
            Conditions</nuxt-link
          >
        </li>
        <li class="inline-block md:block">
          <nuxt-link
            class="tc-link"
            active-class="tc-active"
            to="/privacy-policy"
            >Privacy <br class="hidden md:inline" />
            Policy</nuxt-link
          >
        </li>
        <li class="inline-block md:block">
          <nuxt-link class="tc-link" active-class="tc-active" to="/kyc-policy"
            >KYC/AML/ <br class="hidden md:inline" />
            CFT Policy</nuxt-link
          >
        </li>
      </ul>
    </aside>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.tc-link {
  @apply inline-block whitespace-nowrap md:whitespace-normal text-sm md:block border-b-4 text-gray-600 font-extrabold md:border-b-0 md:border-l-4 border-transparent px-4 py-4;
}

.tc-link.tc-active {
  @apply border-green-500 text-black;
}
</style>
