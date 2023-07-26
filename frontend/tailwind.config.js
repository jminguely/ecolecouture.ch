/** @type {import('tailwindcss').Config} */
const Color = require('color')
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string()
const darken = (clr, val) => Color(clr).darken(val).rgb().string()

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFEF1',
      black: '#2D3A4D',
      blue: {
        DEFAULT: '#1500FF', // => .bg-brand
        lighter: lighten('#1500FF', 0.2), // => .bg-brand-lighter
        darker: darken('#1500FF', 0.2), // => .bg-brand-darker
      },
      turquoise: '#03FFC0',
      pink: '#FF44CD',
      lightpink: '#FFD8DD',
      green: '#008163',
      yellow: '#E1DD4B',
    },
    extend: {
      aspectRatio: {
        cine: '2.35 / 1',
      },
      transitionDuration: {
        3000: '3000ms',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        heading: ['Basteleur', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-/,
    },
    {
      pattern: /text-/,
    },
  ],
}
