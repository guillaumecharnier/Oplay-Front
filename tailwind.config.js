// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { color } from "three/examples/jsm/nodes/Nodes.js";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '768px',  
        'laptop': '1024px', 
        'desktop': '1280px', 
      },
      colors: {
        'blue-custom': {
          100: '#E6F7FF',
          200: '#1B1F47', // Couleur pour le fond de la page
          300: '#4A90E2',
          400: '#357ABD',
          500: '#2C3E50',
          600: '#233140',
          700: '#1A2733',
          800: '#111A21',
          900: '#0B1116',
        },
    },
  },
  plugins: [],
}
}