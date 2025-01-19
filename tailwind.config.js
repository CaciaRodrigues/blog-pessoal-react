/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'licorine-black': '#1D1519',
        'dark-purple-brown': '#33212B',
        'raisin-black-purple': '#362830',
        'dark-eggplant-purple': '#43303B',
        'mid-eggplant-purple': '#4C3C45',
        'lit-eggplant-purple': '#5D4954',
        'mountbatten-pink': '#7E6975',
        'rose-quartz': '#A18B97',
        'lit-rose-quartz': '#C3ABB8',
        'mimi-pink': '#EBD3DF',
        'lavender-blush-white': '#F3E7ED'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'serif'], 
        playwrite: ['Playwrite AU SA', 'serif'], 
      },
      saturate: {
        25: '.25',
        75: '.75'
      }
    },
  },
  plugins: [],
}

