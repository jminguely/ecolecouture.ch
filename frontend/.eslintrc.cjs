module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['plugin:nuxt/recommended', 'plugin:vue/vue3-recommended'],
  plugins: [],
  rules: {
    'vue/no-v-html': 0,
    'vue/html-self-closing': 0,
    'no-unused-components': 0,
    'selector-anb-no-unmatchable': 0,
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
}
