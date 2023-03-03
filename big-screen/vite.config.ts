
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from "postcss-pxtorem";
import { defineConfig, loadEnv } from 'vite'
import {resolve}  from "path";
import proxy from './config/proxy'
import config from './config/config'

export default (({ mode }) => {
    const VITE_BASE_VIEW_PORT  = loadEnv(mode, process.cwd()).VITE_BASE_VIEW_PORT;
    return  defineConfig({
      plugins: [vue()],
      css: {
        postcss: {
          plugins: [
            postCssPxToRem({
              rootValue:Number(VITE_BASE_VIEW_PORT)/10, // （设计稿/10）1rem的大小
              propList: ["*", "!border"], // 除 border 外所有px 转 rem
              minPixelValue: 1,
            })
          ]
        }
      },
      server: {
        port: 10002,
        ...proxy
      },
      resolve: {
        alias: {
          '@': resolve(__dirname, "src")
        }
      },
      ...config
    })
})



