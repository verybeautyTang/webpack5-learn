# 新兴构建工具选型与原理剖析
没有模块化处理的情况下，可能存在变量污染，具体请看basic(footer/banner/index)里面的实例。解决方案如下

## 模块化规范方案
 1. esm(ECMAscript module)规范,当下很推崇的一个方案，vite之所以能实现bundleless，完全依赖于这个概念。(浏览器的type='module')
  - 被使用的文件中，要抛出给外部使用的内容(函数、变量等)
  - 在使用的文件中，要引入外部给的内容，具体看basic(header/index)里面的实例
 2. 
 3. 


 ## 模块化规范主流方案和时间线
 1. commonjs (详情看esm_com代码)
 2. cmd
 3. amd
 4. ems(详情看esm_com代码)  
 5. umd

### commonjs


### amd
  - 引入require.js
  - 定义暴露模块
  - 引入模块
  AMD模块定义的方法非常清晰，不会污染全局环境，能够清楚地显示依赖关系

不带异步导入，所以衍生出了cmd

### cmd
CMD规范专门用于浏览器端，模块的加载是异步的，模块使用时才会加载执行。CMD规范整合了CommonJS和AMD规范的特点。在 Sea.js 中，所有 JavaScript 模块都遵循 CMD模块定义规范。

