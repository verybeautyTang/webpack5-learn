# webpack5

## 基础

### 入口 entry

- 单入口
- 多入口
- 对象形式

### 输出 output

- 输出位置 path
- 输出文件名 filename
- 是否支持 es5 环境 environment （低版本浏览器输出）https://webpack.js.org/configuration/output/#outputenvironment
- devtool 代码映射，打包后的代码是否可以直接在浏览器上映射出来

为了让浏览器每次应用发布之后，第一次不走缓存，会将打包好的文件名，加上 hash

### 模块解析 modules
针对不同的类型文件，做转换处理
- js --> babel-loader
- ts --> row-loader
- css --> css-loader | style.loader
- file --> row-loader
- font --> row-loader
- image --> row-loader | url-loader
(这里也是为什么webpack不吃香的原因，很麻烦，每个不同类型的文件都需要loader去处理)



### 插件
- html插件