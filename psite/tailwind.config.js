/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        typing: "typing 2s steps(18) infinite alternate, blink 1s infinite",
        blink: "blink 1s infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
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
