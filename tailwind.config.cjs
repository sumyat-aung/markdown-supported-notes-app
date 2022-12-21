// @type {import('tailwindcss').Config}

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ora: "#F0A180",
        darkOra: "#AB3814",
        ora2: "#ED7E4F",
      },
    },

    fontFamily: {
      DM: ["'DM Serif Display'", "serif"],
      DM_sans: ["'DM Sans'", "sans-serif"],
      Alge: ["'Alegreya'", "serif"],
      roboto: ["'Roboto Mono'", "monospace"],
    },
  },
  plugins: [],
};
