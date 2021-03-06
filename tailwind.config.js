const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        purple: {
          874: '#874cc1'
        },
        gray: {
          101: '#f9f9f9'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
