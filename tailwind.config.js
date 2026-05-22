/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        words: {
          '0%, 33%': { content: '"Frontend Developer"' },
          '34%, 66%': { content: '"Developer"' },
          '67%, 100%': { content: '"Fullstack Developer"' },
        },
      },
      animation: {
        'type-words': 'words 20s infinite',
      },
    },
  },
  plugins: [],
}

