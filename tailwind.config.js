/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      "brand-primary": "#082545",
      "brand-secondary": "#3B5777",
      "brand-tertiary": "#2D62A0",
      "brand-alt": "#E67D84",
      "light-bg": "#f0f3f6",
      "dark-bg": "#e7ebee",
      "medium-bg": "#fafafa",
      "darker-bg": "#d0d4dc",
      "text-color": "#333d47",
      "dark-green": "#32735C",
      "light-green": "#91ae2b",
      "border-lightgrey": "#ebebeb",
      "border-lightblue": "#9dabbb",
      "border-darkgrey": "#dcdcdc",
      "text-darkgrey": "#646464",
      "text-mediumgrey": "#646464",
      "medium-bg": "#fafafa",
      "dark-red": "#960212",
      "light-pink": "#ffebee",
      "mint-green": "#eef3defa",
      "baby-blue": "#dde5f0",
      "light-yellow": "#fff3dd",
      "white": "#ffffff",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    fontSize: {
      xs: ['16px', '1.5'],
      sm: ['20px', '1.1'],
      md: ['24px', '1.1'],
      lg: ['32px', '1.1'],
      xl: ['40px', '1.1'],
      xxl: ['50px', '1.1']
    },  
    extend: {},
  },
  plugins: [],
};
