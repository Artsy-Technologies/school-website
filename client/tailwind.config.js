/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkpurple: '#8f5bff',
        lightpurple: '#c2a6ff',
        // Add more colors as needed
      },
    },
  },
  plugins: [],
}
