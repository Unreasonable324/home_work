/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-grey": "#f2f2f2",
        "dark-green": "#6c846c",
        "dark-green2": "#183022",
        "light-green": "#dde0cd",
        "light-green-2": "#bcccaf",
        "light-green-3": "#afb982",
        "main-text": "#183022",
        "primary-text": "#485f3b",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      md: "769px",
      lg: "1024px",
    },
  },
  plugins: [],
};
