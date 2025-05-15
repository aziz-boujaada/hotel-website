/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./front-End/src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        Parkinsans: ['Parkinsans'],
      }
    },
    plugins: [],
  }
  