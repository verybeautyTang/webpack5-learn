// 配置入口文件
(function() {
    require.config({
        baseUrl:'/',
        paths: {
            name: '/getname',
            full: '/full'
        }
    })
    require(['full'], function(full) {
        full.getFull()
    })
})()