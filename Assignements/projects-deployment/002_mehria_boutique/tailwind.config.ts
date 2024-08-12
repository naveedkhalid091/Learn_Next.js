import { Edu_VIC_WA_NT_Beginner } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        deepNavy:'#002B5B',
        softGold: '#F2C77B',
        cream: '#F5F5F5',
        charcoal: '#333333',
      },
      
        fontFamily:{
          'edu-vic':['Edu VIC WA NT Beginner', 'cursive'],
      }

      ,backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
