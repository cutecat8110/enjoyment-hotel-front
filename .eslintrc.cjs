module.exports = {
  env: {
    browser: true,
    es2023: true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'prettier'],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'no-undef': 'off',
    'prettier/prettier': 'error',
    quotes: ['error', 'single'], // 使用單引號
    'no-console': 'warn', // 禁止 console.log
    'comma-dangle': ['error', 'never'], // 禁止 object、Array 最後一項有逗號
    properties: 'never'
  }
}
