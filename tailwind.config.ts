import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        muted2: 'var(--muted2)',
        border: 'var(--border)',
        teal: {
          DEFAULT: 'var(--teal)',
          hover: 'var(--tealHover)',
          tint: 'var(--tealTint)',
        },
        gold: {
          DEFAULT: 'var(--gold)',
          hover: 'var(--goldHover)',
          tint: 'var(--goldTint)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-sora)', 'Sora', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-teal-cyan': 'var(--gradient-teal-cyan)',
      },
    },
  },
  plugins: [],
};

export default config;
