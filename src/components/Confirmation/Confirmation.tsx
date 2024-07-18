import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getThemeClass } from '../../Utils/themeUtils';
import { useTheme } from '../../context/ThemeContext';

const Confirmation: React.FC = () => {
  const { theme } = useTheme();
  const themeClass = getThemeClass(theme);

  return (
    <div className={`${themeClass}  bg-blue-custom-200 font-bold text-white min-h-screen flex flex-col items-center py-28`}>
     <h2 className="pb-10">Merci D'avoir passé votre commande, vos jeux sont desormais disponible !</h2>
     <Link
        to="/"
        className="bg-blue-custom-500 hover:bg-blue-custom-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      >
        Retourner à l'accueil
      </Link>
    </div>
  );
}

export default Confirmation;