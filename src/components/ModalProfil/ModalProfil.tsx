import { Link } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import { useState, useEffect } from 'react';

interface ModalProfilProps {
  closeModal: () => void;
}

function ModalProfil({ closeModal }: ModalProfilProps) {
  const { isLog, logout } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isActionMode, setIsActionMode] = useState(false);

  // Fonction pour basculer entre les thèmes Dark et Light
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  // Charger le thème stocké dans le localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

 // Fonction pour basculer entre les modes Action et Light
  const toggleActionMode = () => {
    const newActionMode = !isActionMode;
    setIsActionMode(newActionMode);
    document.documentElement.classList.toggle('action', newActionMode);
    if (newActionMode) {
      localStorage.setItem('theme', 'action');
    } else {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
  };


  // Charger le thème stocké dans le localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsActionMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  return (
    <div className={`fixed top-0 left-0 h-screen w-full bg-black bg-opacity-50 z-10 flex items-center justify-center ${isDarkMode ? 'dark' : ''}`}>
      <div className={`relative bg-blue-custom-200 text-white p-6 rounded-lg shadow-lg laptop:w-96 ${isDarkMode ? 'dark:bg-blue-900' : ''}`}>
        {/* Closing cross */}
        <button
          className="absolute top-4 right-4 text-3xl hover:text-gray-300 focus:outline-none"
          onClick={closeModal}
        >
          x
        </button>

        {/* Modal content */}
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
                  logout(); // Appeler la fonction de déconnexion
                  closeModal();
                }}
              >
                Déconnexion
              </button>
            )}
          </div>
          {/* Theme Buttons */}
          <div className="flex flex-row justify-center space-x-2 mt-6">
          <button
            onClick={toggleDarkMode}
            className="bg-blue-500 text-white p-2 rounded hover:bg-black dark:bg-black-700 dark:hover:bg-blue-800"
          >
            {isDarkMode ? '🌞 Mode Clair' : '🌙 Mode Sombre'}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalProfil;

