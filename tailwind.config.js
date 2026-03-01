/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FDFBF7',
          dark: '#F5F5F0'
        },
        ink: {
          DEFAULT: '#111111',
          light: '#2A2A2A',
        },
        gold: {
          DEFAULT: '#D4AF37',
          soft: '#E8DCCA',
          muted: '#C5A059'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'noise': "url('/noise.png')",
      }
    },
  },
  plugins: [],
}
