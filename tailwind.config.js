/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      mobile: '400px', // @media (min-width: 360px)
      // foldable: '523px', // @media (min-width: 523px)
      // tablet: '768px', // @media (min-width: 768px)
      // 'under-foldable': { max: '522px' }, // @media (max-width: 522px)
      // 'under-tablet': { max: '767px' }, // @media (max-width: 767px)
      'under-mobile': { max: '399px' } // @media (max-width: 359px)
    },
    container: {
      center: true
    }
  },
  plugins: [],
}

