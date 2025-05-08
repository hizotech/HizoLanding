<script lang="ts" setup>
import type { NuxtApp } from '#app'

definePageMeta({
  pageTransition: {
    name: 'zoom',
    mode: 'out-in'
  }
})

useHead({
  title: 'Hizo Support',
  script: [
    {
      innerHTML: `window.$zoho = window.$zoho || {};
      $zoho.salesiq = $zoho.salesiq || { 
        widgetcode: "siq366564c467e558c765b10ab9c9eccdeadd441c259dcd6f80018984b7cbc04610",
        ready: function() { 
          $zoho.salesiq.floatbutton.visible('hide');
        } 
      };`,
      type: 'text/javascript'
    },
    {
      src: 'https://salesiq.zohopublic.com/widget?wc=siq366564c467e558c765b10ab9c9eccdeadd441c259dcd6f80018984b7cbc04610',
      id: 'zsiqscript',
      defer: true
    }
  ]
})

// Function to open Zoho chat directly
const openZohoChat = () => {
  if (window.$zoho && window.$zoho.salesiq) {
    // Using setTimeout to ensure Zoho is fully loaded
    setTimeout(() => {
      // Open the chat window
      window.$zoho.salesiq.floatwindow.visible('show');
    }, 500);
  }
}

// Call this function when the page loads to make sure Zoho is initialized
onMounted(() => {
  // Hide the default floating button since we'll use our custom button
  if (window.$zoho && window.$zoho.salesiq) {
    window.$zoho.salesiq.floatbutton.visible('hide');
  }
})
</script>

<template>
  <div class="flex flex-col justify-center text-center gap-10 px-5 py-10 md:px-20 md:py-20">
    <h3 class="mt-4 text-xl md:text-5xl font-bold tracking-tighter text-gray-900">
      Quick Support
    </h3>
    
    <p class="mt-2 text-gray-600">
      Click below to contact our support team directly.
    </p>
    
    <div class="mx-auto mt-5 w-full md:w-2/5">
      <AppButton 
        variant="primary" 
        class="w-full" 
        @click="openZohoChat"
      >
        <span class="text-center">Contact Support</span>
      </AppButton>
    </div>
  </div>
</template>