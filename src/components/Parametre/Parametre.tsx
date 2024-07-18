import React from "react";
import { useTheme } from '../../context/ThemeContext';
import { Link } from "react-router-dom";
import { getThemeClass } from '../../Utils/themeUtils';

function Parametre() {
  const { theme } = useTheme();
  const themeClass = getThemeClass(theme);

  return (
    <div className={`${themeClass} p-10 flex justify-center items-center h-screen`}>
      <div className="h-3/4 p-10 flex rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-1/2">
        <ul className="text-white w-full space-y-2 flex flex-col justify-between h-full">
          <li className="rounded-md hover:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 pl-2 hover:text-black text-base">
            <Link to="/test-personnalite">Test personnalisé</Link>
          </li>
          <li className="rounded-md hover:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 pl-2 hover:text-black text-base">Langue/ devise</li>
          <li className="rounded-md hover:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 pl-2 hover:text-black text-base">Historique</li>
          <li className="rounded-md hover:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 pl-2 hover:text-black text-base">Facturation</li>
          <li className="rounded-md hover:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 pl-2 hover:text-black text-base">Confidentialités</li>
          <li className="rounded-md hover:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 pl-2 hover:text-black text-base">Notification</li>
          <li className="rounded-md hover:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 pl-2 hover:text-black text-base">Mail /Mot de passe</li>
        </ul>
      </div>
    </div>
  );
}

export default Parametre;
