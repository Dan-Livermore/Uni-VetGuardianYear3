/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Roboto', 'ui-sans-serif', 'system-ui'],
    },
    boxShadow: {
      'inner-top': '0 -4px 6px -4px rgba(0, 0, 0, 0.1)', // Define your shadow properties
    },
  },
  variants: {
    extend: {
      boxShadow: ['responsive', 'hover', 'focus', 'active'], // Add shadow utility variants
    },
  },
  plugins: [
    require('@tailwindcss/forms'),],
}