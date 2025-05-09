import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'micro-character-list-1',
      filename: 'remoteEntry.js',
      exposes: {
        './List': './src/pages/List.tsx',
      },
      shared: ['react', 'react-dom', 'react-i18next', 'i18next'],
    }),
  ],
  build: {
    target: 'esnext',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    cors: true,
    port: 3001,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: ['verbose'],
    setupFiles: './src/setupTests.ts', 
  },
});