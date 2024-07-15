import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const TestPage = () => {
  const { theme } = useTheme(); // Récupère le thème actuel à partir du contexte
  const [selectedCategories, setSelectedCategories] = useState([]); // État pour les catégories sélectionnées

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = () => {
    // Logique pour gérer la soumission des catégories sélectionnées
    console.log('Catégories sélectionnées : ', selectedCategories);
  };

  // Fonction pour gérer la sélection d'une catégorie
  const handleCategoryToggle = (categoryName) => {
    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== categoryName));
    } else {
      setSelectedCategories([...selectedCategories, categoryName]);
    }
  };

  return (
    <div className={`min-h-screen bg-${theme}-bg flex flex-col items-center justify-center p-8`}>
      <h1 className="text-3xl font-bold mb-8">Test Personnalisé</h1>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Catégorie Action */}
        <label className="flex items-center space-x-2 relative">
          <input
            type="checkbox"
            className="appearance-none border-2 border-gray-300 rounded-md w-6 h-6 checked:bg-blue-500 checked:border-transparent cursor-pointer"
            checked={selectedCategories.includes('Action')}
            onChange={() => handleCategoryToggle('Action')}
          />
          <div className={`category-card relative w-[300px] h-[200px] ${selectedCategories.includes('Action') ? 'border-pink-500' : ''}`} onClick={() => handleCategoryToggle('Action')}>
            <img
              src="src/assets/images/CategoriesPictures.jpg" // Remplacez par l'URL de votre image Action
              alt="Action"
              className="rounded-lg w-full h-full object-cover"
            />
            <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-lg font-semibold">Action</p>
          </div>
        </label>

        {/* Catégorie Aventure */}
        <label className="flex items-center space-x-2 relative">
          <input
            type="checkbox"
            className="appearance-none border-2 border-gray-300 rounded-md w-6 h-6 checked:bg-blue-500 checked:border-transparent cursor-pointer"
            checked={selectedCategories.includes('Aventure')}
            onChange={() => handleCategoryToggle('Aventure')}
          />
          <div className={`category-card relative w-[300px] h-[200px] ${selectedCategories.includes('Aventure') ? 'border-pink-500' : ''}`} onClick={() => handleCategoryToggle('Aventure')}>
            <img
              src="src/assets/images/CategoriesPictures.jpg" // Remplacez par l'URL de votre image Aventure
              alt="Aventure"
              className="rounded-lg w-full h-full object-cover"
            />
            <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-lg font-semibold">Aventure</p>
          </div>
        </label>

        {/* Catégorie Stratégie */}
        <label className="flex items-center space-x-2 relative">
          <input
            type="checkbox"
            className="appearance-none border-2 border-gray-300 rounded-md w-6 h-6 checked:bg-blue-500 checked:border-transparent cursor-pointer"
            checked={selectedCategories.includes('Stratégie')}
            onChange={() => handleCategoryToggle('Stratégie')}
          />
          <div className={`category-card relative w-[300px] h-[200px] ${selectedCategories.includes('Stratégie') ? 'border-pink-500' : ''}`} onClick={() => handleCategoryToggle('Stratégie')}>
            <img
              src="src/assets/images/CategoriesPictures.jpg" // Remplacez par l'URL de votre image Stratégie
              alt="Stratégie"
              className="rounded-lg w-full h-full object-cover"
            />
            <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-lg font-semibold">Stratégie</p>
          </div>
        </label>

        {/* Catégorie Puzzle */}
        <label className="flex items-center space-x-2 relative">
          <input
            type="checkbox"
            className="appearance-none border-2 border-gray-300 rounded-md w-6 h-6 checked:bg-blue-500 checked:border-transparent cursor-pointer"
            checked={selectedCategories.includes('Puzzle')}
            onChange={() => handleCategoryToggle('Puzzle')}
          />
          <div className={`category-card relative w-[300px] h-[200px] ${selectedCategories.includes('Puzzle') ? 'border-pink-500' : ''}`} onClick={() => handleCategoryToggle('Puzzle')}>
            <img
              src="src/assets/images/CategoriesPictures.jpg" // Remplacez par l'URL de votre image Puzzle
              alt="Puzzle"
              className="rounded-lg w-full h-full object-cover"
            />
            <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-lg font-semibold">Puzzle</p>
          </div>
        </label>

        {/* Catégorie Simulation */}
        <label className="flex items-center space-x-2 relative">
          <input
            type="checkbox"
            className="appearance-none border-2 border-gray-300 rounded-md w-6 h-6 checked:bg-blue-500 checked:border-transparent cursor-pointer"
            checked={selectedCategories.includes('Simulation')}
            onChange={() => handleCategoryToggle('Simulation')}
          />
          <div className={`category-card relative w-[300px] h-[200px] ${selectedCategories.includes('Simulation') ? 'border-pink-500' : ''}`} onClick={() => handleCategoryToggle('Simulation')}>
            <img
              src="src/assets/images/CategoriesPictures.jpg" // Remplacez par l'URL de votre image Simulation
              alt="Simulation"
              className="rounded-lg w-full h-full object-cover"
            />
            <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-lg font-semibold">Simulation</p>
          </div>
        </label>

        {/* Catégorie Sport */}
        <label className="flex items-center space-x-2 relative">
          <input
            type="checkbox"
            className="appearance-none border-2 border-gray-300 rounded-md w-6 h-6 checked:bg-blue-500 checked:border-transparent cursor-pointer"
            checked={selectedCategories.includes('Sport')}
            onChange={() => handleCategoryToggle('Sport')}
          />
          <div className={`category-card relative w-[300px] h-[200px] ${selectedCategories.includes('Sport') ? 'border-pink-500' : ''}`} onClick={() => handleCategoryToggle('Sport')}>
            <img
              src="src/assets/images/CategoriesPictures.jpg" // Remplacez par l'URL de votre image Sport
              alt="Sport"
              className="rounded-lg w-full h-full object-cover"
            />
            <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-lg font-semibold">Sport</p>
          </div>
        </label>
      </div>

      <button className="mt-12 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleSubmit}>
        Soumettre
      </button>
    </div>
  );
};

export default TestPage;















