/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkpurple: '#8f5bff',
        lightpurple: '#c2a6ff',
        darkmode:'#1F2937',
        // Add more colors as needed
      },
    },
  },
  plugins: [],
}
