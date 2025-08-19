import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    data: {
      paddingtop: "paddingtop='true'",
      wrapsblogpost: "wrapsblogpost='true'",
      iscurrentpage: "iscurrentpage='true'",
    },
  },
};
