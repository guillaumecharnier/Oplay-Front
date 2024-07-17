import React from 'react';
import { Link } from 'react-router-dom';
import { getThemeClass } from '../../Utils/themeUtils';
import { useTheme } from '../../context/ThemeContext';

// Définition des types pour les données des jeux
interface Game {
  id: number;
  name: string;
  picture: string;
}

// Définition des props du composant LastAdditions
interface LastAdditionsProps {
  gameData: Game[];
}

// Fonction utilitaire pour obtenir les six derniers éléments
const getLastSixItems = (gameData: Game[]): Game[] => {
  if (!gameData) {
    return [];
  }
  return gameData.slice(-6);
}

// Composant LastAdditions
const LastAdditions: React.FC<LastAdditionsProps> = ({ gameData }) => {
  const { theme } = useTheme();
  const themeClass = getThemeClass(theme);

  // Utilisation de la fonction pour obtenir les six derniers jeux
  const lastSixGames = getLastSixItems(gameData);

  return (
    <div className={`pt-6 ${themeClass} w-full max-w-7xl px-4 pb-16 mx-auto`}>
      <Link to="/derniere-ajout" className="block mb-16">
        <h2 className="text-lg sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-blue-100 flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 hover:text-blue-300">
          <span className="font-semibold hover:text-blue-300">Derniers ajouts</span>
        </h2>
      </Link>
      <div className="grid grid-cols-1 gap-8 tablet:grid-cols-3">
        {lastSixGames.map((element) => (
          <Link
            key={element.id}
            to={`/jeu/${element.id}`}
            className="group flex flex-col items-center"
          >
            <img
              src={element.picture}
              alt={element.name}
              className="w-72 h-80 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
            />
            <h3 className="md:text-lg lg:text-xl xl:text-xl text-blue-100 mt-5 text-center">
              {element.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LastAdditions;





