/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pmLight: "#56DDE1",
        pmMedium: "#2CD5D9",
        pmDark: "#28C0C3",
        scLight: "#532CD9",
        scDark: "#4B28C3",
        greyTransparent:"rgb(240, 255, 255)/0.56"
      },
    },
  },
  plugins: [],
};
