export default {
  rules: {
    // 没有使用过的变量会报错
    'no-unused-vars': 'error',
    // 如果打印出来有 console， 也报错（不允许打印）
    'no-console': 'error',
  },
}

// 如果是 commonjs 的情况，把后缀改成 mjs
