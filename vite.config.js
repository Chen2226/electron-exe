import { defineConfig } from 'vite'
const { fileURLToPath, URL } = require('url');
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),
        electron({
            // 主进程入口文件
            entry: 'src/electron-main.js'
        })
    ],
    server: {
        port: 9999
    },
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})