/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      pink: "#d67b91",
      lightpink: "#e1b7c3",
      teal: "#7DCACA",
      white: "#EDEDED",
      lightgrey: "#d9d9d9",
      grey: "#bab5b6",
      black: "#1e1e1e",
    },
    letterSpacing: {
      tightest: "-.075em",
      tighterer: "-.045em",
    },
    extend: {
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
        helveticabold: ["HelveticaBold", "sans-serif"],
        eb: ["TimesRoman", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
