import { defineConfig } from "vite"
// 优化react，比如做什么热更新之类的
import react from '@vitejs/plugin-react'
// 自定义插件，将端口号改成2345
import portPlugin from './plugins/portPlugin.js'
import transformPlugin from './plugins/transformPlugin.js'

export default defineConfig({
    plugins: [react(),portPlugin(),transformPlugin()],
    resolve: {
        alias: {
            "@": "/src"
        }
    },
    // 服务
    server: {
        port: 2000,
        // open: true,
        proxy:{

        }
    },
    build:{
        /** 浏览器兼容性 */
        target: 'es2015',
        /** 模块预加载 polyfill是否自动注入，默认是 */
        modulePreload: {
            polyfill: true,
        },
        /** 指定输出路径 */
        outDir:'output',

        /** 指定生成静态资源的存放路径（相对于 build.outDir） */
        assetsDir: 'dist/'
    }
})