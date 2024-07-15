import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const TestCategory = ({ categoryData }) => {
  const { theme } = useTheme(); // Récupère le thème actuel à partir du contexte
  const [selectedCategories, setSelectedCategories] = useState([]); // État pour les catégories sélectionnées
  const navigate = useNavigate(); // Hook pour la navigation
  
  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = () => {
    if (selectedCategories.length > 0) {
      // Logique pour gérer la soumission de la catégorie sélectionnée
      console.log('Catégorie sélectionnée : ', selectedCategories);
      navigate(`/test-personnalite/Tags`); // Redirige vers la page TestCategory avec la catégorie sélectionnée
    } else {
      alert('Veuillez sélectionner une catégorie.');
    }
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
      <p className='text-2xl py-7'>Choisis tes catégories !</p>
      <div className="grid grid-cols-2 gap-6">
        {categoryData.map((category) => (
          <label key={category.name} className="flex items-center space-x-2 relative">
            <input
              type="checkbox"
              className="appearance-none border-2 border-gray-300 rounded-md w-6 h-6 checked:bg-blue-500 checked:border-transparent cursor-pointer"
              checked={selectedCategories.includes(category.name)}
              onChange={() => handleCategoryToggle(category.name)}
            />
            <div className={`category-card relative w-[300px] h-[200px] ${selectedCategories.includes(category.name) ? 'border-pink-500' : ''}`} onClick={() => handleCategoryToggle(category.name)}>
              <img
                src={category.picture}
                alt={category.name}
                className="rounded-lg w-full h-full object-cover"
              />
              <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-lg font-semibold">{category.name}</p>
            </div>
          </label>
        ))}
      </div>
      <button className="mt-12 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleSubmit}>
        Soumettre
      </button>
    </div>
  );
};

export default TestCategory;