/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },

        },
      },
      animation: {
        'openmenu': 'open-menu 0.5s ease-in-out forwards',
      },
      colors: {
        papayawhip: {
          DEFAULT: '#ffefd5',
          light: '#fef4e4',
          dark: '#fee5bc',
        }
      }
    },
  },
  plugins: [],
}

