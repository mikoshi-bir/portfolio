import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Cormorant Unicase', 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.2s cubic-bezier(0, 0.55, 0.45, 1) forwards'
      }
    },
  },
  plugins: [],
} satisfies Config

