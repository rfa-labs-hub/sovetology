/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      colors: {
        black: '#0a0a0a', // Немного мягче чистого черного для экранов
        white: '#ffffff',
      }
    },
  },
  plugins: [],
}
