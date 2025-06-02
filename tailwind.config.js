/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-975': '#1e3a8a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
         },
      fontSize: {
        'nav': '18px', // Custom font size for navigation
      },
    },
  },
  plugins: [],
};
