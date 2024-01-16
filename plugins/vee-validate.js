import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import * as allRules from '@vee-validate/rules'
import { configure, defineRule } from 'vee-validate'

// 必須定義，用來封裝 plugin
export default defineNuxtPlugin((_nuxtApp) => {
  // 迴圈依序加入規則
  Object.keys(allRules)
    .filter((k) => k !== 'default')
    .forEach((rule) => {
      defineRule(rule, allRules[rule])
    })

  // 配置訊息
  configure({
    generateMessage: localize({ zh_TW: zhTW })
  })

  setLocale('zh_TW')
})
