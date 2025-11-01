// module4.js文件
define(function (require, exports, module) {
  //引入依赖模块(同步)
  var module1 = require('./module1')
  function show() {
    console.log('module1 show() ' + module1.data)
  }
  exports.show = show
  //引入依赖模块(异步)
  require.async('./module2', function (m2) {
    console.log('异步引入依赖模块2  ' + m2.msg)
  })
})