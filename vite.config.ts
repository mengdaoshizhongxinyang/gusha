import { swc } from "rollup-plugin-swc3";
import { defineConfig } from 'vite'
import { VueTSPropsPlugin } from "vue-ts-props-plugin-vite";
import VueJsx from "@vitejs/plugin-vue-jsx";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueTSPropsPlugin(),
    VueJsx(),
    swc({
      include: /\.[mc]?[jt]sx?$/,
      exclude: /node_modules/,
      tsconfig: 'tsconfig.json',
      jsc: {
        baseUrl:"/",
        parser: {
          "syntax": "ecmascript",
          "jsx": true
        },
        experimental: {
          plugins: []
        }
      }
    })]

    
})
