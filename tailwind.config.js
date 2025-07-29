/** @type {import('tailwindcss').Config} */
export default {
  content: [
       './index.html', 
    './src/**/*.{js,jsx,ts,tsx,html}',
    "node_modules/taos/dist/taos.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [

  ],
}

