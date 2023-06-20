import fr from './i18n/fr.json'
import de from './i18n/de.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'FR',
  messages: { FR: fr, DE: de },
}))
