<template>
  <!-- footer -->
  <footer class="px-5 pt-32">
    <div class="mx-auto max-w-[75rem] rounded-t-3xl bg-white px-5 py-8 pt-14 text-sm text-neutral-400 md:p-14 lg:p-20">
      <!-- layer -->
      <div class="flex justify-between flex-col  gap-11 border-b pb-6 lg:grid-cols-6">
        <div class="w-[90%]">
          <img class="w-20 mb-5" src="/img/hizo_logo.svg" alt="Hizo finance" />
          <p class="mb-3">
            Hizo Technology Limited, Canada is registered and regularized by the Financial Transactions and Reports
            Analysis Centre (FINTRAC) of Canada as a Money Service Business with MSB registration number: C100000398.
            Canadian services are offered by Hizo Technology Ltd with registered address at 422 Richards St., Suite 170,
            Vancouver BC V6B 2Z4, Canada.
          </p>
        </div>

        <div class="flex flex-col md:flex-row justify-between gap-6">
          <div class="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div class="text-green-950 flex items-center gap-5">
              <span>Supported in:</span>
              <div class="item-center inline-flex gap-3">
                <icon name="emojione-v1:flag-for-kenya" size="1.3rem" />
                <icon name="emojione-v1:flag-for-nigeria" size="1.3rem" />
                <icon name="emojione-v1:flag-for-ghana" size="1.3rem" />
                <icon name="emojione-v1:flag-for-rwanda" size="1.3rem" />
                <icon name="emojione-v1:flag-for-south-africa" size="1.3rem" />
              </div>
            </div>

          </div>
          <div class="flex justify-between flex-col md:flex-row gap-6">
            <nuxt-link to="/privacy-policy" class="hover:text-green-400">Privacy policy</nuxt-link>
            <nuxt-link to="/terms-conditions" class="hover:text-green-400">Terms and conditions</nuxt-link>
            <nuxt-link to="/kyc-policy" class="hover:text-green-400">KYC/AML/CFT Policy</nuxt-link>
          </div>

        </div>


      </div>
      <!-- layer end -->

      <!-- layer -->
      <div class="py-7 flex flex-col justify-between gap-8 text-green-950 md:flex-row md:items-center">
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
          <a href="support@hizo.africa">
            <icon name="carbon-email" size="1.7rem" />
          </a>
        </div>
      </div>

      <!-- layer end -->
    </div>
  </footer>
  <!-- footer end -->
</template>
