import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getThemeClass } from '../../Utils/themeUtils';
import { useTheme } from '../../context/ThemeContext';
import { useUser } from '../../context/UserContext';

interface Game {
  id: number;
  name: string;
  price: number;
  picture: string;
  categories: string[];
}

interface CustomSelectionProps {
  filteredGames: Game[];
  onCategorySelect: (category: string) => void;
}

const CustomSelection: React.FC<CustomSelectionProps> = ({ gameData }) => {
  const { theme } = useTheme();
  const themeClass = getThemeClass(theme);
  const { setFilteredGames } = useUser();

  const { user, userCategory, userTag } = useUser();
  // console.log('usercategory',userCategory, 'usertag',userTag);
  // console.log(gameData);
  // gamedata est undefined

  if (!userCategory || !userTag) {
    console.log('loading');
    // return <div>Loading...</div>;
  }

  // Filtrer les jeux en fonction des catégories et des tags sélectionnés par l'utilisateur
  const filteredGames = gameData.filter((game) => {
    const gameCategoryIds = game.hasCategory.map((cat) => cat.id);
    const gameTagIds = game.hasTag.map((tag) => tag.id);

    const matchesCategory = userCategory.some((userCat) =>
      gameCategoryIds.includes(userCat.id)
    );

    const matchesTag = userTag.some((userTag) =>
      gameTagIds.includes(userTag.id)
    );
  
    return matchesCategory || matchesTag;
  }).slice(0, 6);

  useEffect
  setFilteredGames

  useEffect(() => {
    if (filteredGames) {
      setFilteredGames(filteredGames);
    }
  }, []);

  return (
    <div className={`pt-6 ${themeClass} w-full max-w-7xl px-4 pb-16 mx-auto`}>
      <Link to="/selection-perso" className="block mb-16">
        <h2 className="text-lg sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-blue-100 flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 hover:text-blue-300">
          <span className="font-semibold hover:text-blue-300">Sélection personnalisée</span>
        </h2>
      </Link>
      <div className="grid grid-cols-1 gap-8 tablet:grid-cols-3">
        {filteredGames.map((game) => (
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
};

export default CustomSelection;
