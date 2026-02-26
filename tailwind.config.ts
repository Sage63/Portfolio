import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0B0F19',
        primary: '#7C5CFF',
        accent: '#22D3EE',
        text: '#E5E7EB'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 40px rgba(124, 92, 255, 0.25)',
        cyan: '0 0 30px rgba(34, 211, 238, 0.2)'
      },
      backgroundImage: {
        aurora:
          'radial-gradient(circle at 15% 15%, rgba(124,92,255,0.35), transparent 45%), radial-gradient(circle at 85% 10%, rgba(34,211,238,0.3), transparent 40%), radial-gradient(circle at 50% 85%, rgba(124,92,255,0.2), transparent 45%)'
      }
    }
  },
  plugins: []
}

export default config