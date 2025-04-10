/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.html", "src/**/*.njk", "src/**/*.js", "src/**/*.md"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Merriweather", "serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "Merriweather, serif !important",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
