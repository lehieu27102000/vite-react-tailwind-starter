import { defineConfig } from 'vite'
import { resolve } from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
function pathResolve(dir: string) {
    return resolve(process.cwd(), '.', dir)
  }
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: pathResolve('resources/js') + '/',
      },
      {
        find: /\/#\//,
        replacement: pathResolve('resources/types') + '/',
      },
    ],
  },
})
