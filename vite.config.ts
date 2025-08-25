import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/PeakMind/',           // 👈 case-sensitive + barra final
  plugins: [react()],
  optimizeDeps: { exclude: ['lucide-react'] },
})
