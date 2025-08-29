import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  base: '/', // Netlify = raíz
  optimizeDeps: { exclude: ['lucide-react'] },
   resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
})
