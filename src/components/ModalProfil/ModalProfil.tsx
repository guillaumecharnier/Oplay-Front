import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

interface ModalProfilProps {
  closeModal: () => void;
}

const ModalProfil: React.FC<ModalProfilProps> = ({ closeModal }) => {
  const { isLog, roles, logout } = useAuth();
  const isAdmin = roles && roles.includes('ROLE_ADMIN');
  const { setTheme } = useTheme();

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
      <div className="relative bg-blue-custom-200 text-white p-6 rounded-lg shadow-lg laptop:w-96">
        <button
          className="absolute top-4 right-4 text-3xl hover:text-red-500 focus:outline-none"
          onClick={closeModal}
        >
          x
        </button>

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
              to="/test-personnalite"
              className="hover:bg-blue-500 px-4 py-2 rounded-lg hover:text-white transition-colors duration-300"
              onClick={closeModal}
            >
              Test personnalisé
            </Link>
            {isAdmin && (
              <Link
                to="http://localhost:8080"
                className="hover:bg-blue-500 px-4 py-2 rounded-lg hover:text-white transition-colors duration-300"
                onClick={closeModal}
              >
                Back Office
              </Link>
            )}
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
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => setTheme('strategie')} className="p-2 bg-indigo-900 text-white rounded">Strategie</button>
              <button onClick={() => setTheme('horror')} className="p-2 bg-red-900 text-white rounded">Horror</button>
              <button onClick={() => setTheme('action')} className="p-2 bg-gray-800 text-white rounded">Action</button>
              <button onClick={() => setTheme('aventure')} className="p-2 bg-green-600 text-white rounded">Aventure</button>
              <button onClick={() => setTheme('online')} className="p-2 bg-pink-400 text-white rounded">Online</button>
              <button onClick={() => setTheme('sport')} className="p-2 bg-yellow-600 text-white rounded">Sport</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProfil;
