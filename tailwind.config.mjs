/** @type {import('tailwindcss').Config} */  
export default {  
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx}'],  
  theme: {  
    extend: {  
      colors: {  
        ink: '#0a0708',  
        'ink-soft': '#131011',  
        offwhite: '#f5f0ee',  
        ash: '#8a8082',  
        red: '#e6142b',  
        crimson: '#8e0e22',  
        magenta: '#d6249f',  
        blue: '#3b4fe0',  
        violet: '#6c2bd9',  
      },  
      fontFamily: {  
        display: ['"Archivo"', '"Arial Narrow"', '"Helvetica Neue"', 'sans-serif'],  
        body: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],  
      },  
    },  
  },  
  plugins: [],  
};  
