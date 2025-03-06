/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0055b8',
          light: '#3378c5',
          dark: '#004494',
        },
        secondary: {
          DEFAULT: '#00a0e3',
          light: '#33b3e9',
          dark: '#0080b6',
        },
        accent: {
          DEFAULT: '#ff5757',
          light: '#ff7a7a',
          dark: '#e64545',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};