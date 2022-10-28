/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        500: "500px",
        914: "914px",
      },
      colors: {
        "deliverycog-background-grey-color": "#F0F0F0",
        "deliverycog-grey-text-color": "#424242",
      },
      fontFamily: {
        Inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
