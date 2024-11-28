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
        'cards-1': '133px',
        'cards-2': '206px',
        'cards-3': '269px',
        'cards-4': '332px',
        'cards-5': '395px',
        'cards-6': '458px',
        'cards-7': '521px',
        'cards-8': '584px',
        'cards-9': '647px',
        'cards-10': '710px',
        'cards-11': '773px',
        'cards-12': '836px',
        'cards-13': '899px',
        'cards-14': '962px',
      },
      minHeight: {
        'card': '200px',
      },
      width: {
        'mat': '600px',
      },
      height: {
        'mat': '392px',
      },
    },
  },
  plugins: [],
};
export default config;
