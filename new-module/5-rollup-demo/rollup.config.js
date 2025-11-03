import { rollup } from 'rollup'
import css from 'rollup-plugin-import-css'
import typescript from '@rollup/plugin-typescript'

export default [
  {
    input: './src/main.ts',
    output: {
      // 如果是单个就没必要用 dir
      // dir: 'dist/',
      // 打包的名称
      file: 'es/bundle.js',
      // 打包的格式
      format: 'es',
    },
  },
  {
    input: './src/main.ts',
    output: {
      // 如果是单个就没必要用 dir
      // dir: 'dist/',
      // 打包的名称
      file: 'lib/bundle.js',
      // 打包的格式
      format: 'cjs',
    },
  },
].map((config) => {
  config.plugins = [
    css(),
    typescript({
      // tslib: require.resolve('some-fork-of-tslib'),
    }),
  ]
  return config
})
