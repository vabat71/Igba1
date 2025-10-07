/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'igba-pink': '#ec4899',
        'igba-dark': '#1f2937',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
