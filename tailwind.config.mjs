/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'urban-primary': '#FF5733',
        'urban-secondary': '#C70039',
        'urban-accent': '#900C3F',
        'urban-neutral': '#571845',
      },
      fontFamily: {
        'urban-title': ['Arial', 'sans-serif'],
        'urban-body': ['Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}