<template>
  <!-- navbar -->
  <header
    class="sticky left-0 top-0 w-full bg-[#F1F9F7] backdrop-blur-lg bg-opacity-50 px-5 py-5 z-20"
  >
    <nav class="mx-auto flex max-w-[75rem] items-center justify-between">
      <img class="w-20" src="/img/hizo_logo.svg" alt="Hizo finance" />
      <ul class="hidden items-center gap-9 text-sm md:flex">
        <li>
          <a
            href="#"
            class="text-green-950 transition-colors duration-200 ease-out hover:text-green-600"
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="#"
            class="text-green-950 transition-colors duration-200 ease-out hover:text-green-600"
          >
            Company
          </a>
        </li>
        <li>
          <a
            href="#"
            class="text-green-950 transition-colors duration-200 ease-out hover:text-green-600"
            >Blog</a
          >
        </li>
      </ul>
      <div class="flex items-stretch gap-3">
        <a
          href="#waitlistForm"
          class="inline-block rounded-xl font-display border-2 border-transparent bg-green-400 px-4 py-3 text-sm font-bold text-green-950 transition-all duration-200 ease-in hover:border-white md:px-6 md:py-5"
          >Join our waitlist</a
        >
        <button
          class="rounded-lg bg-white px-4 py-3 hover:text-green-600 md:hidden md:px-6 md:py-5"
        >
          <icon name="solar:list-linear" size="1.2rem" />
        </button>
      </div>
    </nav>
  </header>
  <!-- navbar end -->
</template>
