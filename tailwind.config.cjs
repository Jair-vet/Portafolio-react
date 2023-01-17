module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        blackBg: '#1e2326',
        greenBorder: '#1CB698',
        grayIcon: '#252A2E',
      },
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif'],
        mono: ['Righteous'],
      },
    },
  },
  plugins: [],
}