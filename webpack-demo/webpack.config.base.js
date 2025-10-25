// 引入html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 提取css到单独文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = exports = {
    // 单入口
    // entry: './src/index.js',
    // 多入口，打包到一个产物里面
    // entry:[ './src/index.js', './src/index2.js'],
    // 多入口，打包到多个产物里面
    entry: {
        index: './src/index.js',
        index2: './src/index2.js'
    },
    output: {
        // 只要hash的话，打包出来的hash都一样
        // filename: '[name].[hash].js',

        // 在没有chunk的情况下，最好使用contenthash
        filename: '[name].[contenthash].js',

        // 在有chunk的情况下，可以使用chunkhash
        // filename: '[name].[chunkhash].js',
        path: __dirname + '/output',
        // 环境，需要输入的是否要支持es6写法，如果不要，则将其设置为false
        environment: {
            arrowFunction: false,
            asyncFunction: false
        },
        clean: true,
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['babel-loader'],
        },
        {
            test: /\.css$/,
            // 这个比较特殊，需要配合插件使用
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
    ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack demo'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    resolve: {
        // 这里的顺序很重要，会按照顺序去解析，然后这里是不用写后缀的
        extensions: ['.js', '.jsx']
    },

    // 代码分割优化
    // opmtimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },

    // 热更新
    devServer: {
        port: 3000,
        open: true,
    }
}