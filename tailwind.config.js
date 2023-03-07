/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Nunito Sans",
    },
    extend: {
      colors: {
        "dark-primary": "#2C3333",
        "dark-secondary": "#395B64",
        green: "#2E8B57",
        red: "#DC143C",
      },
    },
  },
  plugins: [],
};
