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
        'cards-1': '37px',
        'cards-2': '110px',
        'cards-3': '173px',
        'cards-4': '236px',
        'cards-5': '299px',
        'cards-6': '362px',
        'cards-7': '425px',
        'cards-8': '488px',
        'cards-9': '551px',
        'cards-10': '614px',
        'cards-11': '677px',
        'cards-12': '740px',
        'cards-13': '803px',
        'cards-14': '866px',
      },
      minHeight: {
        'card': '200px',
      },
    },
  },
  plugins: [],
};
export default config;
