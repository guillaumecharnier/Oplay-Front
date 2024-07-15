import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from '../Theme/ThemeContext';

function Profil() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme} text-white py-16 px-8 flex flex-col items-center`}>
      <div className="w-full max-w-3xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg shadow-2xl p-8 relative">
        {/* Boutons d'édition et de paramètres */}
        <div className="absolute top-4 right-4 flex space-x-4">
          <Link to="/profil/edit" className="text-white hover:text-gray-300">
            <img className="w-8" src="/src/assets/images/edit.svg" alt="Éditer le profil" />
          </Link>
          <Link to="/parametre" className="text-white hover:text-gray-300">
            <img className="w-8" src="/src/assets/images/setter.svg" alt="Paramètres" />
          </Link>
        </div>
        {/* Section du profil */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img 
              src="src/assets/images/GandalfPDP.jpeg" 
              className="w-32 h-32 rounded-full border-4 border-gray-700" 
              alt="Photo de profil" 
            />
            <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-yellow-400 via-red-500 to-pink-500" />
          </div>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-red-500">
            Gandalf2578
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Profil;
