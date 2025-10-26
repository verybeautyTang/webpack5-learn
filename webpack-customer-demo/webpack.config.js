// const loaderItem = require('./loaders/loaderItem.js'
const path = require('node:path');

module.exports = exports = {
    // 单入口
    entry: './src/index.js',
    mode: 'production',
    module:{
        rules:[
            {
                test: /\.js$/,
                // 注意这里的路径一定要用绝对路径
                use: 'loaderItem'
                // use: path.resolve(__dirname, './loaders/loaderItem.js')
            }
        ]
    },
    resolveLoader: {
        // 告诉webpack去哪个目录下去寻找loader
        modules: [ 'node_modules', path.resolve(__dirname, './loaders')]
    },
    output: {
        clean: true,
    }
}