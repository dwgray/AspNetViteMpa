import { fileURLToPath, URL } from 'node:url'
import { defineConfig, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'
import { dirname, resolve } from 'path'
import Inspect from 'vite-plugin-inspect'
import fg from 'fast-glob'

// @ts-ignore
import appsettingsDev from '../appsettings.Development.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Inspect({ build: true, outputDir: '.vite-inspect' }), vue(), mkcert(), AutoEndpoints()],
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
    manifest: true,
    cssCodeSplit: false
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

function AutoEndpoints() {
  return {
    name: 'auto-endpoints',
    config(): UserConfig {
      const root = 'src/pages/'
      const pattern = root + '*/main.ts'
      const length = root.length
      const dirs = fg.globSync(pattern).map((p) => dirname(p).substring(length))
      console.log(dirs.join(','))

      const input = dirs.reduce((obj, item) => {
        const value = resolve(__dirname, root + item + '/main.ts')
        obj[item] = value
        return obj
      }, {} as any)

      return {
        build: {
          rollupOptions: {
            input: input
          }
        }
      }
    }
  }
}
