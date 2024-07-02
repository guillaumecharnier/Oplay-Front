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
        'black-custom': {
          100: '#EDEDED',
          200: '#D4D4D4',
          300: '#B8B8B8',
          400: '#8A8A8A',
          500: '#5C5C5C',
          600: '#3D3D3D',
          700: '#2C2C2C',
          800: '#1C1C1C',
          900: '#0C0C0C',
        },
    },
  },
  plugins: [],
}
}