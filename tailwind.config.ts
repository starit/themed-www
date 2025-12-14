import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core neutral palette
        surface: {
          '000': '#0a0a0a',  // Deepest black
          '050': '#111111',  // Near-black
          '100': '#1a1a1a',  // Dark surface
          '200': '#242424',  // Elevated surface
          '300': '#2e2e2e',  // Border dark
          '400': '#3d3d3d',  // Border medium
        },
        text: {
          primary: '#e8e8e8',    // Primary text
          secondary: '#a0a0a0',  // Secondary text
          tertiary: '#6b6b6b',   // Muted text
          inverse: '#0a0a0a',    // Text on light backgrounds
        },
        accent: {
          subtle: '#4a4a4a',     // Subtle accent
          DEFAULT: '#888888',    // Neutral accent
        },
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'IBM Plex Mono', 'Consolas', 'monospace'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-2': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0' }],
        'heading-3': ['1.125rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
      },
      spacing: {
        'grid': '1.5rem',
        'section': '8rem',
        'section-sm': '5rem',
      },
      maxWidth: {
        'container': '72rem',
        'content': '42rem',
      },
      borderWidth: {
        '1': '1px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

