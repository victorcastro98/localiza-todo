/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-pop': '#7EDD1F',
        'green-dark': '#04662D',
        'green-light': '#009800'
    },
    },
  },
  plugins: [],
}