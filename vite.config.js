import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/firebase-storage-api': {
        target: 'https://firebasestorage.googleapis.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/firebase-storage-api/, '/v0/b/chat-app-1f474.appspot.com/o'),
      },
    }
  },
  plugins: [react()],
})
