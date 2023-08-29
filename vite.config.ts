import { defineConfig } from 'vite'
import { VueTSPropsPlugin } from "vue-ts-props-plugin-vite";
import VueJsx from "@vitejs/plugin-vue-jsx";
import Inspect from 'vite-plugin-inspect'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Inspect(),
    VueTSPropsPlugin(),
    VueJsx()
  ]
})
