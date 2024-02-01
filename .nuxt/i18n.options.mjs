
// @ts-nocheck


export const localeCodes =  [
  "en",
  "zh"
]

export const localeLoaders = {
  "en": [{ key: "../locales/en.json", load: () => import("../locales/en.json" /* webpackChunkName: "locale__src_locales_en_json" */), cache: true }],
  "zh": [{ key: "../locales/zh.json", load: () => import("../locales/zh.json" /* webpackChunkName: "locale__src_locales_zh_json" */), cache: true }]
}

export const vueI18nConfigs = [
  () => import("../i18n.config.js?hash=c231e734&config=1" /* webpackChunkName: "__i18n_config_js_c231e734" */)
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": ""
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "./i18n.config.js",
  "locales": [
    {
      "code": "en",
      "iso": "en-US",
      "name": "English",
      "files": [
        "locales/en.json"
      ]
    },
    {
      "code": "zh",
      "iso": "zh-TW",
      "name": "繁體中文",
      "files": [
        "locales/zh.json"
      ]
    }
  ],
  "defaultLocale": "zh",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "no_prefix",
  "lazy": true,
  "langDir": "locales",
  "rootRedirect": null,
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "i18nModules": []
}

export const nuxtI18nOptionsDefault = {
  "experimental": {
    "localeDetector": ""
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [],
  "defaultLocale": "",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": false,
  "langDir": null,
  "rootRedirect": null,
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false
}

export const normalizedLocales = [
  {
    "code": "en",
    "iso": "en-US",
    "name": "English",
    "files": [
      {
        "path": "locales/en.json"
      }
    ]
  },
  {
    "code": "zh",
    "iso": "zh-TW",
    "name": "繁體中文",
    "files": [
      {
        "path": "locales/zh.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const STRATEGIES = {
  "PREFIX": "prefix",
  "PREFIX_EXCEPT_DEFAULT": "prefix_except_default",
  "PREFIX_AND_DEFAULT": "prefix_and_default",
  "NO_PREFIX": "no_prefix"
}
export const DEFAULT_LOCALE = ""
export const DEFAULT_STRATEGY = "prefix_except_default"
export const DEFAULT_TRAILING_SLASH = false
export const DEFAULT_ROUTES_NAME_SEPARATOR = "___"
export const DEFAULT_LOCALE_ROUTE_NAME_SUFFIX = "default"
export const DEFAULT_DETECTION_DIRECTION = "ltr"
export const DEFAULT_BASE_URL = ""
export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"


