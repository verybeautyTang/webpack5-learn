import { rollup } from 'rollup'
import css from 'rollup-plugin-import-css'
import typescript from '@rollup/plugin-typescript'

module.exports = [
  {
    input: './src/main.ts',
    output: {
      // 如果是单个就没必要用 dir
      // dir: 'dist/',
      // 打包的名称
      file: 'bundle.js',
      // 打包的格式
      format: 'amd',
    },
  },
].map((config) => {
  config.plugins = [css(), typescript()]
  return config
})
