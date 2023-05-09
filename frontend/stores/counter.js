import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 'foo',
  }),
  actions: {
    increment(value) {
      this.count = value
    },
  },
})
