import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { visualizer } from 'rollup-plugin-visualizer';
import { resolve } from 'path';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/tests/**/*.test.{js,jsx,ts,tsx}'],
    exclude: ['node_modules', 'dist', '**/node_modules/*'],
  },
});
