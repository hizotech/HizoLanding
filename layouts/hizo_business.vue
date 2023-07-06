<template>
  <div class="min-h-screen bg-[#F1F9F7] font-body text-teal-950">
    <layout-header>
      <template #header-logo>
        <img
          class="w-[6rem] md:w-[9rem]"
          src="/img/hizo_business_logo.svg"
          alt="Hizo business"
        />
      </template>
    </layout-header>
    <main>
      <slot />
      <layout-footer></layout-footer>
    </main>
  </div>
</template>
