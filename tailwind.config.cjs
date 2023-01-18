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
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
        grayColor: '#252A2E',
      },
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif'],
        mono: ['Righteous'],
      },
    },
  },
  plugins: [],
}