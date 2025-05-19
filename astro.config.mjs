import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import compress from "astro-compress";
import partytown from "@astrojs/partytown";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://bautistaonorato.vercel.app/",
  output: "server",
  adapter: vercel(),
  integrations: [tailwind(), react(), compress(), partytown({ config: { forward: ["dataLayer.push"] } })],
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
});
