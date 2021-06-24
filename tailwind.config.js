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
        submitBtn: '4px 4px 8px #d9d9d9,-4px -4px 8px #ffffff',
        submitPressed: 'inset 4px 4px 8px #176c9f,inset -4px -4px 8px #1f92d7',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
