import React from "react";
import { useTheme } from '../Theme/ThemeContext';
import { Link } from "react-router-dom";

function Parametre() {
  const { theme } = useTheme(); // Récupération du thème

  return (
    <div className="p-10 flex">
      <div className={`min-h-screen ${theme} p-10 flex rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  w-1/2 `}>
        <ul className="text-white leading-[5rem] pl-5">
          <li className=" rounded-md hover:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 pl-2 hover:text-black md:border-b-2">
          <Link to="/test-personnalie">Test personnalisé</Link>
          </li>
          <li className=" rounded-md hover:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 pl-2 hover:text-black md:border-b-2">Langue/ devise</li>
          <li className=" rounded-md hover:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 pl-2 hover:text-black md:border-b-2">Historique</li>
          <li className=" rounded-md hover:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 pl-2 hover:text-black md:border-b-2">Facturation</li>
          <li className=" rounded-md hover:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 pl-2 hover:text-black md:border-b-2">Confidentialités</li>
          <li className=" rounded-md hover:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 pl-2 hover:text-black md:border-b-2">Notification</li>
          <li className=" rounded-md hover:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 pl-2 hover:text-black">Mail /Mot de passe</li>
        </ul>
      </div>
      {/* <div className="bg-red-500 w-1/2"></div> */}
    </div>
  );
}

export default Parametre;