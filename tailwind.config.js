/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.8)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.8)',
          '0 45px 65px rgba(0, 0, 0, 0.8)'
        ]
      },
      fontFamily: {
        "kanit": ["Kanit"]
      }
    }
  },
  plugins: [],
}

