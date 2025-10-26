module.exports =  class AssetsMapPlugin {
    constructor(parameters) {
        console.log(parameters)
    }
    apply(compiler) {
        // 指定一个挂载到 webpack 自身的事件钩子。
        compiler.hooks.emit.tapAsync('AssetsMapPlugin', (compilation, cb) => {
            // const assetsMap = {};
            console.log('i am emits tapAsync');
            cb();
        })
        // 指定一个挂载到 webpack 自身的事件钩子。
        compiler.hooks.done.tap('AssetsMapPlugin', (compilation) => {
            console.log('i am done tap');
        })
        // / 现在可以通过 compilation 对象绑定各种钩子
        compiler.hooks.compilation.tap('AssetsMapPlugin', (compilation) => {
            console.log('资源优化完毕')
        })
    }
}