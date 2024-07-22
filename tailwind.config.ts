import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "hsl(var(--color-primary))",
      },
      fontFamily: {
        sans: ["var(--font-sans-dm)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-serif-cardo)", ...defaultTheme.fontFamily.serif],
      },
      transitionDuration: {
        "2000": "2000ms",
        "5000": "5000ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
