/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: `#111111`,
        milkwhite:`#FFFFFF`,
        dark: `#000000`,
        purple:`#7501D1`,
        lightpurple:`#a855f7`,
        softblue:`#618ADC`,
        Iridium:`#3A3A3A`,
        oslogrey:`#848895`
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'clash-grotesk': ['Clash Grotesk', 'sans-serif']
      },
    },
  },
  plugins: [],
};
