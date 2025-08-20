import defaultTheme from 'tailwindcss/defaultTheme';

// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        kumbh: ['Kumbh Sans', 'sans-serif'],
      },
      screens: {
        '900': '900px', 
      },
    },
    
  },
  plugins: [],
};
