module.exports = {
  env: {
    browser: true,
    es2023: true,
  },
  extends: ["@nuxtjs/eslint-config-typescript"],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: "module",
  },
  rules: {
    "no-undef": "off",
  },
};
