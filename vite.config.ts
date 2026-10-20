import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' makes the build work on GitHub Pages and when opened from any folder
export default defineConfig({
  plugins: [react()],
  base: './',
});
