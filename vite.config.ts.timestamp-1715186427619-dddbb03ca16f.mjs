// vite.config.ts
import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy
} from "file:///C:/Users/USER/Desktop/%D0%BA%D0%BE%D0%B4%D1%8B/homework/codecademy/my-portfolio/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///C:/Users/USER/Desktop/%D0%BA%D0%BE%D0%B4%D1%8B/homework/codecademy/my-portfolio/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///C:/Users/USER/Desktop/%D0%BA%D0%BE%D0%B4%D1%8B/homework/codecademy/my-portfolio/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [remixCloudflareDevProxy(), remix(), tsconfigPaths()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVU0VSXFxcXERlc2t0b3BcXFxcXHUwNDNBXHUwNDNFXHUwNDM0XHUwNDRCXFxcXGhvbWV3b3JrXFxcXGNvZGVjYWRlbXlcXFxcbXktcG9ydGZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVU0VSXFxcXERlc2t0b3BcXFxcXHUwNDNBXHUwNDNFXHUwNDM0XHUwNDRCXFxcXGhvbWV3b3JrXFxcXGNvZGVjYWRlbXlcXFxcbXktcG9ydGZvbGlvXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9VU0VSL0Rlc2t0b3AvJUQwJUJBJUQwJUJFJUQwJUI0JUQxJThCL2hvbWV3b3JrL2NvZGVjYWRlbXkvbXktcG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtcbiAgdml0ZVBsdWdpbiBhcyByZW1peCxcbiAgY2xvdWRmbGFyZURldlByb3h5Vml0ZVBsdWdpbiBhcyByZW1peENsb3VkZmxhcmVEZXZQcm94eSxcbn0gZnJvbSBcIkByZW1peC1ydW4vZGV2XCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlbWl4Q2xvdWRmbGFyZURldlByb3h5KCksIHJlbWl4KCksIHRzY29uZmlnUGF0aHMoKV0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVk7QUFBQSxFQUNyWSxjQUFjO0FBQUEsRUFDZCxnQ0FBZ0M7QUFBQSxPQUMzQjtBQUNQLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sbUJBQW1CO0FBRTFCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLEdBQUcsY0FBYyxDQUFDO0FBQy9ELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
