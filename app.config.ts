import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import relay from "vite-plugin-relay";

export default defineConfig({
  ssr: true,

  server: {
    // preset: "cloudflare-pages",
    rollupConfig: {
      external: ["node:async_hooks"],
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["solid-devtools", "@solid-devtools/*"],
      include: ["relay-runtime"],
    },
    ssr: {
      noExternal: [
        "@kobalte/core",
        /^relay-runtime(?:\/|$)/,
        /^solid-js(?:\/|$)/,
        /^solid-relay(?:\/|$)/,
      ],
      optimizeDeps: {
        include: ["relay-runtime", "relay-runtime/experimental"],
      },
    },
    plugins: [relay, tailwindcss()],
  },
});
