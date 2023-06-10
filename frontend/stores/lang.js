import { defineStore } from 'pinia'

export const useLangStore = defineStore('lang', {
  state: () => ({
    availableTranslations: null,
  }),
  actions: {
    setAvailableTranslations(value) {
      this.availableTranslations = value
    },
  },
})
