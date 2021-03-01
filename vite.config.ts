/*
 * @Author: your name
 * @Date: 2021-03-01 09:37:23
 * @LastEditTime: 2021-03-01 09:41:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:"./",//打包路径
  resolve: {
    alias:{
      '@': path.resolve(__dirname, './src')//设置别名
    }
  },
  server: {
    port:4000,//启动端口
    open: true,
    proxy: {
      // 选项写法
      '/api': 'http://123.56.85.24:5000'//代理网址
    },
    cors:true
  }

})
