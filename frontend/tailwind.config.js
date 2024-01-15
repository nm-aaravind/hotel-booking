/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['"Raleway"', "sans-serif"],
        libre: ['"Libre Franklin"', 'sans-serif']
      },
      backgroundImage: {
        hero: "url('./src/assets/hero.jpg')",
      },
      boxShadow:{
        hero: '0 0 250px black inset'
      } 
    },
  },
  plugins: [],
}

