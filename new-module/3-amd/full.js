// 这是有模块的数据
define(['getname'], function(getname){
    let age = 27
    function getFull () {
        console.log(`I am ${age} years old`)
        return getname.getName() + age;
    }

    return  { getFull }
})