
// 引入webpack-merge去合并config.js共有的东西
const { merge } =  require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const WebpackbundleAnalyzer = require('webpack-bundle-analyzer');
module.exports = exports = merge(baseConfig,{
    mode: 'production',
    devtool: "inline-cheap-source-map",
    plugins: [
        // 生产环境下的插件
        new WebpackbundleAnalyzer.BundleAnalyzerPlugin()
    ]
  })