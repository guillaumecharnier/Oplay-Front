import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getThemeClass } from '../../Utils/themeUtils';
import { useTheme } from '../../context/ThemeContext';

interface Game {
  id: number;
  name: string;
  picture: string;
}

interface SearchResultsProps {
  gameData: Game[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ gameData }) => {
   const { theme } = useTheme();
  const themeClass = getThemeClass(theme);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query')?.toLowerCase() || '';

  const results = gameData.filter((game) => game.name.toLowerCase().includes(query)).slice(0, 12); // Limit to 12 results

  return (
    <div className={`${themeClass} bg-blue-custom-200 min-h-screen flex flex-col items-center justify-start overflow-x-hidden`}>
      <ul className={`mx-auto grid grid-cols-1 gap-4 tablet:grid-cols-3`}>
        {results.map((game) => (
        //    <Link
        //    key={element.id}
        //    to={`/jeu/${element.id}`}
        //    className="group flex flex-col items-center"
        //  >
          <li key={game.id} className='p-10 flex flex-col items-center justify-center'>
            <img src={game.picture} alt={game.name} className="w-72 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" />
            <h3 className="xl:text-xl text-blue-100 mt-5 text-center">{game.name}</h3>
          </li>
          // </Link>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;