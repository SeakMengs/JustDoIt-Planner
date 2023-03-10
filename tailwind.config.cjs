/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white-theme-1': '#f3f3fb',
        'white-theme-2': '#f8faf9',
        'col-blue': '#f8faf9',
        'col-gray': '#525252',
        'dark-theme-1': '#0a0a0a',
        'dark-theme-2': '#151515',
        'dark-theme-3': '#272727',
      },
      screens: {
        'max-xs': {'max': '320px'},
        'max-sm': {'max': '640px'},
      },
    },
  },
  plugins: [],
}
