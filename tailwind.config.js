/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
            30: "#ffe0e9"
          }
        }
      }
    }
  },
  plugins: []
};
