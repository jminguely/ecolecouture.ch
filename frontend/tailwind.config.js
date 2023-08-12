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
      gray: '#eeeeee',
      black: '#2D3A4D',
      blue: {
        DEFAULT: '#2543AB',
        lighter: lighten('#2543AB', 0.2),
        darker: darken('#2543AB', 0.2),
      },
      turquoise: '#03FFC0',
      pink: {
        DEFAULT: '#FF44CD',
        lighter: lighten('#FF44CD', 0.2),
        darker: darken('#FF44CD', 0.2),
      },
      red: '#FF5959',
      lightpink: '#FFD8DD',
      green: '#008163',
      yellow: '#E1DD4B',
    },
    fontSize: {},
    fontWeight: {
      normal: '400',
      semibold: '600',
      bold: '700',
    },
    fontFamily: {
      sans: ['SuisseIntl', 'sans-serif'],
      heading: ['Basteleur', 'sans-serif'],
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-/,
      variants: ['hover', 'active'],
    },
    {
      pattern: /text-/,
      variants: ['hover', 'active'],
    },
  ],
}
