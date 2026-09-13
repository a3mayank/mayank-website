/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        brand: {
          yellow: '#f7a501',
          'yellow-hover': '#e89900',
          bg: '#eeece9',
          card: '#ffffff',
          dark: '#1d1f24',
          border: '#1d1f24',
          muted: '#52525b',
          tag: '#e3e0d8',
          blue: '#2563eb',
          green: '#10b981',
          red: '#ef4444',
          purple: '#8b5cf6',
        },
      },
      boxShadow: {
        'retro-sm': '2px 2px 0px 0px #1d1f24',
        'retro': '4px 4px 0px 0px #1d1f24',
        'retro-lg': '6px 6px 0px 0px #1d1f24',
        'retro-xl': '8px 8px 0px 0px #1d1f24',
      }
    },
  },
  plugins: [],
}
