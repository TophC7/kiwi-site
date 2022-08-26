/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        kiwi: {
          50: "#FCFFF5",
          100: "#FAFFEB",
          200: "#F3FFD1",
          300: "#EDFFBD",
          400: "#E8FFA8",
          500: "#E2FF92",
          600: "#CDFF42",
          700: "#B0F000",
          800: "#749E00",
          900: "#3C5200",
        },
        kiwiSky: {
          50: "#F5FCFF",
          100: "#EBFAFF",
          200: "#D1F3FF",
          300: "#BDEDFF",
          400: "#A8E8FF",
          500: "#92E2FF",
          600: "#42CDFF",
          700: "#00B0F0",
          800: "#00749E",
          900: "#003C52",
        },
        kiwiCotton: {
          50: "#FFF5FC",
          100: "#FFEBFA",
          200: "#FFD1F3",
          300: "#FFBDED",
          400: "#FFA8E8",
          500: "#FF92E2",
          600: "#FF42CD",
          700: "#F000B0",
          800: "#9E0074",
          900: "#52003C",
        },
      },
    },
  },
  plugins: [],
};
