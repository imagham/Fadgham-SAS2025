/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
      'akaya-kanadaka': ['Akaya Kanadaka', 'cursive'],
      'poetsen-one': ['Poetsen One', 'serif'],
      'oswald': ['Oswald', 'sans-serif'],
      'whinky': ['Whinky', 'cursive'],
    },
   

  },
  plugins: [],
}