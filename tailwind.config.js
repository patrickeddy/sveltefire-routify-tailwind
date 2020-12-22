module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
          }
        }
      })
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}