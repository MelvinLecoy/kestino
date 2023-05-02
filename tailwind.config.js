/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'i5_320': '320px', // >= @media (min-width: 320px) { ... }
        // '320-375': {'min': '320px', 'max': '375px'}, // @media (min-width: 320px and max-width: 375px) { ... }
        '375': '375px',
        // '375-414': {'min': '375px', 'max': '414px'},
        '414': '414px',
        // '414-640': {'min': '414px', 'max': '640px'},
        '640': '640px',   //sm
        // '640-768': {'min': '640px', 'max': '768px'},
        '768': '768px',   //md
        // '768-1024': {'min': '768px', 'max': '1024px'},
        '1024': '1024px', //lg
        // '1024-1280': {'min': '1024px', 'max': '1280px'},
        '1280': '1280px', //xl
        // '1280-1440': {'min': '1280px', 'max': '1440px'},
        '1440': '1440px',
        // '1440-1536': {'min': '1440px', 'max': '1536px'},
        '1536': '1536px', //2xl
        // '1536-1792': {'min': '1536px', 'max': '1792px'},
        '1792': '1792px',
        // '1792-2048': {'min': '1792px', 'max': '2048px'},
        '2048': '2048px',
      },
      colors: {
        bg: '#1d1d1f',
        icon: '#808080',
        mainOran: '#F7AB0A',
      },
      fontFamily: {
        mainMenu: ['var(--font-andika)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
