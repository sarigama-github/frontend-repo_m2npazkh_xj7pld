/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a0f1f',
          600: '#0e1630',
          700: '#0a0f1f',
          800: '#070b17',
        },
        accent: '#0ea5e9',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Arial'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(2, 6, 23, 0.45)',
      },
      backdropBlur: {
        xl: '20px',
      },
    },
  },
  plugins: [],
}
