/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Roboto', 'sans-serif'],
        customHenju: ['Henju', 'sans-serif'],
        customBukagi: ['Bukagi', 'sans-serif']
      },
      colors: {
        "primary-black": {
          default: "#181818",
          "700": "#4F4F4F"
        },  
        "primary-yellow": {
          default: "#FFD700",
          "300": "#FFF441",
          "200": "#FFFD86",
          "100": "#FEFFC1"
        },
        "primary-gray": {
          default: "#535353",
          "500": "#6D6D6D",
          "400": "#888888",
          "200": "#D1D1D1",
        },          
      }
    },
  },
  plugins: [],
}

