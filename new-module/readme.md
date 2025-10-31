# 新兴构建工具选型与原理剖析
没有模块化处理的情况下，可能存在变量污染，具体请看basic(footer/banner/index)里面的实例。解决方案如下

## 模块化规范方案
 1. esm(ECMAscript module)规范,当下很推崇的一个方案，vite之所以能实现bundleless，完全依赖于这个概念。(浏览器的type='module')
  - 被使用的文件中，要抛出给外部使用的内容(函数、变量等)
  - 在使用的文件中，要引入外部给的内容，具体看basic(header/index)里面的实例
 2. 
 3. 


 ## 模块化规范主流方案和时间线
 1. commonjs
 2. cmd
 3. amd
 4. ems
 5. umd

### commonjs