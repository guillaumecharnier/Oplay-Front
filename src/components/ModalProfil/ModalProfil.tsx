import React from 'react';
import { Link } from "react-router-dom";
import ThemeSwitcher from '../Theme/ThemeSwitcher';

interface ModalProfilProps {
  closeModal: () => void;
  onThemeChange: (theme: string) => void;
}

const ModalProfil: React.FC<ModalProfilProps> = ({ closeModal, onThemeChange }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-50 z-10 flex items-center justify-center">
      <div className="relative bg-blue-custom-200 text-white p-6 rounded-lg shadow-lg laptop:w-96">
        {/* Icone de fermeture */}
        <button
          className="absolute top-4 right-4 text-3xl hover:text-gray-300 focus:outline-none"
          onClick={closeModal}
        >
          x
        </button>

        {/* Contenu du Modal */}
        <div className="flex flex-col items-center space-y-6">
          <img
            src="/src/assets/images/profile-user.svg"
            alt="Image de profil"
            className="w-24 h-24 border-white mb-4"
          />
          <div className="flex flex-col space-y-4 text-xl">
            <Link
              to="/profil"
              className="hover:bg-blue-500 px-4 py-2 rounded-lg hover:text-white transition-colors duration-300"
              onClick={closeModal}
            >
              Profil
            </Link>
            <Link
              to="/parametre"
              className="hover:bg-blue-500 px-4 py-2 rounded-lg hover:text-white transition-colors duration-300"
              onClick={closeModal}
            >
              Paramètres
            </Link>
            <Link
              to="/"
              className="hidden hover:bg-red-600 px-4 py-2 rounded-lg hover:text-white transition-colors duration-300"
              //TODO if connected to add deconnection button
              onClick={closeModal}
            >
              Déconnexion
            </Link>
          </div>
          <div className="p-6 rounded shadow-lg">
            <h2 className="text-xl mb-4 text-black"></h2>
            <button onClick={() => onThemeChange('light')} className="m-2 p-2 bg-pink-400 text-white rounded">Light</button>
            <button onClick={() => onThemeChange('horror')} className="m-2 p-2 bg-gray-200 text-black rounded">Horror</button>
            <button onClick={() => onThemeChange('action')} className="m-2 p-2 bg-gray-800 text-white rounded">Action</button>
            <button onClick={() => onThemeChange('aventure')} className="m-2 p-2 bg-green-500 text-black rounded">Aventure</button>
            <button onClick={() => onThemeChange('online')} className="m-2 p-2 bg-blue-900 text-cyan-300 rounded">Online</button>
            <button onClick={() => onThemeChange('sport')} className="m-2 p-2 bg-yellow-300 text-red-900 rounded">Sport</button>
            <button onClick={() => onThemeChange('strategie')} className="m-2 p-2 bg-purple-700 text-lime-300 rounded">Strategie</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProfil;

