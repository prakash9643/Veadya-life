/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#01726E",
        "primary-dk": "#015C59",
        "primary-lt": "#338E8B",
        surface: "#B3D1D0",
        "surface-lt": "#E0EEEE",
        bloom: "#F4EDD0",
        "bloom-pale": "#FAF7E6",
        "bg-deep": "#0D2A29",
        "bg-mist": "#F5F9F8",
        "text-dark": "#0B2120",
        "text-mid": "#2A4B4A",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
}
