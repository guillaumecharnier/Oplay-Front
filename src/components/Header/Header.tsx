import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ModalProfil from '../ModalProfil/ModalProfil';
interface HeaderProps {
  isModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}
const Header: React.FC<HeaderProps> = ({ isModal, openModal, closeModal }) => {
  const location = useLocation();
  // Vérifiez si l'URL actuelle est `/inscription`
  const isInscriptionPage = location.pathname === '/inscription';
  // Ne pas afficher le Header sur la page d'inscription
  if (isInscriptionPage) {
    return null;
  }

  return (
    <header className="bg-blue-custom-200 relative">
      <div className="flex flex-row md:flex-row items-center justify-between py-5 px-4">
        {/* Section Se connecter */}
        <div className="flex justify-center w-full md:w-1/3 mb-4 md:mb-0">
          <Link
            to="/connexion"
            className="bg-white text-blue-600 px-6 py-1 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 flex items-center space-x-2 text-xs md:text-lg"
          >
            <span className="text-lg font-semibold">Se connecter</span>
          </Link>
        </div>
        {/* Logo et titre */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/3 space-y-2">
          <Link to="/">
            <img
              src="src/assets/images/gamepad.svg"
              alt="Logo page accueil"
              className="w-12 h-12"
            />
          </Link>
          <Link to="/">
            <h1 className="text-2xl text-white font-bold">O'Play</h1>
          </Link>
        </div>
        {/* Panier et Profil */}
        <div className="flex flex-row w-full md:w-1/3 justify-center space-x-4">
          <Link to="/panier" className="flex items-center">
            <img
              src="src/assets/images/shop.svg"
              alt="Panier"
              className="w-10 h-10 hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <img
            onClick={openModal}
            src="src/assets/images/profile-user.svg"
            alt="Profil"
            className="w-10 h-10 cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      {/* Formulaire de recherche */}
      <div className="flex justify-center pb-8 px-4">
        <form action="" className="relative w-full max-w-md">
          <input
            type="text"
            name="gameSearch"
            placeholder="Recherche ton jeu"
            className="w-full py-2 pl-6 pr-4 rounded-full border border-gray-300 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-[-1rem] flex items-center pl-3"
          >
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-3 rounded-full">
              <img
                src="src/assets/images/loupe.svg"
                alt="Bouton de recherche"
                className="w-6 h-6 text-white"
              />
            </div>
          </button>
        </form>
      </div>
      {isModal && <ModalProfil closeModal={closeModal} />}
    </header>
  );
};
export default Header;