/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'inherit' }
        }
      },
      animation: {
        blink: "blink .7s infinite"
      }
    },
  },
  plugins: [],
}
