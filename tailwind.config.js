/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      newblue:"#4646F9",
      newblack:"#1E1E1E",
      nwhite:"#FFFFFF",
      nblack:"#0F0E0E"
    },
    extend: {
      height: {
        '82': '21rem',
        '83':'44rem'           
      },
      width:{
         '82':'21rem'
      }
    },
  },
  plugins: [],
}

