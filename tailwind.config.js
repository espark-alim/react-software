/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#068987',
        secondary: '#595959',
      },
      fontFamily: {
        gilroy: [
          'Gilroy-Regular',
          'Gilroy-Black',
          'Gilroy-Bold',
          'Gilroy-ExtraBold',
          'Gilroy-Heavy',
          'Gilroy-Light',
          'Gilroy-Medium',
          'Gilroy-SemiBold',
          'Gilroy-Thin',
          'Gilroy-UltraLight',
        ],
      },
    },
  },
  plugins: [],
};
