import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "base-100": "#ffffff",
        "base-200": "#f8f9fa",
        "base-content": "#000000",
      },
      spacing: {
        section: "4rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "base-100": "#ffffff",
          "base-200": "#f8f9fa",
          "base-content": "#000000",
          primary: "#1d4ed8",
          "primary-content": "#ffffff",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "base-100": "#1f2937",
          "base-200": "#111827",
          "base-content": "#ffffff",
          primary: "#3b82f6",
          "primary-content": "#ffffff",
        },
      },
    ],
  },
};

export default config;
