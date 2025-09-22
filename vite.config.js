/* eslint-env node */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    base: env.VITE_APP_BASE_URL || '/react_sample/',
    build: {
      outDir: 'dist',
      assetsDir: 'assets'
    },
    define: {
      __APP_TITLE__: JSON.stringify(env.VITE_APP_TITLE || 'React App')
    }
  }
})
