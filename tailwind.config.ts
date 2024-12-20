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
        orange2: "#FF5C01",
        grey: "#8D8C8B",
        stone: "#555351",
        blackberry: "#1C1917",
        borderGrey: "#C6C5C5",
      },
      backgroundImage: {
        gradient1: "linear-gradient(135.6deg, #FF3605 -6.48%, #7A00F9 105.85%)",
        gradient2: "linear-gradient(135.6deg, #7656F9 -6.48%, #D9D9FF 105.85%)",
        gradient3: "linear-gradient(135.6deg, #3C1286 -6.48%, #AA2BD9 105.85%)",
        gradient4: "linear-gradient(135.6deg, #EF5E6A -6.48%, #DEC222 105.85%)",
        gradient5: "linear-gradient(135.6deg, #028484 -6.48%, #03E8D1 105.85%)",
      },
      fontSize: {
        "20": "20px",
        "40": "40px",
      },
      fontFamily: {
        sfpro: ["var(--font-sfpro)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
