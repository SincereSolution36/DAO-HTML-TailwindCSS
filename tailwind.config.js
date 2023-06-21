/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js,css}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
      },
    },
    screens: {
      sm: "576px",
      md: "876px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      xxxl: "1600px",
    },
    extend: {
      colors: {
        "white": {
          0: "#ffffff",
          400: "#29292f",
          500: "#5e5e63",
          600: "#8a8a91",
          700: "#a2a2a6",
          800: "#d2d2d3"
        },
        "black": {
          0: "#111118",
          200: "#323237",
          300: "#29292f",
          400: "#222226",
          500: "#1d1d22",
          600: "#1b1b21",
          700: "#16161c",
          800: "#111118",
          900: "#0e0e14"
        },
        "green": {
          500: "#4a9a7d",
          800: "#254d3e"
        },
        "red": {
          500: "#af5067"
        },
        purple: "#cdadef"
      },
      fontSize: {
        '2xs': ".625rem",
        'xs': ".75rem",
        'sm': ".875rem",
        'lg': "1.125rem",
        'xl': "1.25rem",
        '2xl': "1.375rem",
        '3xl': "1.625rem"
      },
    },
    fontFamily: {
      dm: ["DM-Sans", "sans-serif"],
      time: ["Times-New-Roman", "sans-serif"],
    },
  }
};
