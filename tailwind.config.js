/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexGrow: {
        0.1: '0.1'
      },
      borderRadius: {
        'lg': '1.5rem',
      }
    }
  },
  plugins: [],
}

