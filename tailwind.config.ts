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
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-noto)', 'Noto Sans TC', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#993333',
          dark: '#7a2929',
          light: '#ff9999',
        },
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
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};

export default config;
