import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      federation({
        name: 'host-app',
        remotes: {
          'micro-character-list-1': `${env.VITE_MICRO_1_URL}/assets/remoteEntry.js`,
          'micro-character-list-2': `${env.VITE_MICRO_2_URL}/assets/remoteEntry.js`,
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
    }
  }
});