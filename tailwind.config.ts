import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        milk: "#F9F8F6",
        orange: "#FF8541",
        grey: "#8D8C8B",
        stone: "#555351",
        blackberry: "#1C1917",
      },
    },
  },
  plugins: [],
} satisfies Config;
