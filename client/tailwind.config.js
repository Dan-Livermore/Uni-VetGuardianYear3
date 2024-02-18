/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'inner-top': '0 -4px 6px -4px rgba(0, 0, 0, 0.1)', 
      },
      colors: {
        light: {
          primary: '#007bff',
          secondary: '#6c757d',
          background: '#f8f9fa',
        },
        dark: {
          primary: '#1f6feb',
          secondary: '#adb5bd',
          background: '#212529',
        },
      },
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