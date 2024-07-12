import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from '../Theme/ThemeContext';

function Profil() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme} text-white py-16 px-8 flex flex-col items-center`}>
      <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg p-8 relative">
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
        <div className="flex items-center space-x-8">
          <img src="/src/assets/images/profile-user.svg" className="w-32 h-32" alt="Photo de profil" />
          <h2 className="text-4xl font-bold">Pseudo</h2>
        </div>
      </div>
    </div>
  );
}

export default Profil;
