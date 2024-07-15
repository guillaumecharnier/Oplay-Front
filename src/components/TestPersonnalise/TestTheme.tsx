import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const TestPage = () => {
  const { theme } = useTheme(); // Récupère le thème actuel à partir du contexte
  const [selectedCategory, setSelectedCategory] = useState(''); // État pour la catégorie sélectionnée
  const navigate = useNavigate(); // Hook pour la navigation

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = () => {
    if (selectedCategory) {
      // Logique pour gérer la soumission de la catégorie sélectionnée
      console.log('Catégorie sélectionnée : ', selectedCategory);
      navigate(`/test-personnalite/Categories`); // Redirige vers la page TestCategory avec la catégorie sélectionnée
    } else {
      alert('Veuillez sélectionner un thème.');
    }
  };

  // Fonction pour gérer la sélection d'un thème
  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className={`min-h-screen bg-${theme}-bg flex flex-col items-center justify-center p-8`}>
      <h1 className="text-3xl font-bold mb-8">Test Personnalisé</h1>
      <p className='text-2xl py-7'>Choisis un thème !</p>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Thèmes */}
        <label className="flex items-center space-x-2 relative">
          <input
            type="radio"
            name="category"
            className="appearance-none border-2 border-gray-300 rounded-full w-6 h-6 checked:bg-blue-500 checked:border-transparent cursor-pointer"
            checked={selectedCategory === 'Action'}
            onChange={() => handleCategoryChange('Action')}
          />
          <div className={`category-card relative w-[300px] h-[200px] ${selectedCategory === 'Action' ? 'border-pink-500' : ''}`} onClick={() => handleCategoryChange('Action')}>
            <img
              src="src/assets/images/CategoriesPictures.jpg"
              alt="Action"
              className="rounded-lg w-full h-full object-cover"
            />
            <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-lg font-semibold">Horreur</p>
          </div>
        </label>

        {/* Catégorie Aventure */}
        <label className="flex items-center space-x-2 relative">
          <input
            type="radio"
            name="category"
            className="appearance-none border-2 border-gray-300 rounded-full w-6 h-6 checked:bg-blue-500 checked:border-transparent cursor-pointer"
            checked={selectedCategory === 'Aventure'}
            onChange={() => handleCategoryChange('Aventure')}
          />
          <div className={`category-card relative w-[300px] h-[200px] ${selectedCategory === 'Aventure' ? 'border-pink-500' : ''}`} onClick={() => handleCategoryChange('Aventure')}>
            <img
              src="src/assets/images/CategoriesPictures.jpg" // Remplacez par l'URL de votre image Aventure
              alt="Aventure"
              className="rounded-lg w-full h-full object-cover"
            />
            <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-lg font-semibold">Action</p>
          </div>
        </label>

        {/* Catégorie Stratégie */}
        <label className="flex items-center space-x-2 relative">
          <input
            type="radio"
            name="category"
            className="appearance-none border-2 border-gray-300 rounded-full w-6 h-6 checked:bg-blue-500 checked:border-transparent cursor-pointer"
            checked={selectedCategory === 'Stratégie'}
            onChange={() => handleCategoryChange('Stratégie')}
          />
          <div className={`category-card relative w-[300px] h-[200px] ${selectedCategory === 'Stratégie' ? 'border-pink-500' : ''}`} onClick={() => handleCategoryChange('Stratégie')}>
            <img
              src="src/assets/images/CategoriesPictures.jpg" // Remplacez par l'URL de votre image Stratégie
              alt="Stratégie"
              className="rounded-lg w-full h-full object-cover"
            />
            <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-lg font-semibold">Aventure</p>
          </div>
        </label>

        {/* Catégorie Puzzle */}
        <label className="flex items-center space-x-2 relative">
          <input
            type="radio"
            name="category"
            className="appearance-none border-2 border-gray-300 rounded-full w-6 h-6 checked:bg-blue-500 checked:border-transparent cursor-pointer"
            checked={selectedCategory === 'Puzzle'}
            onChange={() => handleCategoryChange('Puzzle')}
          />
          <div className={`category-card relative w-[300px] h-[200px] ${selectedCategory === 'Puzzle' ? 'border-pink-500' : ''}`} onClick={() => handleCategoryChange('Puzzle')}>
            <img
              src="src/assets/images/CategoriesPictures.jpg" // Remplacez par l'URL de votre image Puzzle
              alt="Puzzle"
              className="rounded-lg w-full h-full object-cover"
            />
            <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-lg font-semibold">Online</p>
          </div>
        </label>

        {/* Catégorie Simulation */}
        <label className="flex items-center space-x-2 relative">
          <input
            type="radio"
            name="category"
            className="appearance-none border-2 border-gray-300 rounded-full w-6 h-6 checked:bg-blue-500 checked:border-transparent cursor-pointer"
            checked={selectedCategory === 'Simulation'}
            onChange={() => handleCategoryChange('Simulation')}
          />
          <div className={`category-card relative w-[300px] h-[200px] ${selectedCategory === 'Simulation' ? 'border-pink-500' : ''}`} onClick={() => handleCategoryChange('Simulation')}>
            <img
              src="src/assets/images/CategoriesPictures.jpg" // Remplacez par l'URL de votre image Simulation
              alt="Simulation"
              className="rounded-lg w-full h-full object-cover"
            />
            <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-lg font-semibold">Sport</p>
          </div>
        </label>

        {/* Catégorie Sport */}
        <label className="flex items-center space-x-2 relative">
          <input
            type="radio"
            name="category"
            className="appearance-none border-2 border-gray-300 rounded-full w-6 h-6 checked:bg-blue-500 checked:border-transparent cursor-pointer"
            checked={selectedCategory === 'Sport'}
            onChange={() => handleCategoryChange('Sport')}
          />
          <div className={`category-card relative w-[300px] h-[200px] ${selectedCategory === 'Sport' ? 'border-pink-500' : ''}`} onClick={() => handleCategoryChange('Sport')}>
            <img
              src="src/assets/images/CategoriesPictures.jpg" // Remplacez par l'URL de votre image Sport
              alt="Sport"
              className="rounded-lg w-full h-full object-cover"
            />
            <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-lg font-semibold">Strategie</p>
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















