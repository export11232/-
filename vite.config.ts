import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // 加载环境变量
    const env = loadEnv(mode, process.cwd(), '');

    return {
      // 【关键修复1】设置为根路径，解决 Netlify 部署后的 404 白屏问题
      base: '/',

      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      
      // 【关键修复2】让代码能同时识别 VITE_ 开头和不带 VITE_ 的环境变量
      // 这样你在 Netlify 设置里填 VITE_GEMINI_API_KEY 也能生效
      define: {
        'process.env.API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY || env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY || env.GEMINI_API_KEY)
      },
      
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});