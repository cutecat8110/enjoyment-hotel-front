module.exports = {
  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-packagejson',
    'prettier-plugin-organize-attributes'
  ],
  printWidth: 100, // 每行文字數量達 100 字元就換到新的一行
  semi: false, // 每個語句的結尾不需要分號
  singleQuote: true, // 字串使用單引號，而不是雙引號
  trailingComma: 'none', // 如 Object、Array 內的元素不需要尾隨逗號
  attributeGroups: [
    '^v-if$',
    '^v-else$',
    '^v-else-if$',
    '^v-for$',
    '^(?::)?id$',
    '^(?::)?ref',
    '^(?::)?key',
    '^v-(?!loading$!if$!else$!else-if$!for$)',
    '^v-loading$',
    '^(?::)?model',
    '^(?::)?class$',
    '^(?::)?name$',
    '^(?::)?label$',
    '^(?::)?lang$',
    '^(?::)?src$',
    '^(?::)?type$',
    '^(?::)?href$',
    '^(?::)?value$',
    '^(?::)?title$',
    '^(?::)?alt$',
    '^(?::)?placeholder$',
    '$DEFAULT',
    '^(?::)?disabled$',
    '^(?::)?loading$',
    '^(?::)?src$',
    '^@'
  ],
  attributeSort: 'ASC',
  pluginSearchDirs: false
}
