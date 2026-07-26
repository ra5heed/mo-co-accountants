/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
              xs: '375px',
     },
      colors: {
        gold: {
          DEFAULT: '#B8945A',
          light:   '#D4B483',
          pale:    '#F5EDD8',
        },
        navy: {
          DEFAULT: '#0D1B2A',
          mid:     '#1A2E42',
          light:   '#243B55',
        },
        cream: {
          DEFAULT: '#FAF7F2',
          dark:    '#F0EAE0',
        },
        body:  '#3A3028',
        muted: '#7A6E62',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'sans-serif'],
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
