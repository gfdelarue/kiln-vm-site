import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://kiln-vm.com",
  trailingSlash: "always",
  compressHTML: false,
  server: { port: 4331 },
  devToolbar: { enabled: false },
});
