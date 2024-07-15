import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from '../../context/ThemeContext';
import GandalfPDP from '../../assets/images/GandalfPDP.jpeg'; // Assurez-vous que le chemin est correct

function Edit() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme} text-white py-16 px-8 flex flex-col items-center`}>
      <div className="w-full max-w-3xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg shadow-2xl p-8 relative">
        {/* Boutons d'édition et de paramètres */}
        <div className="absolute top-4 right-4 flex space-x-4">
          <Link to="/profil" className="text-white hover:text-gray-300">
            <img className="w-8" src="/src/assets/images/edit.svg" alt="Retour au profil" />
          </Link>
          <Link to="/parametre" className="text-white hover:text-gray-300">
            <img className="w-8" src="/src/assets/images/setter.svg" alt="Paramètres" />
          </Link>
        </div>
        {/* Section du profil */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img 
              src={GandalfPDP}
              className="w-32 h-32 rounded-full border-4 border-gray-700" 
              alt="Photo de profil" 
            />
            <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-yellow-400 via-red-500 to-pink-500" />
          </div>
          <input
            className="text-3xl h-16 w-full max-w-lg rounded-md pl-6 text-black"
            type="text"
            placeholder="Pseudo"
          />
        </div>
        {/* Bouton de changement */}
        <div className="flex justify-center py-16">
          <button className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-black font-bold rounded-full w-28 h-12 hover:from-pink-500 hover:via-red-500 hover:to-yellow-400 transition duration-300">
            Changer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;


