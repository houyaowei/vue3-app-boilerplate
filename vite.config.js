import { fileURLToPath, URL } from "url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import VitePluginAssociation from "./src/plugins/vite/vite-plugin-association";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default ({ mode }) => {
  // console.log("mode:", mode)
  const env=loadEnv(mode, process.cwd());

  return defineConfig({
    base: env.VITE_APP_BASE_URL,
    plugins: [vue(), vueJsx(), viteCommonjs(),VitePluginAssociation(),visualizer()],
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "./src/assets/style/base.less";',
        },
      },
    },
    resolve: {
      extensions: [".mjs", ".js", ".jsx", ".json", ".vue"],
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      port: 3000,
      host: "0.0.0.0",
      open: true,
      proxy: {
        "^/api": {
          target: "http://zhide-qasd.zzfund.com",   //测试环境
          changeOrigin: true,
        },
      },
    },
  });
}
