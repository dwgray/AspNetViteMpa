import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'
// @ts-ignore
import appsettingsDev from '../appsettings.Development.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mkcert()],
  base: '/vite-client/',
  server: {
    port: appsettingsDev.Vite.Server.Port,
    https: true,
    strictPort: true,
    hmr: {
      clientPort: appsettingsDev.Vite.Server.Port
    }
  },
  build: {
    outDir: '../wwwroot/vite-client',
    emptyOutDir: true,
    manifest: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
