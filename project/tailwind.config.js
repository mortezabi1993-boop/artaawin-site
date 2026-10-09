/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#effef7',
          100: '#d9ffed',
          200: '#b5fdde',
          300: '#7cf8c6',
          400: '#3de9a5',
          500: '#14d08b',
          600: '#09ac72',
          700: '#0b875d',
          800: '#0f6c4d',
          900: '#0e5841',
          950: '#013225',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffecc5',
          200: '#ffd788',
          300: '#ffbc4a',
          400: '#ffa420',
          500: '#f58507',
          600: '#d86404',
          700: '#b44806',
          800: '#92380c',
          900: '#78300d',
          950: '#421502',
        },
        steel: {
          50: '#f8f9fc',
          100: '#eef0f6',
          200: '#dce0ed',
          300: '#bfc5db',
          400: '#9aa2c3',
          500: '#7b83ab',
          600: '#616892',
          700: '#505578',
          800: '#434762',
          900: '#3a3d53',
          950: '#252736',
        },
      },
      fontFamily: {
        vazir: ['Vazirmatn', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
