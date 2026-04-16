import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        iset: {
          bg: '#f8f8f7',
          text: '#1f2937',
          soft: '#e6e7e8',
          point: '#8ca3a3'
        }
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
