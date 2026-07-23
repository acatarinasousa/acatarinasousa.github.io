// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  vite: {
    base: basePath,
  },
  tanstackStart: {
    // Prerender all static routes so GitHub Pages serves plain HTML files.
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: false,
    },
  },
  // Disable the Cloudflare SSR/Nitro output; GitHub Pages only serves static files.
  nitro: false,
});
