module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        cream: '#f6efe8',
        violet: {
          DEFAULT: '#8a588c',
          dark: '#6a326b'
        }
      },

      minHeight: {
        screen: '100vh'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
