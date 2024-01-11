/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['"Raleway"', "sans-serif"],
        libre: ['"Libre Franklin"', 'sans-serif']
      },
    },
  },
  plugins: [],
}

