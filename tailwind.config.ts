import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        iset: {
          ivory: '#F7F5EF',
          lilac: '#ECE7F8',
          navy: '#1F2A44',
          ink: '#1F2430',
        },
      },
    },
  },
  plugins: [],
};

export default config;
