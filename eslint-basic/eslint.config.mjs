// export default {
//   rules: {
//     // 没有使用过的变量会报错
//     'no-unused-vars': 'error',
//     // 如果打印出来有 console， 也报错（不允许打印）
//     'no-console': 'error',
//     // 不允许数组里面出现空的
//     'no-sparse-arrays': 'error',
//     // 不允许对象里面有多个相同的 key
//     'no-dupe-keys': 'error',
//   },
// }

// // 如果是 commonjs 的情况，把后缀改成 mjs

// 使用规则集（这样就不用手动去写了，eslint 自带的
import js from '@eslint/js'
//  eslint9 可以用数组的形式去做了
export default [js.configs.recommended]
