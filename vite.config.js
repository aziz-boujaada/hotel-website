import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'/hotel-website/',
  plugins: [react()],
  server :{
    proxy:{
      '/book_room': 'http://localhost',
    }
  }
})
