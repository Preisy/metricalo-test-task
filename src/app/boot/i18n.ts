import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: 'ru-RU',
    legacy: false,
    // messages: mergeI18n(),
    messages: {
      'ru-RU': {
        a: '12',
      },
    },
    fallbackLocale: 'ru-RU',
  })

  // Set i18n instance on app
  app.use(i18n)
})
