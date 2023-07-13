// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,
    css: ["~/assets/css/tailwind.css","~/assets/css/transitions.css"],
    modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
    app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          meta:[
            {
                name: "theme-color",
                content: "#052f2e",
              },
              {
                property: "og:image",
                content:"https://www.hizo.africa/img/og_hizo.jpg"
               } ,
               {
                property: "og:url",
                content:"https://www.hizo.africa"
               },
               {
                property: "og:type",
                content:"website"
               } ,
               {
                property: "twitter:card",
                content:"summary_large_image"
               },
               {
                property: "twitter:image",
                content:"https://www.hizo.africa/img/og_hizo.jpg"
               } ,
               {
                property: "twitter:url",
                content:"https://www.hizo.africa"
               },
          ]
        }
      }

});
