/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'theme-light': '#fdfdfc',
        'theme-dark': '#161616',
        'color-white': '#ffffff',
        'color-black': '#333333',        
        'accent': '136, 58, 234',
        'accent-light': '224, 204, 250',
        'accent-dark': '49, 10, 101',
        'gradient': 'linear-gradient(45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60%)',
      },
      boxShadow: {
        'inset': 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
      },
      backgroundImage: {
        'linear-gradient': 'linear-gradient(45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60%)'
      }          
    },
  },
  plugins: [],
};