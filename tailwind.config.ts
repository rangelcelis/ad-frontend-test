import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'color-primary': '#585660',
        'color-secondary': '#8F8F8F',
        'color-tertiary': '#EFEDF3',
        'item-primary': '#3B3B3B',
        'stone-100': '#F5F5F4',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0.25',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        fadeIn: 'fade-in ease-in-out 0.25s 1',
      },
    },
  },
  plugins: [],
};

export default config;
