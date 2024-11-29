import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minWidth: {
        'cards-1': '143px',
        'cards-2': '222px',
        'cards-3': '301px',
        'cards-4': '380px',
        'cards-5': '459px',
        'cards-6': '538px',
        'cards-7': '617px',
        'cards-8': '696px',
        'cards-9': '775px',
        'cards-10': '854px',
        'cards-11': '933px',
        'cards-12': '1012px',
        'cards-13': '1091px',
        'cards-14': '1170px',
      },
      minHeight: {
        'card': '200px',
      },
      width: {
        'card': '143px',
        'mat': '600px',
      },
      height: {
        'card': '200px',
        'mat': '392px',
      },
    },
  },
  plugins: [],
};
export default config;
