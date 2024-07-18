import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

interface ModalProfilProps {
  closeModal: () => void;
}

const ModalProfil: React.FC<ModalProfilProps> = ({ closeModal }) => {
  const { isLog, roles, logout } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const { postThemeData } = useTheme();

  const themes = [
    { id: 1, name: 'Action', color: 'bg-gray-800' },
    { id: 2, name: 'Aventure', color: 'bg-green-600' },
    { id: 3, name: 'Horror', color: 'bg-red-900' },
    { id: 4, name: 'Multiplayer', color: 'bg-pink-400' },
    { id: 5, name: 'Simulation', color: 'bg-indigo-900' },
    { id: 6, name: 'Sport', color: 'bg-yellow-600' },
  ];

  useEffect(() => {
    console.log('Roles updated:', roles);
    if (roles && roles.includes('ROLE_ADMIN')) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [roles]);

  useEffect(() => {
    console.log('isLog updated:', isLog);
  }, [isLog]);

  
  useEffect(() => {
    // Function to handle the BackOffice login event
    const handleFBLogin = (response) => {
      if (window.FB && window.FB.XFBML) {
        window.FB.XFBML.parse();
      } else {
        console.log('Button BackOffice not loaded');
      }
    };
  
    // Subscribe to the Facebook login event
    if (window.FB) {
      window.FB.Event.subscribe('auth.login', handleFBLogin);
    } else {
      console.log('Button BackOffice not loaded');
    }
  
    // Clean up the event subscription on component unmount
    return () => {
      if (window.FB) {
        window.FB.Event.unsubscribe('auth.login', handleFBLogin);
      }
    };
  }, []);
  


  useEffect(() => {
    // Vérifier si l'utilisateur est connecté en tant qu'admin
    const checkAdminStatus = async () => {
      // Exemple de logique asynchrone pour vérifier les rôles
      if (isLog) {
        try {
          // Ici, vous pouvez effectuer une requête ou une vérification nécessaire pour obtenir les rôles
          // Exemple: const roles = await fetchRoles();
          const isAdmin = roles && roles.includes('ROLE_ADMIN');
          setIsAdmin(isAdmin);
        } catch (error) {
          console.error('Erreur lors de la récupération des rôles:', error);
        }
      }
    };
  
    // Appeler la fonction de vérification
    checkAdminStatus();
  }, [isLog, roles]);
  
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

          {isLog ? (
          <Link
            to="/profil"
            className="hover:bg-blue-500 px-4 py-2 rounded-lg hover:text-white transition-colors duration-300"
            onClick={closeModal} >
            Profil
          </Link> ) :
          <Link
            to="/connexion"
            className="hover:bg-blue-500 px-4 py-2 rounded-lg hover:text-white transition-colors duration-300"
            onClick={closeModal}
            // peut etre faire appel a profildetail sinon la mise a jour ne fonctionne pas ? 
          >
            Profil

          </Link> }
            {/* <Link à voir pour plus tard 
              to="/parametre"
              className="hover:bg-blue-500 px-4 py-2 rounded-lg hover:text-white transition-colors duration-300"
              onClick={closeModal}
            >
              Paramètres
            </Link> */}
            {isLog ? (
            <Link
              to="/test-personnalite"
              className="hover:bg-blue-500 px-4 py-2 rounded-lg hover:text-white transition-colors durée-300"
              onClick={closeModal}
            >
              Test personnalisé
            </Link> ) : <Link
              to="/profil"
              className="hover:bg-blue-500 px-4 py-2 rounded-lg hover:text-white transition-colors duration-300"
              onClick={closeModal}
            >
            </Link>}

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
              <Link to="/connexion">
                <button
                  className="hover:bg-red-600 px-4 py-2 rounded-lg hover:text-white transition-colors duration-300"
                  onClick={() => {
                    logout();
                    closeModal();
                  }}
                >
                  Déconnexion
                </button>
              </Link>
            )}
          </div>
          <div className="p-6 rounded shadow-lg bg-blue-900">
            <div className="grid grid-cols-2 gap-2">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => postThemeData(theme.id)}
                  className={`p-2 text-white rounded ${theme.color}`}
                >
                  {theme.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProfil;


