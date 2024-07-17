import React from 'react';
import { Link } from 'react-router-dom';
import { GameData } from '../../assets/type';
import { getThemeClass } from '../../Utils/themeUtils';
import { useTheme } from '../../context/ThemeContext';

interface IGameData {
  gameData: GameData[];
}

function NextRelease({ gameData }:IGameData) {
  const { categoryData, theme } = useTheme();
  const themeClass = getThemeClass(theme);

  const getSixLatestReleaseDates = (gamesData) => {
    // Converts dates in Date objects and order by releasedDate
    const sortedGames = gamesData.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime() );
    
    // Select the 6 first elements of the array
    const latestSixDates = sortedGames.slice(0, 6).map(game => game);
    return latestSixDates;
  };
  const lastRealeasedGames = getSixLatestReleaseDates(gameData);
  // console.log('lastRealeasedGames', lastRealeasedGames);

  return (
    <div className={`pt-6 ${themeClass} w-full max-w-7xl px-4 mb-16 mx-auto`}>
      <Link to="/derniere-sortie" className="block mb-16">
        <h2 className="text-lg sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-blue-100 flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 hover:text-blue-300">
          <span className="font-semibold hover:text-blue-300">Sorties 2024</span>
        </h2>
      </Link>
      <div className="grid grid-cols-1 gap-8 tablet:grid-cols-3">
      {lastRealeasedGames.map((element) => ( 
        <Link
          key={element.id}
          to={`/jeu/${element.id}`}
          className="group flex flex-col items-center"
        >
          <img
            src={element.picture}
            alt={element.name}
            className=" w-72 h-80 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
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

export default NextRelease;


