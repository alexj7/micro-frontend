import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        'micro-character-list-1': 'http://localhost:3001/assets/remoteEntry.js',
        'micro-character-list-2': 'http://localhost:3002/assets/remoteEntry.js',
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
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: ['verbose'],
    setupFiles: './src/setupTests.ts',
  },
});