import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3015,
    host: true
  },
  build: {
    rollupOptions: {
      input: 'index.html'
    }
  }
})
