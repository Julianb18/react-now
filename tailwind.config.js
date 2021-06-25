module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    // custom styles
    extend: {
      colors: {
        primary: '#1b7fbb',
        secondary: '#2c3e50',
      },
      boxShadow: {
        primaryIcon: '8px 8px 16px #d9d9d9,-8px -8px 16px #ffffff;',
        pressedIcon: 'inset 8px 8px 16px #d9d9d9,inset -8px -8px 16px #ffffff',
        submitBtn: '4px 4px 8px #d9d9d9,-4px -4px 8px #ffffff',
        submitPressed: 'inset 4px 4px 8px #176c9f,inset -4px -4px 8px #1f92d7',
      },

      screens: {
        sm: '320px',
        '2lg': '1240px',
      },

      width: {
        xl: '640px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      transform: ['active'],
      scale: ['active'],
      transitionDuration: ['active'],
      opacity: ['active'],
      boxShadow: ['active'],
    },
  },
  plugins: [],
}
