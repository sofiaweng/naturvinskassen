/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */
  theme: {
    extend: {
      colors: {
        orange: {
          300: "#FF9C66", //antal abonnement cirkel //hover button
          400: "#FF7A33",
          500: "#FF5900", // Main farve
          600: "#CC4700",
          700: "#993600",
        },
        green: {
          300: "#F9FE8A",
          400: "#F7FE67", //hover button
          500: "#F3FE40", // Main farve
          600: "#F1FE01",
          700: "#B2BC01",
        },
        white: "#FFFFF",
        offwhite: "#F2F2F2",
        lightgrey: "#C4C4C4",
        darkgrey: "#686563",
        black: "#00000",
      },
      spacing: {
        xxs: "8px",
        xs: "16px",
        s: "24px",
        sm: "32px",
        m: "40px",
        ml: "48px",
        lg: "64px",
        xl: "80px",
        "2xl": "96px",
        "3xl": "112px",
      },
      fontFamily: {
        caslon: ["adobe-caslon-pro", "serif"],
        opensans: ["open-sans", "sans-serif"],
      },
      fontSize: {
        base: ["16px", { lineHeight: "auto" }],
        headline3: ["64px", { lineHeight: "auto" }],
        headline2: ["40px", { lineHeight: "42px" }],
        headline1: ["55px", { lineHeight: "auto" }],
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
