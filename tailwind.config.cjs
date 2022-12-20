// @type {import('tailwindcss').Config}

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#798C71",
      },
    },

    fontFamily: {
      DM: ["'DM Serif Display'", "serif"],
      DM_sans: ["'DM Sans'", "sans-serif"],
    },
  },
  plugins: [],
};
