/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Grotesk: ["Space Grotesk", "sans-serif"],
        Nunito: ["Nunito Sans", "sans-serif"],
        Manrope: ["Manrope", "sans-serif"],
        Kumbh: ["Kumbh Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        "mine-scope-blue": "#0b1120",
        "mine-scope-green": "#00ff00",
      },
    },
  },
  plugins: [],
};
