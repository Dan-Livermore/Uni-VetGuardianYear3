/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {
      boxShadow: ['responsive', 'hover', 'focus', 'active'], 
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};