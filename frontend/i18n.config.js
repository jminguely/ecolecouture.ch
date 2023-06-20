import FR from './i18n/FR.json'
import DE from './i18n/DE.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'FR',
  messages: { FR, DE },
}))
