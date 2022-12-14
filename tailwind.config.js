/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        mid: "inset 0 0 10px rgba(0, 0, 0, 0.1);"
      },
      colors: {
        ui: {
          pink: {
            100: "#602437",
            90: "#8a2846",
            80: "#b9375e",
            70: "#e05780",
            60: "#ff7aa2",
            50: "#ff9ebb",
            40: "#ffc2d4",
            30: "#ffe0e9",
            20: "#FFF1F5"
          },
          black: {
            80: "#222222"
          }
        }
      }
    }
  },
  plugins: []
};
