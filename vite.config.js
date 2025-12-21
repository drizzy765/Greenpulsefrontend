import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'fs', // Exclude file system module
        'path', // Exclude path module
        'os', // Exclude os module
      ],
    },
  },
})
