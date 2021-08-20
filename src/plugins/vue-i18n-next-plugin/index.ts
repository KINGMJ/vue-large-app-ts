import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'

interface LocalesDataInterface {
  messages: LocaleMessages<VueMessageType>
}

/**
 * 从 json 文件中获取翻译的值
 * @returns
 */
const getLocalesData = (): LocalesDataInterface => {
  // 使用 webpack 的 require.context语法读取翻译文件
  // https://webpack.docschina.org/guides/dependency-management/
  const files = (require as any).context('./locales', true, /\.json$/)
  const localeData: LocalesDataInterface = {
    messages: {}
  }

  const keys: string[] = files.keys()

  keys.forEach((key: string) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const localeId = matched[1]
      localeData.messages[localeId] = files(key).messages
    }
  })

  return localeData
}

const data: LocalesDataInterface = getLocalesData()

export const i18n = createI18n({
  locale: 'it-IT',
  fallbackLocale: 'en-US',
  messages: data.messages
})
