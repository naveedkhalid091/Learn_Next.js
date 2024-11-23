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
        lama: "#F35C7A",
        primary: "#046307",
        neutral: "#8D8D88D",
        secondry: "#FFD700",
        Accent: "#FFFDD0",
        myFont: "#013220",
      },
    },
  },
  plugins: [],
} satisfies Config;
