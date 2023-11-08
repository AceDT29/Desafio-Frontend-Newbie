/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "MainFont": ['"Hanken Grotesk"', "sans-serif"]
      },
      colors: {
        "back1": ["hsl(252, 100%, 67%)"],
        "back2": ["hsl(241, 81%, 54%)"],
        "circle1": ["hsla(256, 72%, 46%, 1)"], 
        "circle2": [" hsla(241, 72%, 46%, 0)"],
        "rojoTenue": [" hsl(0, 100%, 67%)"],
        "naranjaTenue": ["hsl(39, 100%, 56%)"],
        "verdeTenue": ["hsl(166, 100%, 37%)"],
        "azulTenue": ["hsl(166, 100%, 37%)"]
      },
    },
  },
  plugins: [],
}

