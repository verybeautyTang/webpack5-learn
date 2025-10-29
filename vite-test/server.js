/** express */
const express = require('express')
const fs = require('fs')
const esbuild = require('esbuild')

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
})


app.get(/\.js$/, (req, res) => {
    const path = req.path;
    const file = fs.readFileSync(__dirname + "/src" + path, 'utf-8');
    res.type('js'); 
    
    res.end(`resolveCss(${JSON.stringify(file)})`)
})


// postcssPlugin
app.get(/\.css$/, (req, res) => {
    const path = req.path;
    const file = fs.readFileSync(__dirname + "/src" + path, 'utf-8');
    // res.type('css');
    // 返回了，但是没有处理
    res.end(file)
})

// 插件化机制
//esbuild plugin
app.get(/\.ts/, async (req, res) => {
    const path = req.path;
    const file = fs.readFileSync(__dirname + "/src" + path, 'utf-8');
    const transformResult = await esbuild.transform(file, {
        loader: 'ts',
        format: 'esm',
        target: 'es6'
    })
    // 设置正确的头部
    res.type('js');
    res.end(transformResult.code)
})

app.listen(port, () => {
    console.log(`已经跑在了： http://localhost:${port}`)
})