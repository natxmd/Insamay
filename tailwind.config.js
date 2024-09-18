/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'browni': '#513214',
        'yellowi': '#FFD966',
        'blacki': '#2C2C2C'
      },
      screens:{
        'mobile': "460px"
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        merriweather : 'Merriweather'
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
        black: 900,
      },
    },
  },
  plugins: [],
}