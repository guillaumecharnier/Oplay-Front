import React from 'react';
import { useTheme } from '../../context/ThemeContext'; // Assurez-vous d'importer useTheme depuis votre contexte ThemeContext
import { GameData } from '../../assets/type';
import { getThemeClass } from '../../Utils/themeUtils';
import { useAuth } from "../../context/AuthContext";
import CustomSelection from './CustomSelection';
import LastAdditions from './LastAdditions';
import Categories from './Categories';
import NextRelease from './NextRelease';

interface HomePageProps {
  gameData: GameData[];
  categoryData: any;
}

const HomePage: React.FC<HomePageProps> = ({ gameData }) => {
  const { theme } = useTheme(); 
  const { isLog } = useAuth(); 

  const themeClass = getThemeClass(theme);

  return (
    <div className={`${themeClass} min-h-screen flex flex-col items-center justify-start overflow-x-hidden`}>
      {/* Image de couverture */}
      <div className="relative w-full mb-36 flex justify-center">
        <img
          src="src/assets/images/Last-Of-Us.jpeg"
          alt="Cover Image"
          className="w-full max-h-80 object-cover shadow-lg"
        />
        <div className="absolute top-4 md:left-6 lg:left-8">
          <p className={`text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`}>
            The Last Of Us Part I - $39.99
          </p>
        </div>
      </div>

      {/* Section CustomSelection */}
      {isLog ? (
      <div className="w-full max-w-screen-lg mb-16 md:mb-24 lg:mb-28 xl:mb-32">
        <CustomSelection gameData={gameData} />
      </div> ): ''}

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
