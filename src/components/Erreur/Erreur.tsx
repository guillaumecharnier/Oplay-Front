import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Theme/ThemeContext'; // Assurez-vous du chemin correct

function Erreur() {
  const { theme } = useTheme(); // Récupération du thème

  return (
    <div className={`min-h-screen ${theme} flex flex-col items-center justify-center p-5 text-white text-center`}>
      {/* Image d'erreur */}
      <img
        src="/src/assets/images/icons-dark-vador.svg" // Assurez-vous que le chemin est correct selon votre structure de projet
        alt="Erreur 404"
        className="w-1/4 max-w-xs mb-6"
      />
      {/* Message d'erreur */}
      <h1 className="text-3xl font-bold mb-4">Oups !</h1>
      <p className="text-lg mb-6">La page que vous recherchez n'existe pas.</p>
      {/* Bouton de retour à l'accueil */}
      <Link
        to="/"
        className="bg-blue-custom-500 hover:bg-blue-custom-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      >
        Retourner à l'accueil
      </Link>
    </div>
  );
}

export default Erreur;

