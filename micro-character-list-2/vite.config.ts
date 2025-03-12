import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'micro-character-list-2',
      filename: 'remoteEntry.js',
      exposes: {
        './List': './src/pages/List.tsx',
      },
      shared: ['react', 'react-dom', 'react-i18next', 'i18next'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    cors: true,
    port: 3002,
  },
});