import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
  spacing:{
 'custom-1':'550px',
 'custom-2':'250px',
 'custom-3':'630px',
 'custom-4':'60px',
 'custom-5':'600px',
 'custom-6':'900px',
  }
 
    },
  },
  plugins: [],
};
export default config;
