/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the ON STRATEGY PRO deck
        gold: {
          DEFAULT: '#F4C430',
          light: '#FAD860',
          dark: '#D9A70C',
        },
        ink: {
          DEFAULT: '#1B1B1B',
          soft: '#2B2B2B',
          muted: '#3A3A3A',
        },
        paper: '#F3F3F1',
        smoke: '#E7E7E4',
      },
      fontFamily: {
        display: ['"Clash Display"', 'system-ui', 'sans-serif'],
        sans: ['"Satoshi"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [],
};
