/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-cream': '#FFFDF3',  'custom-green': '#3ECF4C',
      },
    },
  },
  plugins: [],
}