import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "./", // 👈 ye line add karo zaroori hai!
  plugins: [react(), tailwindcss()],
})
