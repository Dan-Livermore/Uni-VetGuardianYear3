const defaultConfig = require('tailwindcss/defaultConfig');
// import { defaultConfig } from 'tailwindcss/tailwind-config';

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#618264',
          secondary: '#79AC78',
          tertiary: '#B0D9B1',
          quaternary: '#D0E7D2',
        },
      },
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'inner-top': '0 -4px 6px -4px rgba(0, 0, 0, 0.1)', 
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
