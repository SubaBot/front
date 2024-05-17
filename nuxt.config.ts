import { isDevelopment } from "std-env";

export default defineNuxtConfig({
  app: {
    keepalive: true,
    head: {
      charset: "utf-8",
      viewport: "width=device-width,initial-scale=1",
      title: "Suba",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Suba + Gravitalia" },
        { property: "og:title", content: "Suba + Gravitalia" },
        { property: "og:image", content: "/favicon.webp" },
        {
          name: "og:description",
          content:
            "Gravitalia official application to manage OAuth and security across services and softwares.",
        },
        { name: "theme-color", content: "#8b5cf6" },
        { name: "robots", content: "index, follow" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: "@gravitalianews" },
        {
          name: "description",
          content:
            "Gravitalia official application to manage OAuth and security across services and softwares.",
        },
      ],
      bodyAttrs: {
        class: "dark:bg-zinc-900 dark:text-white font-sans",
      },
    },
  },

  ssr: true,
  components: true,
  sourcemap: isDevelopment,

  modules: [
    "@unocss/nuxt",
    "@nuxt/image",
    [
      "@nuxtjs/color-mode",
      {
        preference: "system",
        fallback: "light",
        hid: "color-script",
        globalName: "__NUXT_COLOR_MODE__",
        componentName: "ColorScheme",
        classPrefix: "",
        classSuffix: "",
        storageKey: "mode",
      },
    ],
  ],

  devtools: { enabled: true },
  runtimeConfig: {
    email: "support@gravitalia.com",
  },

  routeRules: {
    // No JS.
    "/": { experimentalNoScripts: true },
  },

  nitro: {
    preset: "cloudflare_pages",
  },

  experimental: {
    headNext: true,
    payloadExtraction: false,
    renderJsonPayloads: true,
  },
});