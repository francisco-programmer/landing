/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    backgroundImage: {
      'pre': "url('./src/assets/pre.png')",
      
    }
  },
  },
  plugins: [],
}
