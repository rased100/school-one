/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "white",
        secondary: "gray", // Set your secondary color
      },
    },
  },
  plugins: [require("daisyui")],
};
