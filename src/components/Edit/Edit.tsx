import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from '../Theme/ThemeContext';

function Edit() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme} text-white py-16 px-8 flex flex-col items-center`}>
      <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg p-8 relative">
        {/* Boutons d'édition et de paramètres */}
        <div className="absolute top-4 right-4 flex space-x-4">
          <Link to="/profil" className="text-white hover:text-gray-300">
            <img className="w-8" src="/src/assets/images/edit.svg" alt="Éditer le profil" />
          </Link>
          <Link to="/parametre" className="text-white hover:text-gray-300">
            <img className="w-8" src="/src/assets/images/setter.svg" alt="Paramètres" />
          </Link>
        </div>
        {/* Section du profil */}
        <div className="flex items-center space-x-8">
          <img src="/src/assets/images/profile-user.svg" className="w-32 h-32" alt="Photo de profil" />
          <input
            className="text-3xl h-16 w-full max-w-lg rounded-md pl-6 text-black"
            type="text"
            placeholder="Pseudo"
          />
        </div>
        {/* Bouton de changement */}
        <div className="flex justify-center py-16">
          <button className="bg-white text-black rounded-full w-28 h-12 hover:bg-gray-300 transition duration-300">
            Changer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
