/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1F4E79',
          navydark: '#0D2B4E',
          navylight: '#2563A8',
          orange: '#E8914A',
          orangelight: '#F0A050',
          bglight: '#EEF4FB',
          bglighter: '#F5F9FF',
          formblue: '#1976D2',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        alt: ['Heebo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
