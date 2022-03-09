
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'xs': '100px',
      // => @media (min-width: 100px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1736px',
      // => @media (min-width: 1736px) { ... }
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      "mochy": ['Mochiy Pop P One', 'sans-serif'],
      "hachi": ['Hachi Maru Pop', 'cursive'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

// font-family: 'Hachi Maru Pop', cursive;
