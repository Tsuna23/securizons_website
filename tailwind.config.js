/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rougeSecurizons: '#C62828',
        secondarySecurizons: '#F5F5F5',
        textColor: '#333333',
        backgroundColor: '#FFFFFF',
        rougeSecurizonsHover: '#C62828',
      },
      animation: {
        slideUp: 'slideUp 0.5s ease both',
      },
      keyframes: {
        slideUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        '800': '800ms',
        '1000': '1000ms',
      },
    },
  },
  plugins: [],
}