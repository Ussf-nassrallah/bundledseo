/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '440px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primaryColor: '#0066FF',
        secondaryColor: '#021F49'
      }
    }
  },
  plugins: [],
}
