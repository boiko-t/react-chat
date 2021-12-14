const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/*.{html, js}', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
    colors: {
      accent: colors.indigo,
      primary: colors.gray,
      transparent: 'transparent',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
