import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/heartline/', // Updated to use heartline as the project name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
