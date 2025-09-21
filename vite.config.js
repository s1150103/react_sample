import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react_sample/', // GitHub Pages用のベースパス設定
  build: {
    outDir: 'dist', // ビルド出力ディレクトリ
    assetsDir: 'assets' // アセットディレクトリ
  }
})
