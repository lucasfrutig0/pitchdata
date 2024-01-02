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
        dark: '#040D12',
        'forest-dark': '#191919'
      }
    }
  },
  plugins: []
}
