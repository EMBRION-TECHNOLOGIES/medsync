import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { 
        sans: ['Nunito Sans', 'system-ui', 'sans-serif'],
        nunito: ['Nunito Sans', 'system-ui', 'sans-serif']
      }
    }
  }
};

export default config;
