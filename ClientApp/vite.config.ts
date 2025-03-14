import { fileURLToPath, URL } from 'node:url';
import { defineConfig, normalizePath, Plugin, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import mkcert from 'vite-plugin-mkcert';
import { dirname, resolve } from 'path';
import Inspect from 'vite-plugin-inspect';
import fg from 'fast-glob';

import appsettingsDev from '../appsettings.Development.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Inspect({ build: true, outputDir: '.vite-inspect' }), vue(), mkcert(), AutoEndpoints()],
  base: '/vite-client/',
  server: {
    port: appsettingsDev.Vite.Server.Port,
    strictPort: true,
    hmr: {
      clientPort: appsettingsDev.Vite.Server.Port,
    },
  },
  build: {
    outDir: '../wwwroot/vite-client',
    emptyOutDir: true,
    manifest: true,
    cssCodeSplit: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});

// This plugin will find all files matching the pattern src/pages/*/App.vue
//  and make endpoints with the 'name' being the replacement for the *. and the
//  path being src/pages/*/main.ts - then return a template for the main.ts file
function AutoEndpoints(): Plugin {
  const main = `import 'vite/modulepreload-polyfill'
import '@/assets/main.css'

import { createApp } from 'vue'
import App from '{app}'

createApp(App).mount('#app')
`;

  return {
    name: 'auto-endpoints',
    async config(): Promise<UserConfig> {
      const root = 'src/pages/';
      const pattern = root + '*/App.vue';
      const length = root.length;
      const dirs = (await fg.glob(pattern)).map((p) => dirname(p).substring(length));
      console.log(dirs.join(','));

      const input = dirs.reduce((obj, item) => {
        const value = resolve(__dirname, root + item + '/main.ts');
        obj[item] = value;
        return obj;
      }, {} as any);

      return {
        build: {
          cssCodeSplit: true, // make the default explicit
          rollupOptions: {
            input: input,
          },
        },
      };
    },
    resolveId(id: string): null | string {
      return id.endsWith('main.ts') ? id : null;
    },
    load(id: string): null | string {
      if (!id.endsWith('main.ts')) return null;

      id = normalizePath(id);
      const app = id.replace(/.*\/src\//, '@/').replace('main.ts', 'App.vue');
      return main.replace('{app}', app);
    },
  };
}
