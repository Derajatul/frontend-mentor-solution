/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#fff',
      red: 'hsl(0, 100%, 74%)',
      green: 'hsl(154, 59%, 51%)',
      blue: 'hsl(248, 32%, 49%)',
      'dark-blue': 'hsl(249, 10%, 26%) ',
      'grayish-blue': 'hsl(246, 25%, 77%)',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};
