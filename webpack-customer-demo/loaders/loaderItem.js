
//  import {  } from "loader-utils";
/***
 * 自定义的loader，将源码中的hello替换成****
 */

module.exports = function(source) {
    console.log('source', source)
    console.log(this)

    // 编译就是对字符串的处理过程

    source = source.replace('hello', '****');

    return source;

}