// 这是没有依赖的模块
define(function() {
    // return 'hello'
    let data = 'hi, my name is jasmine'
    function getName () {
        console.log('data',data)
        return data
    }
    return  { getName }
})