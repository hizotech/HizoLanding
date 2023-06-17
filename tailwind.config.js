/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        'body': ['"Plus Jakarta Sans"'],
        'display' : ['YgroSansBeta']
      },
      colors:{
        'primary': {
          50: "#E4E4FF",
          100: "#CFCFF3",
          200: "#BCBCE7",
          300: "#8484CB",
          400: "#6060B9",
          500: "#2828B2",
          600: "#1717AD",
          700: "#0F0FA0",
          800: "#060679",
          900: "#02024F"
        },
        'lblue': '#4845FF',
        'secondary': colors.amber
      }
    },
  },
  plugins: [],
}
