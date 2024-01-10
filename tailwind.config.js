/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#",
        },
        secondary: {
          DEFAULT: "#",
        },
      },

      fontFamily: {
        name: ["Roboto", "Arial", "sans-serif"],
      },
    },

    screens: {
      xs: "360px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
