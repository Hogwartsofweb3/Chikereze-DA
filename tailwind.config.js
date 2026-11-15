/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        cyan: {
          glow: 'rgba(6, 182, 212, 0.15)',
          deep: '#0e7490',
        },
        teal: {
          glow: 'rgba(20, 184, 166, 0.15)',
        },
        dark: {
          bg: '#080a0f',
          surface: '#0e121a',
          elevated: '#151b26',
          border: '#1c2436',
          'border-focus': '#2a364f',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -5px rgba(6, 182, 212, 0.3)',
        'cyan-glow-lg': '0 0 50px -10px rgba(6, 182, 212, 0.4)',
        'teal-glow': '0 0 25px -5px rgba(20, 184, 166, 0.3)',
        'card-dark': '0 8px 30px rgba(0, 0, 0, 0.5)',
        'card-light': '0 8px 30px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
