/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': '#27292D',
        'heading-primary': '#6B6C70',
        'input-label-primary': '#C5C7CA',
        'input-border-primary': '#35373B'
      },
      fontSize: {
        'heading': '14px',
      },
    },
  },
  plugins: [],
}