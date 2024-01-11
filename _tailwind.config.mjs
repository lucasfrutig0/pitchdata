/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'forest-green-dark': '#08313A',
        'lime-green': '#5CD85A',
        esmerald: '#03A65A',
        ivory: '#DEDCE4',
        'forest-green': '#1A5653',
        accent: '#F6FCFF',
        'soft-light': 'rgb(209 213 219 / 1)',
        dark: '#171717',
        'hard-dark': 'rgb(17 17 17 / 1)',
        'accent-dark': 'rgb(33 33 33 / 1)',
        'soft-dark': 'rgb(44 44 44 / 1)',
        'forest-dark': '#191919'
      }
    }
  },
  plugins: []
}
