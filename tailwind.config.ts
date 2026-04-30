import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#B30033", dark: "#5A0028", light: "#E8003F" },
        gold: { DEFAULT: "#FFB627", light: "#FFA000" },
        surface: {
          DEFAULT: "#1A0014",
          light: "#22001A",
          card: "#1C0017",
        },
        bgDark: "#0A0008",
      },
      animation: {
        "ribbon-slide": "ribbon-slide 34s linear infinite",
        "slow-rotate": "spin 3.4s linear infinite",
      },
      keyframes: {
        "ribbon-slide": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
