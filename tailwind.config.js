/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',
      lightGrayBlue: 'hsl(220, 16%, 96%)',
      blueGray: 'hsl(233, 8%, 62%)',
      darkBlue: 'hsl(233, 26%, 24%)',
      limeGreen: 'hsl(136, 65%, 51%)',
      brightCyan: 'hsl(192, 70%, 51%)',
      veryLightGray: 'hsl(0, 0%, 98%)',
      grayishBlue: 'hsl(233, 8%, 62%)',
    },
    extend: {
      fontFamily: {
      'publicSans': ['Public Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}