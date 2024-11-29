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
        'cards-2': '215px',
        'cards-3': '287px',
        'cards-4': '359px',
        'cards-5': '431px',
        'cards-6': '503px',
        'cards-7': '575px',
        'cards-8': '647px',
        'cards-9': '719px',
        'cards-10': '791px',
        'cards-11': '863px',
        'cards-12': '935px',
        'cards-13': '1007px',
        'cards-14': '1079px',
      },
      minHeight: {
        'card': '200px',
      },
      width: {
        'mat': '600px',
        'card': '143px',
        'card-1/2': '71px',
        'action': '127px',
      },
      height: {
        'mat': '392px',
        'card': '200px',
        'card-1/2': '100px',
        'action': '78px',
      },
      margin: {
        'card-1/2': '71px',
      },
      spacing: {
        'card-h-1/2': '100px',
        'card-w-1/2': '71px',
      }
    },
  },
  plugins: [],
};
export default config;
