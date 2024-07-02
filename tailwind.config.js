
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '768px',  // Définir un breakpoint pour les tablettes
        'laptop': '1024px', // Définir un breakpoint pour les laptops
        'desktop': '1280px', // Définir un breakpoint pour les desktops
      },
    },
  },
  plugins: [],
}
