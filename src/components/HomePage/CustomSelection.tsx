import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from './HomePage'; // Assurez-vous d'importer le type Game depuis votre composant HomePage

interface CustomSelectionProps {
  gameData: Game[];
  onCategorySelect: (category: string) => void;
}

// Fonction utilitaire pour limiter à 6 jeux
const getLimitedGames = (gameData: Game[]): Game[] => {
  return gameData.slice(0, 6); // Limite à 6 jeux
}

const CustomSelection: React.FC<CustomSelectionProps> = ({ gameData, onCategorySelect }) => {
  const limitedGameData = getLimitedGames(gameData);

  return (
    <div className="mt-6 w-full max-w-7xl px-4 mb-16 mx-auto">
      <Link to="/selection-personnalisee" className="block mb-16">
        <h2 className="text-lg sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-blue-100 flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 hover:text-blue-300">
          <span className="font-semibold hover:text-blue-300">Sélection personnalisée</span>
        </h2>
      </Link>
      <div className="grid grid-cols-1 gap-8 tablet:grid-cols-3">
        {limitedGameData.map((game) => (
          <Link
            key={game.id}
            to={`/jeu/${game.id}`}
            className="group flex flex-col items-center"
          >
            <img
              src={game.picture}
              alt={game.name}
              className="w-72 h-80 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
            />
            <h3 className="md:text-lg lg:text-xl xl:text-xl text-blue-100 mt-5 text-center">
              {game.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CustomSelection;
