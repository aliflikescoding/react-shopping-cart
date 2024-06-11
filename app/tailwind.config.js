/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "primary": "#da327f",
        "secondary": "#c52aa5",
        "text": "#000000",
        "background": "#ffffff"
      },
    },
  },
  plugins: [],
}

