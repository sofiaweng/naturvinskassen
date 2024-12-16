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
        offwhite: "#F2F2F2",
        lightgrey: "#C4C4C4",
        darkgrey: "#686563",
        black: "#000000",
      },

      spacing: {
        xxs: "4px",
        "-3": "-3px",   // Ny værdi
        xs: "16px",
        s: "22px",
        "15": "15px", // Ny værdi
        "3": "3px",   // Ny værdi
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
        display: ["96px", { lineHeight: "auto" }],
        headline1: ["64px", { lineHeight: "auto" }],
        headline2: ["40px", { lineHeight: "auto" }],
        headline3: ["20px", { lineHeight: "auto" }],
        body: ["16px", { lineHeight: "auto" }],

        /* MOBILE FONT STØRRELSER */
        sm: {
          display: ["48px", { lineHeight: "auto" }],
          headline1: ["32px", { lineHeight: "auto" }],
          headline2: ["24px", { lineHeight: "auto" }],
          headline3: ["20px", { lineHeight: "auto" }],
          body: ["14px", { lineHeight: "auto" }],
        },
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
