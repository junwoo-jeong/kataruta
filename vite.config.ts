import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import { VitePWA } from 'vite-plugin-pwa';
import { join } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@/': join(__dirname, 'src'),
    },
  },
  plugins: [
    tsconfigPaths(),
    react(),
    eslintPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png', 'robots.txt'],
      // Manifest: {
      //   Theme_color: '#BD34FE',
      //   Icons: [
      //     {
      //       Src: '/android-chrome-192x192.png',
      //       Sizes: '192x192',
      //       Type: 'image/png',
      //       Purpose: 'any maskable',
      //     },
      //     {
      //       Src: '/android-chrome-512x512.png',
      //       Sizes: '512x512',
      //       Type: 'image/png',
      //     },
      //   ],
      // },
    }),
  ],
  build: {
    // https://ja.vitejs.dev/config/#build-sourcemap
    sourcemap: true,
  },
});
