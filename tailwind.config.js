/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'panna-gold': '#d4af37',
        'panna-blue': '#004b7a',
        'panna-dark': '#0a0a0a',
      },
    },
  },
  plugins: [],
}