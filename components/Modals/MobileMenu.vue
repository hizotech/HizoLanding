<script lang="ts" setup>
const emit = defineEmits(["navigateToPage"]);
const navigateToPage = (navigate = () => {}) => {
  emit("navigateToPage");
  navigate();
};
</script>
<template>
  <div class="mx-5 my-7">
    <ul class="flex flex-col gap-4">
      <nuxt-link custom to="/" v-slot="{ navigate }">
        <li
          class="flex w-full justify-between items-center hover p-4 group hover:bg-green-200 rounded-lg"
          @click.prevent="navigateToPage(navigate)"
        >
          <span class="font-bold">Home</span>
          <span class="group-hover:text-green-500 group-focus:text-green-500">
            <icon name="mdi:chevron-right" size="1.3rem" />
          </span>
        </li>
      </nuxt-link>
      <nuxt-link custom to="/about" v-slot="{ navigate }">
        <li
          class="flex w-full justify-between items-center hover p-4 group hover:bg-green-200 rounded-lg"
          @click.prevent="navigateToPage(navigate)"
        >
          <span class="font-bold">About</span>
          <span class="group-hover:text-green-500 group-focus:text-green-500">
            <icon name="mdi:chevron-right" size="1.3rem" />
          </span>
        </li>
      </nuxt-link>
      <nuxt-link custom to="/support" v-slot="{ navigate }">
        <li
          class="flex w-full justify-between items-center hover p-4 group hover:bg-green-200 rounded-lg"
          @click.prevent="navigateToPage(navigate)"
        >
          <span class="font-bold">Support</span>
          <span class="group-hover:text-green-500 group-focus:text-green-500">
            <icon name="mdi:chevron-right" size="1.3rem" />
          </span>
        </li>
      </nuxt-link>
      <nuxt-link custom to="https://blog.hizo.africa" v-slot="{ navigate }">
        <li
          class="flex w-full justify-between items-center hover p-4 group hover:bg-green-200 rounded-lg"
          @click.prevent="navigateToPage(navigate)"
        >
          <span class="font-bold">Blog</span>
          <span class="group-hover:text-green-500 group-focus:text-green-500">
            <icon name="mdi:chevron-right" size="1.3rem" />
          </span>
        </li>
      </nuxt-link>
      <nuxt-link custom to="/hizo-business" v-slot="{ navigate }">
        <li
          class="flex w-full justify-between items-center hover p-4 group hover:bg-green-200 rounded-lg"
          @click.prevent="navigateToPage(navigate)"
        >
          <span class="font-bold">HizoBusiness</span>
          <span class="group-hover:text-green-500 group-focus:text-green-500">
            <icon name="mdi:chevron-right" size="1.3rem" />
          </span>
        </li>
      </nuxt-link>
      <li>
        <a
          href="http://lend.hizo.africa"
          class="flex w-full justify-between items-center hover p-4 group hover:bg-green-200 rounded-lg"
        >
          <span class="font-bold">LendByHizo</span>
          <span class="group-hover:text-green-500 group-focus:text-green-500">
            <icon name="mdi:chevron-right" size="1.3rem" />
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>
