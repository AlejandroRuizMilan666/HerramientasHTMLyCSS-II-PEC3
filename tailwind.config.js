/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary:   '#5c3d1e',
        secondary: '#7a5c2e',
        accent:    '#c8a96e',
        light:     '#f5ede0',
        dark:      '#2b1a0e',
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
