import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ModalProfil from '../ModalProfil/ModalProfil';
import { useAuth } from "../../context/AuthContext";
import { useTheme, Theme } from '../../context/ThemeContext'; // Assurez-vous que Theme est importé correctement depuis ThemeContext

interface Game {
  id: number;
  name: string;
  picture: string;
}

interface HeaderProps {
  isModal: boolean;
  openModal: () => void;
  closeModal: () => void;
  gameData: Game[];
}

const Header: React.FC<HeaderProps> = ({ gameData, isModal, openModal, closeModal }) => {
  const { isLog, roles } = useAuth();
  const { theme, setTheme } = useTheme(); // Utilisation du contexte de thème
  const [gameName, setGameName] = useState<string>(''); // Update to string type
  const [searchResults, setSearchResults] = useState<Game[]>([])
  const location = useLocation();
  const isInscriptionPage = location.pathname === '/inscription';
  const navigate = useNavigate();

  if (isInscriptionPage) {
    return null;
  }

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value.toLowerCase();
  setGameName(value);

  if (value) {
    const results = gameData.filter((game) => game.name.toLowerCase().includes(value));
    setSearchResults(results.slice(0, 6)); // To Limit the results to 6
  } else {
    setSearchResults([]);
  }
};

    const handleGameSelection = () => {
      setGameName('');
      setSearchResults([]);
    };
  
      const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      navigate(`/search/${gameName}`);
      handleGameSelection();
    };

    

  // Fonction pour changer le thème
  const handleThemeChange = (newTheme: string) => {
    // Convertir la chaîne de caractères en type Theme
    const themeValue: Theme = newTheme as Theme;
    console.log(`Theme changed to: ${themeValue}`);
    setTheme(themeValue);
  };

  return (
    <header className={`relative ${theme}`}>
      <div className="flex flex-row md:flex-row items-center justify-between py-5 px-4">
        <div className="flex justify-center w-full md:w-1/3 mb-4 md:mb-0">
          {!isLog ? (
            <Link to="/connexion">
              <span className="bg-white text-blue-600 px-6 py-1 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 flex items-center space-x-2 text-xs font-semibold tablet:text-lg">
                Se connecter
              </span>
            </Link>
          ) : null}
        </div>

        <div className="flex flex-col items-center justify-center w-full md:w-1/3 space-y-2">
          <Link to="/">
            <img
              src="/src/assets/images/gamepad.svg"
              alt="Logo page accueil"
              className="w-12 h-12 hover:scale-110 hover:rotate-12 transition-transform duration-300"
            />
          </Link>
          <Link to="/">
            <h1 className="text-2xl text-white font-bold hover:text-blue-500 transition-colors duration-300">O'Play</h1>
          </Link>
        </div>

        <div className="flex flex-row w-full md:w-1/3 justify-center space-x-4">
          <Link to="/panier" className="flex items-center">
            <img
              onClick={openModal}
              src="/src/assets/images/profile-user.svg"
              alt="Profil"
              className="w-10 h-10 cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>

      <div className="flex justify-center pb-8 px-4">
        <form action="" className="relative w-full max-w-md">
          <input
            onChange={handleInputChange}
            value={gameName}
            type="text"
            name="gameSearch"
            placeholder="Recherche ton jeu"
            className="w-full py-2 pl-6 pr-4 rounded-full border border-gray-300 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-[-1rem] flex items-center pl-3"
            onClick={handleSearch}
          >
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-3 rounded-full">
              <img
                src="/src/assets/images/loupe.svg"
                alt="Bouton de recherche"
                className="w-6 h-6 text-white"
              />
            </div>
          </button>

        {/* Liste déroulante des résultats de recherche */}
        {searchResults.length > 0 && (
            <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg">
              <ul className="py-2">
                {searchResults.map((game) => (
                  <li key={game.id} className="hover:bg-gray-200">
                    <Link 
                      to={`/jeu/${game.id}`} 
                      className="block px-4 py-2 text-gray-800"
                      onClick={handleGameSelection}
                    >
                      {game.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </div>

      {isModal && <ModalProfil closeModal={closeModal} onThemeChange={handleThemeChange} />}
    </header>
  );
};

export default Header;


