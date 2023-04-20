/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ClashDiplay-Regular", ...defaultTheme.fontFamily.sans],
      },
      color: {
        tomato: "#E50914",
        marigold: "#ffbe0b",
      },
    },
  },
  plugins: [],
};
