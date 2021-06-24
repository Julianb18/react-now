module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1b7fbb',
      },
      boxShadow: {
        primaryIcon: '8px 8px 16px #d9d9d9,-8px -8px 16px #ffffff;',
        pressedIcon: 'inset 8px 8px 16px #d9d9d9,inset -8px -8px 16px #ffffff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
