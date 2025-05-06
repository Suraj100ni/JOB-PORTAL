// filepath: c:\Users\Designer\Downloads\jobportal\backend\vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'index.js', // Correct entry point
    },
  },
});