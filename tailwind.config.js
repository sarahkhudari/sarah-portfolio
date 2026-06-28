/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        display: ['"Playfair Display"', 'serif'],
        arabic: ['Tajawal', 'Cairo', 'sans-serif'],
      },
      colors: {
        // Soft blush — kept for backward compatibility with existing components
        blush: {
          50: '#fff5f9',
          100: '#ffe6f1',
          200: '#ffc5de',
          300: '#ff95c2',
          400: '#ff5fa2',
          500: '#ff2e8a',
          600: '#ec1078',
          700: '#c0095f',
          800: '#900b4a',
          900: '#5b0a32',
        },
        rose: {
          soft: '#ffe1ee',
          mid: '#ff8ec0',
          deep: '#ff1f8a',
        },
        lavender: {
          soft: '#f1e4ff',
          mid: '#c9a8ff',
        },
        // Baby pink palette
        neon: {
          pink: '#ffafcc',
          fuchsia: '#ffb6d1',
          hot: '#ff8db5',
          magenta: '#f48fb1',
          violet: '#d4a5d6',
        },
        ink: {
          50: '#fff5fa',
          100: '#f4e9f3',
          900: '#1a0915',
          950: '#120410',
        },
        sand: '#fff3f8',
        cream: '#fff9fc',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(255, 175, 204, 0.45)',
        glow: '0 0 32px rgba(255, 175, 204, 0.55), 0 0 8px rgba(255, 175, 204, 0.4)',
        'glow-lg':
          '0 0 60px rgba(255, 175, 204, 0.55), 0 0 18px rgba(255, 175, 204, 0.45)',
        'glow-soft': '0 0 40px rgba(255, 200, 221, 0.55)',
        card: '0 24px 60px -22px rgba(244, 143, 177, 0.40), 0 2px 8px -4px rgba(255, 175, 204, 0.30)',
        inset: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.65)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(at 18% 20%, rgba(255, 175, 204, 0.32) 0px, transparent 50%), radial-gradient(at 82% 8%, rgba(255, 141, 181, 0.30) 0px, transparent 50%), radial-gradient(at 60% 85%, rgba(212, 165, 214, 0.25) 0px, transparent 55%)',
        'soft-gradient':
          'linear-gradient(135deg, #0a0510 0%, #15071c 45%, #0a0510 100%)',
        'neon-gradient':
          'linear-gradient(135deg, #ffafcc 0%, #ff8db5 50%, #f48fb1 100%)',
        'sheen':
          'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow:
              '0 0 24px rgba(255, 175, 204, 0.50), 0 0 8px rgba(255, 175, 204, 0.40)',
          },
          '50%': {
            boxShadow:
              '0 0 50px rgba(255, 175, 204, 0.80), 0 0 18px rgba(255, 175, 204, 0.60)',
          },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        sheen: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'pulse-glow': 'pulse-glow 3.6s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease-in-out infinite',
        sheen: 'sheen 1.4s ease-out',
      },
    },
  },
  plugins: [],
};
