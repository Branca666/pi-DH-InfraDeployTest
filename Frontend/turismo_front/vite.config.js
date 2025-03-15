import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  css: {
    preprocessorOptions: {
      scss: {
        charset: false
      }
    }
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg'],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    strictPort: true,
    cors: true,
    preview: {
      allowedHosts: ['pi-dh-infradeploytest-production.up.railway.app'],
    },
  },
})
