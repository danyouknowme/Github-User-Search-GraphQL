module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'dark': '#282c34',
      'white': '#ffffff',
      'blackOpacity': 'rgb(0, 0, 0, 0.6)',
      'lightRed': '#ef4444'
    },
    extend: {
      flex: {
        '0': '0 0 auto'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
