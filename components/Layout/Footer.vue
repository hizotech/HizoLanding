<template>
  <!-- footer -->
  <footer class="px-5 pt-32">
    <div class="mx-auto max-w-[75rem] rounded-t-3xl bg-white px-5 py-8 pt-14 text-sm text-neutral-400 md:p-14 lg:p-20">
      <!-- layer -->
      <div class="flex justify-between flex-col  gap-8 border-b pb-8 ">
        <div class="flex justify-between flex-col md:flex-row gap-6 border-b pb-6">
          <div>
            <img class="w-20 " src="/img/hizo_logo.svg" alt="Hizo finance" />
          </div>
          <div class=" flex  flex-col md:flex-row">
            <nuxt-link to="/privacy-policy" class="hover:text-green-400 mr-4">Privacy policy</nuxt-link>
            <nuxt-link to="/terms-conditions" class="hover:text-green-400 mr-6">Terms and conditions</nuxt-link>
            <nuxt-link to="/kyc-policy" class="hover:text-green-400">KYC/AML/CFT Policy</nuxt-link>
          </div>

        </div>
        <div class="w-[90%]">
          <!-- <img class="w-20 mb-5" src="/img/hizo_logo.svg" alt="Hizo finance" /> -->
          <p class="mb-3">
            Hizo Technology Limited, Canada is registered and regularized by the Financial Transactions and Reports
            Analysis Centre (FINTRAC) of Canada as a Money Service Business with MSB registration number: C100000398.
          </p>
        </div>


      </div>
      <!-- layer end -->

      <!-- layer -->
      <!-- <div class="py-7 flex flex-col justify-between gap-8 text-green-950 md:flex-row md:items-center">
        <p>Hizo Technology limited 2023. All rights reserved</p>
        <div class="item-center inline-flex gap-3">
          <a href="https://www.facebook.com/share/zxPegQFGWqiXLuQD/?mibextid=qi2Omg">
            <icon name="logos:facebook" size="1.3rem" />
          </a>
          <a href="https://x.com/HizoHq?t=Y2FIADEejBaI41_wyVlCCA&s=09">
            <icon name="logos:twitter" size="1.3rem" />
          </a>
          <a href="https://www.instagram.com/hizo_hq?igsh=MTltdjVjdnd0OWNpMw==">
            <icon name="logos:instagram-icon" size="1.3rem" />
          </a>
          <a href="mailto:support@hizo.africa">
            <icon name="carbon-email" size="1.7rem" />
          </a>

        </div>
      </div> -->

      <!-- layer end -->
      <div class="flex flex-col justify-between md:flex-row py-2">
        <div class="w-[50%]">
          <h1>Hizo Technology limited 2023. All rights reserved</h1>
        </div>
        <div class="item-center inline-flex gap-3">
          <a href="https://www.facebook.com/share/zxPegQFGWqiXLuQD/?mibextid=qi2Omg">
            <icon name="logos:facebook" size="1.3rem" />
          </a>
          <a href="https://x.com/HizoHq?t=Y2FIADEejBaI41_wyVlCCA&s=09">
            <icon name="logos:twitter" size="1.3rem" />
          </a>
          <a href="https://www.instagram.com/hizo_hq?igsh=MTltdjVjdnd0OWNpMw==">
            <icon name="logos:instagram-icon" size="1.3rem" />
          </a>
          <a href="mailto:support@hizo.africa">
            <icon name="carbon-email" size="1.7rem" class="text-black" />
          </a>

        </div>
      </div>
    </div>

  </footer>
  <!-- footer end -->
</template>
