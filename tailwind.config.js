/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '500px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    container: {
      center: true,
      padding: '40px'
    },
    extend: {
      width: {
        400: '450px',
        200: '350px',
      },
      minWidth: {
        150: '150px'
      },
      flexBasis: {
        85: '85%'
      },
      maxHeight: {
        box: '387px'
      },
      colors: {
        dark: '#18181B',
        light: 'rgb(244 244 245)',
        green: 'rgb(20 184 166)',
        shadow: '#2323242a',
        borders: '#e5e7eb',
        bor: ' rgb(51, 51, 51)',
        buttons: {
          dark: 'rgba(36, 37, 46, 1)',
          light: '#f6f6f6'
        },
        linear: {
          dark1: ' rgba(255, 255, 255, 0.05)',
        },
        navbg:{
          dark: '#252529',
          light: 'rgb(255 255 255)'
        } ,
        icon:{
          light: '#71717a',
          hover: '#3f3f46',
        },
        navText: {
          dark: '#E0E0E3',
          light: '#535355'
        },
        title:{
          primary: '',
          secodary: 'rgb(113 113 122)',
          a: 'rgb(198, 185, 185)',
          p: '#777'
        },
      }
    },
  },
  plugins: [],
}

