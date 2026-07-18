import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/section-wars/',
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 5173,
    strictPort: false,
  },
})
