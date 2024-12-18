/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        orange: {
          300: "#FF9C66", // Hover button
          400: "#FF7A33",
          500: "#FF5900", // Main farve
          600: "#CC4700",
          700: "#993600",
        },
        green: {
          300: "#A2B96E",
          400: "#7F9849", // Hover button
          500: "#576832", // Main farve
          600: "#455328",
          700: "#343E1E",
        },
        white: "#FFFFFF",
        offwhite: "#F9F7F1",
        lightgrey: "#C4C4C4",
        darkgrey: "#686563",
        black: "#000000",
      },

      spacing: {
        xxs: "4px",
        xs: "16px",
        s: "22px",
        15: "15px", // Ny værdi
        3: "3px", // Ny værdi
        sm: "32px",
        m: "40px",
        ml: "48px",
        lg: "56px",
        xl: "64px",
        "2xl": "72px",
        "3xl": "80px",
        "4xl": "88px",
        "5xl": "96px",
        "6xl": "104px",
        "7xl": "112px",
        "8xl": "120px",
        "9xl": "128px",
      },

      borderRadius: {
        mobile: "8px",
        desktop: "16px",
        md: "12px",
        lg: "20px",
      },

      borderWidth: {
        thin: "1px",
        medium: "1.5px",
        thick: "2px",
        heavy: "4px",
      },

      fontFamily: {
        caslon: ["adobe-caslon-pro", "serif"],
        opensans: ["open-sans", "sans-serif"],
      },

      fontSize: {
        display: ["48px", { lineHeight: "62px" }], // Mobile
        "display-lg": ["96px", { lineHeight: "110px" }], // Desktop

        headline1: ["32px", { lineHeight: "auto" }], // Mobile
        "headline1-lg": ["64px", { lineHeight: "60px" }], // Desktop

        headline2: ["24px", { lineHeight: "auto" }], // Mobile
        "headline2-lg": ["32px", { lineHeight: "auto" }], // Desktop

        headline3: ["16px", { lineHeight: "auto" }], // Mobile
        "headline3-lg": ["20px", { lineHeight: "auto" }], // Desktop

        body: ["14px", { lineHeight: "auto" }], // Mobile
        "body-lg": ["16px", { lineHeight: "auto" }], // Desktop
      },

      fontWeight: {
        regular: "400",
        semibold: "600",
        bold: "700",
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
