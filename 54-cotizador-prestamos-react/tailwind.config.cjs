/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Le decimos donde usaremos clases de Tailwind
    "./src/**/*.{js,ts,jsx,tsx}" // No debe llevar espacios
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
