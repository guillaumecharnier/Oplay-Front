import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext'; // Assurez-vous d'importer useUser depuis votre contexte UserContext
import { useTheme } from '../../context/ThemeContext'; // Assurez-vous d'importer useTheme depuis votre contexte ThemeContext
import CustomSelection from './CustomSelection';
import LastAdditions from './LastAdditions';
import Categories from './Categories';
import NextRelease from './NextRelease';
import PageJeu from '../PageJeu/PageJeu';

interface Game {
  id: number;
  name: string;
  price: number;
  picture: string;
  categories: string[]; // Ajoutez la propriété categories à l'interface Game
}

interface HomePageProps {
  gameData: Game[];
  categoryData: any; // Remplacez 'any' par le type approprié pour vos données de catégorie
}

const HomePage: React.FC<HomePageProps> = ({ gameData, categoryData }) => {
  const { theme } = useTheme(); // Récupère le thème actuel à partir du contexte
  const { user } = useUser(); // Récupère l'utilisateur actuel à partir du contexte
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Fonction pour gérer la sélection des catégories
  const handleCategorySelect = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Filtrer les jeux en fonction des catégories sélectionnées
  const filteredGames = selectedCategories.length > 0
    ? gameData.filter(game => game.categories.some(cat => selectedCategories.includes(cat)))
    : gameData;

  // Vérifie si l'utilisateur est administrateur
  const isAdmin = user && user.length > 0 && user[0].roles && user[0].roles.includes('ROLE_ADMIN');

  return (
    <div className={`bg-${theme}-bg min-h-screen flex flex-col items-center justify-start overflow-x-hidden`}>
      {/* Image de couverture */}
      <div className="relative w-full mb-36 flex justify-center">
        <img
          src="src/assets/images/Last-Of-Us.jpeg"
          alt="Cover Image"
          className="w-full max-h-80 object-cover shadow-lg"
        />
        <div className="absolute top-4 md:left-6 lg:left-8">
          <p className={`text-${theme}-text text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`}>
            The Last Of Us Part I - $39.99
          </p>
        </div>
      </div>

      {/* Section CustomSelection */}
      <div className="w-full max-w-screen-lg mb-16 md:mb-24 lg:mb-28 xl:mb-32">
        <CustomSelection gameData={filteredGames} onCategorySelect={handleCategorySelect} />
      </div>

      {/* Section LastAdditions */}
      <div className="w-full max-w-screen-lg mb-16 md:mb-24 lg:mb-28 xl:mb-32">
        <LastAdditions gameData={gameData} />
      </div>

      {/* Section NextRelease */}
      <div className="w-full max-w-screen-lg mb-16 md:mb-24 lg:mb-28 xl:mb-32">
        <NextRelease gameData={gameData} />
      </div>

      {/* Section Categories */}
      <div className="w-full max-w-screen-lg mb-16 md:mb-24 lg:mb-28 xl:mb-32">
        <Categories />
      </div>
    </div>
  );
}

export default HomePage;
