# vite 基础进阶与原理

## 基础使用与原理

parcel对比，零配置，vite更倾向于零配置


### 入口
vite第一性，强调默许开发者是web开发，所以将index.html中的`type = 'module' src='xxx'`的文件作为入口

### 编译（模块解析）
vite在开发环境使用的是esbuild进行构建，所以很多编译工作都比较快，而且esbuild（go）都是支持原生的

1. 比如针对js、ts的处理，vite就直接用esbuild进行处理

2. 比如针对样式文件，vite单独使用postcss进行处理

按照需要的去编译，并且会将编译的结果缓存


### 另外的一些配置
1. 功能增强 plugin配置
2. 模块解析 resolve配置
3. 构建服务（本地开发） server配置
4. 样式处理 css配置
5. vite环境变量 define配置
6. 产物构建 build、esbuild配置