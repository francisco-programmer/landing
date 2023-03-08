/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    backgroundImage: {
      'lunamovil': "url('./assets/ezgif.com-crop.webp')",
      'luna': "url('./assets/ezgif.com-webp-maker.webp')",
      "encantados": "url('./assets/vacantes.webp')"
      
    }
  },
  },
  plugins: [],
}


