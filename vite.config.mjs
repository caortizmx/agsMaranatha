// vite.config.mjs
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const base = process.env.VITE_PUBLIC_BASE_PATH || '/'

export default defineConfig({
  plugins: [vue()],
  base,
  server: {
    port: 5173
  }
})
