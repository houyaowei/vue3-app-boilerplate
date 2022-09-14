import { createI18n } from 'vue-i18n'
import ZH_LANG from './zh'
import EN_LANG from './en'

const DEFAULT_LANG = 'zh'

const locales = {
  zh: ZH_LANG,
  en: EN_LANG
}

const i18n = createI18n({
  locale: DEFAULT_LANG,
  messages: locales,
})

export default i18n
