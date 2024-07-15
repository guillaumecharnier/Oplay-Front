import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

import axios from 'axios';

const TestPage = ({ categoryData }) => {
  const { theme } = useTheme(); // Récupère le thème actuel à partir du contexte
  const { token } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState(''); // État pour la catégorie sélectionnée
  const navigate = useNavigate(); // Hook pour la navigation

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async () => {
    if (selectedCategory) {
      // Récupère l'ID du thème sélectionné
      const selectedCategoryData = categoryData.find(categ => categ.name === selectedCategory);
      if (selectedCategoryData) {
        const themeId = selectedCategoryData.id;
        console.log('ID du thème', themeId);

        // Post the theme data
        await postThemeData(themeId);
        // postThemeData(themeId);
    
        // Redirige vers la page TestCategory avec la catégorie sélectionnée
        navigate(`/test-personnalite/Categories`);
      } else {
        console.error('La catégorie sélectionnée n\'a pas été trouvée dans les données de catégorie.');
      }
    } else {
      alert('Veuillez sélectionner un thème.');
    }
  };

  // Fonction pour gérer la sélection d'un thème
  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
  };
  
  const postThemeData = async (themeId) => {
    try {
      const response = await axios.post('http://localhost:8080/api/user/theme', {
        theme_id: themeId
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('user Response:', response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div className={`min-h-screen bg-${theme}-bg flex flex-col items-center justify-center p-8`}>
      <h1 className="text-3xl font-bold mb-8">Test Personnalisé</h1>
      <p className="text-2xl py-7">Choisis un thème !</p>
      
      <div className="grid grid-cols-2 gap-6">
        {categoryData.map((category) => (
          <label key={category.name} className="flex items-center space-x-2 relative">
            <input
              type="radio"
              name="category"
              className="appearance-none border-2 border-gray-300 rounded-full w-6 h-6 checked:bg-blue-500 checked:border-transparent cursor-pointer"
              checked={selectedCategory === category.name}
              onChange={() => handleCategoryChange(category.name)}
            />
            <div className={`category-card relative w-[300px] h-[200px] ${selectedCategory === category.name ? 'border-pink-500' : ''}`} onClick={() => handleCategoryChange(category.name)}>
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

export default TestPage;















function handleThemeChange(arg0: string) {
  throw new Error('Function not implemented.');
}

