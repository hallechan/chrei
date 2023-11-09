/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
        },
      },
    },
    fontFamily: {
      reg: ["CodecPro", "sans-serif"],
      bold: ["CodecProBold", "sans-serif"],
      italic: ["CodecProItalic", "sans-serif"],
      cursive: ["Halimum", "sans-serif"],
    },
  },
  darkMode: "class",
  plugins: [require("tailwindcss-animated")],
};
