import parser from '@typescript-eslint/parser'

export default {
  files: ['**/*.ts'],
  rules: {
    // 没有使用过的变量会报错
    'no-unused-vars': 'error',
    // 如果打印出来有 console， 也报错（不允许打印）
    'no-console': 'error',
    // 不允许数组里面出现空的
    'no-sparse-arrays': 'error',
    // 不允许对象里面有多个相同的 key
    'no-dupe-keys': 'error',
  },
  // 指定解析器
  languageOptions: {
    parser: parser,
  },
}

// 如果是 commonjs 的情况，把后缀改成 mjs
