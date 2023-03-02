/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    backgroundImage: {
      'luna': "url('https://github.com/francisco-programmer/landing/blob/main/src/assets/luna.jpeg?raw=true')",
      "encantados": "url(./assets/Encantadosdeconocerte.png)"
      
    }
  },
  },
  plugins: [],
}


