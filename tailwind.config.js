/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '475px',
      '2xs': '375px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'text': '#000000',
        'background': '#ffffff',
        'primary': '#707070',
        'secondary': '#bfbfbf',
        'accent': '#f2f2f2',
      },
      keyframes: {
        fadeIn: {
          '0%': { filter: 'grayscale(100%)' },
          '100%': { filter: 'grayscale(0%)' },
        },
      }, 
      animation: {
        fadeIn: 'fadeIn 0.7s ease-in',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}