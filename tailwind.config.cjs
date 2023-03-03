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
      "encantados": "url('https://github.com/francisco-programmer/landing/blob/main/src/assets/Encantadosdeconocerte.png?raw=true')"
      
    }
  },
  },
  plugins: [],
}


