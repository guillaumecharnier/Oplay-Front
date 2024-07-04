import React from 'react';
import { Link } from 'react-router-dom';

function NextRelease({ gameData }) {

  // const getSixLatestReleaseDates = (gamesData) => {
  //   // Convertir les dates en objets Date et trier par releaseDate décroissant
  //   const sortedGames = gamesData.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
  //   console.log('sortedgames', sortedGames);
  //   // Sélectionner les 6 premiers éléments du tableau trié
  //   const latestSixDates = sortedGames.slice(0, 6).map(game => game);
  //   console.log(latestSixDates);
  //   return latestSixDates;
  // };
  // const lastSixGames = getSixLatestReleaseDates(gameData);
  // console.log(lastSixGames);

  return (
    <div className="mt-6 w-full max-w-7xl px-4 mb-16 mx-auto">
      {/* Titre avec l'icône */}
      <Link to="#" className="block mb-16">
        <h2 className="text-lg sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-blue-100 flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 hover:text-blue-300">
          <span className="font-semibold hover:text-blue-300">Sorties 2024</span>
        </h2>
      </Link>

      {/* Grille d'images avec espace supplémentaire */}
      <div className="grid grid-cols-3 gap-8">
        {/* Premier jeu */}
        <Link
          to="lien-vers-le-jeu-1"
          className="group flex flex-col items-center"
        >
          <img
            src="/src/assets/images/HomePagePicture.jpg"
            alt="Jeu 1"
            className="w-40 h-32 sm:w-44 sm:h-36 md:w-48 md:h-40 lg:w-64 lg:h-56 xl:w-72 xl:h-64 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <h3 className="text-sm md:text-lg lg:text-xl xl:text-2xl text-blue-100 mt-2 text-center">
            Jeu 1
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default NextRelease;


