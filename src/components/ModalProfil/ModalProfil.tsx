import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface ModalProfilProps {
  closeModal: () => void;
  onThemeChange: (theme: string) => void;
}

const ModalProfil: React.FC<ModalProfilProps> = ({ closeModal, onThemeChange }) => {
  const { isLog, logout } = useAuth();

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div 
      className="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-50 z-10 flex items-center justify-center" 
      onClick={handleBackdropClick}
    >
      <div className="relative bg-blue-custom-200 text-white p-6 rounded-lg shadow-lg laptop:w-96" onClick={(e) => e.stopPropagation()}>
        {/* Icone de fermeture */}
        <button
          className="absolute top-4 right-4 text-3xl hover:text-red-500 focus:outline-none"
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
            {isLog && (
              <button
                className="hover:bg-red-600 px-4 py-2 rounded-lg hover:text-white transition-colors duration-300"
                onClick={() => {
                  logout();
                  closeModal();
                }}
              >
                Déconnexion
              </button>
            )}
          </div>
          <div className="p-6 rounded shadow-lg bg-blue-900">
            <h2 className="text-xl mb-4 text-black"></h2>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => onThemeChange('light')} className="p-2 bg-indigo-900 text-white rounded">Light</button>
              <button onClick={() => onThemeChange('horror')} className="p-2 bg-red-900 text-white rounded">Horror</button>
              <button onClick={() => onThemeChange('action')} className="p-2 bg-gray-800 text-white rounded">Action</button>
              <button onClick={() => onThemeChange('aventure')} className="p-2 bg-green-600 text-white rounded">Aventure</button>
              <button onClick={() => onThemeChange('online')} className="p-2 bg-pink-400 text-whiterounded rounded">Online</button>
              <button onClick={() => onThemeChange('sport')} className="p-2 bg-yellow-600 text-whiterounded rounded">Sport</button>
              <button onClick={() => onThemeChange('strategie')} className="p-2 bg-purple-700 text-white rounded">Strategie</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProfil;





