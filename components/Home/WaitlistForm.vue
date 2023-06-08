<template>
  <!-- waitlist -->
  <section class="px-5 pb-32" id="waitlistForm">
    <div
      class="mx-auto flex max-w-[75rem] flex-wrap rounded-3xl bg-[#4845FF] px-5 py-14 md:p-14 lg:p-20 relative overflow-hidden"
    >
      <img src="/img/form_bg.svg" class="absolute -top-1 right-0" alt="" />
      <img
        src="/img/form_bg_2.svg"
        class="absolute -bottom-20 right-0"
        alt=""
      />
      <img src="/img/form_bg_3.svg" class="absolute -bottom-5 left-0" alt="" />
      <div class="w-full md:w-7/12 relative z-3">
        <h1 class="font-display font-light text-3xl md:text-5xl text-white">
          <b>Download Hizo today </b>and embark on a journey where your
          <b>Naira knows no boundaries</b>!
        </h1>
        <form
          class="mt-10 flex items-stretch gap-3 text-xs md:text-sm max-w-[30rem]"
        >
          <input
            type="text"
            placeholder="Your Email ..."
            class="w-full min-w-[2rem] rounded-xl border-2 border-transparent bg-white bg-opacity-20 px-1 py-4 text-white placeholder-blue-200 outline-none transition-all duration-200 hover:bg-transparent hover:border-white focus:bg-transparent focus:border-white md:px-6 md:py-5"
          />
          <button
            type="submit"
            class="flex-shrink-0 rounded-xl border-2 border-transparent bg-white px-4 py-4 font-display font-bold text-[#4845FF] transition-all duration-200 md:px-6 md:py-5"
          >
            Join our waitlist
          </button>
        </form>
      </div>
    </div>
  </section>
  <!-- waitlist end -->
</template>
