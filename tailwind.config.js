/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Nunito Sans",
    },
    extend: {
      colors: {
        "dark-primary": "#332e2e",
        "dark-secondary": "#474140",
        green: "#2E8B57",
        red: "#DC143C",
        white: "#f5f0f0",
        grey: "#94908f",
      },
    },
  },
  plugins: [],
};
