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
      gray: '#8D9AAD',
      black: '#2D3A4D',
      electricblue: '#0034FF',
      blue: {
        DEFAULT: '#2543AB',
        lighter: lighten('#2543AB', 0.2),
        darker: darken('#2543AB', 0.2),
      },
      turquoise: {
        DEFAULT: '#03FFC0',
        lighter: lighten('#03FFC0', 0.2),
        darker: darken('#03FFC0', 0.2),
      },
      pink: {
        DEFAULT: '#FF44CD',
        lighter: lighten('#FF44CD', 0.2),
        darker: darken('#FF44CD', 0.2),
      },
      red: {
        DEFAULT: '#FF5959',
        lighter: lighten('#FF5959', 0.2),
        darker: darken('#FF5959', 0.2),
      },
      lightpink: {
        DEFAULT: '#FFD8DD',
        lighter: lighten('#FFD8DD', 0.2),
        darker: darken('#FFD8DD', 0.2),
      },
      green: {
        DEFAULT: '#008163',
        lighter: lighten('#008163', 0.2),
        darker: darken('#008163', 0.2),
      },
      yellow: {
        DEFAULT: '#E1DD4B',
        lighter: lighten('#E1DD4B', 0.2),
        darker: darken('#E1DD4B', 0.2),
      },
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
    maxWidth: {
      lg: '1240px',
      xl: '1920px',
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
