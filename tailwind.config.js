/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-white': '#FFFFFF',
        'soft-light': '#F7FAFF',
        'secondary-blue': '#EEF4FF',
        'primary-blue': '#4F7DF3',
        'light-ui-blue': '#DCE8FF',
        'supporting-blue': '#BFD4FF',
        'deep-navy': '#162B57',
        'main-heading': '#0F172A',
        'body-text': '#667085',
        'white-text': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        'button-sm': '14px',
        'button-md': '18px',
        'card-sm': '20px',
        'card-md': '24px',
        'card-lg': '28px',
        'cta': '28px',
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(37, 99, 235, 0.08)',
      },
    },
  },
  plugins: [],
}