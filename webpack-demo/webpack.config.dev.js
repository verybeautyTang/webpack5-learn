
// 引入webpack-merge去合并config.js共有的东西
const { merge } =  require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
module.exports = exports = merge(baseConfig,{
    mode: 'development',
    // 一般开发的时候就选source-map，在开发过程中好去定位错误
    devtool: "source-map",
  });