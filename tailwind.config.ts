import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "turquoise-50": "#f1f9fa",
        "turquoise-100": "#dcf1f1",
        "turquoise-200": "#bce2e5",
        "turquoise-300": "#7fc5cc",
        "turquoise-400": "#59adb7",
        "turquoise-500": "#3d919d",
        "turquoise-600": "#357785",
        "turquoise-700": "#31626d",
        "turquoise-800": "#2f525b",
        "turquoise-900": "#2b464e",
        "turquoise-950": "#182d34",
        "pinklet-50": "#fef2f3",
        "pinklet-100": "#ffe1e4",
        "pinklet-200": "#ffc0c6",
        "pinklet-300": "#fea3ac",
        "pinklet-400": "#fb6e7b",
        "pinklet-500": "#f24152",
        "pinklet-600": "#e02234",
        "pinklet-700": "#bc1929",
        "pinklet-800": "#9b1925",
        "pinklet-900": "#811b25",
        "pinklet-950": "#46090f",
      },
      scale: {
        "100": "1",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("preline/plugin"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;
