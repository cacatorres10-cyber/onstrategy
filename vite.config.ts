import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// base is set to relative so the build works on GitHub Pages project subpaths.
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
