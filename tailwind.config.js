/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        source : ['Source Sans 3', 'sans-serif'],
        poppins: [ 'Poppins', 'sans-serif' ]
      },
    },
  },
  plugins: [],
}

