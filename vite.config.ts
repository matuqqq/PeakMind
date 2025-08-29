import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Netlify = raíz
  optimizeDeps: { exclude: ['lucide-react'] },
  
})
