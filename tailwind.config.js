/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      darkBlue: "#141E46",
      darkRed: "#BB2525",
      light: "#FFF5E0",
      lightRed: "#FF6969",
    },
  },
  plugins: [],
};
