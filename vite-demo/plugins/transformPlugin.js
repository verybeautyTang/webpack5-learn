export default function transformPlugin () {
    return ({
        name: 'transform-plugin',
        // 转换自定义文件类型
        transform(code,id) {
            // if(code.indexOf)
            if(code.indexOf('shoushou') > -1) {
                 console.log('code-id', code, id)
            }
            // 这里是替换过程
             code = code.replace('shoushou', '我是瘦瘦宝贝');
            return code
        }
    }
    )
}