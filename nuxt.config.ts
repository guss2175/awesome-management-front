// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  imports: {
    dirs: ["composables", "composables/**"],
  },
  sourcemap: {
    server: true,
    client: true,
  },
  modules: ["@nuxtjs/tailwindcss"],
});
