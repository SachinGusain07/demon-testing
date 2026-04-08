/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        cream: '#F5F0E8',
        ink: '#0D0D0D',
        blush: '#E8C5B0',
        coral: '#D4614A',
        sage: '#8A9E8C',
        gold: '#C9A84C',
      },
    },
  },
  plugins: [],
}
