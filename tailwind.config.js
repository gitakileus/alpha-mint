module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        shine: 'shine 2s',
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
      },
    },
    screens: {
      sm: '320px',
      // => @media (min-width: 320px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}
