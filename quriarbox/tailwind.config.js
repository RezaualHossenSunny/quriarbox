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
        'ral': ['Raleway', 'sans-serif']
       
      }
    },
  },
  maxWidth:{
    continer:'1144px',

  },
  plugins: [],
}
