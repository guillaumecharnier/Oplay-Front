import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const TestTag = ({ tagData }) => {
    const { theme } = useTheme(); // Récupère le thème actuel à partir du contexte
    const [selectedTags, setSelectedTags] = useState([]); // État pour les catégories sélectionnées
    const navigate = useNavigate(); // Hook pour la navigation

    // Fonction pour gérer la soumission du formulaire
  const handleSubmit = () => {
    if (selectedTags.length > 0) {
      // Logique pour gérer la soumission de la catégorie sélectionnée
      console.log('Catégorie sélectionnée : ', selectedTags);
      navigate(`/`); // Redirige vers la page TestCategory avec la catégorie sélectionnée
    } else {
      alert('Veuillez sélectionner une sous-catégorie.');
    }
  };
  
    // Fonction pour gérer la sélection d'une catégorie
    const handletagToggle = (tagName) => {
      if (selectedTags.includes(tagName)) {
        setSelectedTags(selectedTags.filter(cat => cat !== tagName));
        navigate(`/`);

      } else {
        setSelectedTags([...selectedTags, tagName]);
      }
    };
  
    return (
      <div className={`min-h-screen bg-${theme}-bg flex flex-col items-center justify-center p-8`}>
        <h1 className="text-3xl font-bold mb-8">Test Personnalisé</h1>
        <p className='text-2xl py-7'>Choisis tes catégories !</p>
        <div className="grid grid-cols-2 gap-6">
          {tagData.map((tag) => (
            <label key={tag.name} className="flex items-center space-x-2 relative">
              <input
                type="checkbox"
                className="appearance-none border-2 border-gray-300 rounded-md w-6 h-6 checked:bg-blue-500 checked:border-transparent cursor-pointer"
                checked={selectedTags.includes(tag.name)}
                onChange={() => handletagToggle(tag.name)}
              />
              <div className={`tag-card relative w-[300px] h-[200px] ${selectedTags.includes(tag.name) ? 'border-pink-500' : ''}`} onClick={() => handletagToggle(tag.name)}>
                <img
                  src={tag.picture}
                  alt={tag.name}
                  className="rounded-lg w-full h-full object-cover"
                />
                <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-lg font-semibold">{tag.name}</p>
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

export default TestTag;