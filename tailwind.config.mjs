/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      "xs": "450px",
      "sm": "726px",
      "tablet": "1168px"
    }
  },
  plugins: [],
};
