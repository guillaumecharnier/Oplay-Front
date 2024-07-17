

import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { GameData } from '../../assets/type'; // Assurez-vous que ce chemin est correct

interface DernierAjoutProps {
  gameData: GameData[];
}

const DernierAjout: React.FC<DernierAjoutProps> = ({ gameData }) => {
  const sortedGames = useMemo(() => {
    return gameData
      .sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
  }, [gameData]);

  return (
    <div className="bg-blue-custom-200 min-h-screen flex flex-col items-center justify-start overflow-x-hidden">
      {/* Image de couverture */}
      <div className="relative w-full mb-12 flex justify-center">
        <div className="absolute top-4 md:left-6 lg:left-8">
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Derniers Ajouts - Découvrez Les Nouveautés!
          </p>
        </div>
      </div>

      {/* Titre de la section */}
      <div className="w-full max-w-screen-lg px-4 mb-12 mx-auto">
        <div className="mt-6">
          <h2 className="text-lg sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-blue-100 flex items-center justify-center space-x-2 mb-12">
            <span className="font-semibold">Derniers Ajouts</span>
          </h2>

          {/* Grille d'images de jeux */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {sortedGames.map((game) => (
              <div key={game.id} className="group flex flex-col items-center">
                <Link to={`/jeu/${game.id}`} className="block">
                  <img
                    src={game.picture}
                    alt={game.name}
                    className="w-40 h-32 sm:w-44 sm:h-36 md:w-48 md:h-40 lg:w-56 lg:h-48 xl:w-64 xl:h-56 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
                  />
                  <h3 className="text-sm md:text-lg lg:text-xl xl:text-2xl text-blue-100 mt-2 text-center">
                    {game.name}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DernierAjout;