import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'main.html'),
      },
    },
  },
  server: {
    open: '/main.html'
  }
})