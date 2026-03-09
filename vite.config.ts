import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: './',

  plugins: [react()],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,

    rollupOptions: {
      input: {
        content: resolve(__dirname, 'src/content.tsx'),
        popup: resolve(__dirname, 'popup/popup.html'),
      },

      output: {
        entryFileNames: 'js/[name].js',
        assetFileNames: 'css/[name][extname]',
      },
    },
  },
});
