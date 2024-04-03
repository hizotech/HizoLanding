<template>
  <section class="px-5 py-20">
    <div
      class="mx-auto flex flex-col md:flex-row md:items-stretch gap-5 max-w-[75rem]"
    >
      <div
        class="bg-[#3CDF90] relative flex justify-center items-center rounded-3xl rounded-b-none md:rounded-r-none px-5 py-8 md:p-14 lg:p-20 md:rounded-l-3xl w-full"
      >
        <img src="/img/form_bg.svg" class="absolute top-0 right-0" alt="" />
        <img
          src="/img/form_bg_2.svg"
          class="absolute -bottom-20 right-0"
          alt=""
        />
        <img
          src="/img/form_bg_3.svg"
          class="absolute -bottom-5 left-0"
          alt=""
        />
        <div class="max-w-[23rem]">
          <h2
            class="mb-5 font-bold uppercase inline-flex bg-yellow-300 items-center gap-3 px-6 py-3 rounded-full"
          >
            <span>Hot</span>
            <img src="/img/fire_emoji.svg" class="w-4" alt="" />
          </h2>
          <p
            class="font-display font-light text-3xl md:text-[2.8rem] md:leading-[3.1rem] text-white"
          >
            <b class="font-bold">Download Hizo today </b>and have your
            <b class="font-bold">Naira travel with you</b>!
          </p>
          <div
            class="mt-6 flex md:flex-row items-center gap-3 text-xs md:text-sm max-w-[25rem] relative z-[2]"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.hizo.hizo"
            >
              <app-button bg-color="bg-teal-900" text-color="text-white"
                ><div class="inline-flex items-center gap-x-2">
                  <span class="w-8 block flex-shrink-0">
                    <img
                      src="/img/download_section_playstore.svg"
                      class="w-full"
                      alt=""
                    />
                  </span>
                  <span class="text-left"> Download on Playstore </span>
                </div></app-button
              >
            </a>
            <a href="https://apps.apple.com/ng/app/hizo/id6477319387">
              <app-button bg-color="bg-teal-900" text-color="text-white"
                ><div class="inline-flex items-center gap-x-2">
                  <span class="w-8 block flex-shrink-0">
                    <img
                      src="/img/download_section_applestore.svg"
                      class="w-full"
                      alt=""
                    />
                  </span>
                  <span class="text-left">Download on Applestore</span>
                </div></app-button
              >
            </a>
          </div>
        </div>
      </div>
      <div
        class="rounded-3xl rounded-t-none md:rounded-l-none md:rounded-r-3xl w-full md:w-[490px] flex-shrink-0 overflow-hidden"
      >
        <img
          src="/img/download_img.webp"
          class="w-full h-auto md:h-full object-cover object-center"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
