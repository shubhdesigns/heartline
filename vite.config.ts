import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
          charts: ['chart.js', 'react-chartjs-2']
        }
      }
    }
  },
  server: {
    port: 3000,
    host: true
  },
  optimizeDeps: {
    include: ['chart.js', 'react-chartjs-2']
  }
});
