/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EDF4FA',
          100: '#D6E5F1',
          200: '#ADCBE4',
          300: '#7EADD3',
          400: '#4D8CBE',
          500: '#2C6FA6',
          600: '#1B5A8C',
          700: '#144B75',
          800: '#103F63',
          900: '#0E3A5D',
          950: '#08233B',
        },
        accent: {
          50: '#EAF9EF',
          100: '#CDF0D8',
          200: '#9FE0B5',
          300: '#6CCB8E',
          400: '#47B86E',
          500: '#2FA84F',
          600: '#218A3F',
          700: '#1B6F35',
          800: '#175A2D',
          900: '#134A26',
        },
        mist: '#F3F7F5',
        ink: '#1F2937',
        muted: '#6B7280',
      },
      boxShadow: {
        card: '0 6px 24px -6px rgba(14, 58, 93, 0.12)',
        lift: '0 14px 34px -10px rgba(14, 58, 93, 0.25)',
      },
    },
  },
  plugins: [],
}