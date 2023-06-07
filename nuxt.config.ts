// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,
    css: ["~/assets/css/tailwind.css","~/assets/css/transitions.css"],
    modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
});
