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
    },
    extend: {
      height: {
        '82': '21rem', // Assuming 1rem = 4px, adjust accordingly
      }
    },
  },
  plugins: [],
}

