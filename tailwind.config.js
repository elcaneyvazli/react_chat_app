/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#7269ef',
        'secondary': '#F0F8FF',
        'tertiary': '#e0e4fb',
        "white": "#ffffff",
        "white2": "#f5f7fb",
        "black": "#495057",
        "active": "#06d6a0",
        "text": "#7a7f9a",
      },
      fontSize: {
        'xs': '1.2rem',
        'sm': '1.4rem',
        'md': '1.6rem',
        'lg': '1.8rem',
        'xl': '2.4rem',
        '2xl': '3.2rem',
      },
    },
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}