/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1140px',
      },
      fontFamily: {
        'ral': ['Raleway', 'sans-serif'],
        'oxium': [ 'Oxanium', 'sans-serif']
       
      }
      ,
      colors: {
        'comon': '#F95C19',
        'baner': '#fff7e7dd',
      },
      backgroundImage: {
        'covers': "url('./src/assets/Rectangle 12.png')",
        
      }
    },
  },
  maxWidth:{
    continer:'1144px',

  },
  plugins: [],
}
