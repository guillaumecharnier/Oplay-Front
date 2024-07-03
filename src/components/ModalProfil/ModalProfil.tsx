import { Link } from "react-router-dom";

interface ModalProfilProps {
  closeModal: () => void;
}

function ModalProfil({ closeModal }: ModalProfilProps) {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-50 z-10 flex items-center justify-center">
      <div className="relative bg-blue-custom-200 text-white p-6 rounded-lg shadow-lg laptop:w-80 laptop:h-[30rem] laptop:border-[0.1rem] border-gray-300">
        {/* Icone de fermeture */}
        <button
          className="absolute top-4 right-4 text-3xl hover:text-gray-300 focus:outline-none"
          onClick={closeModal}
        >
          x
        </button>

        {/* Contenu du Modal */}
        <div className="flex flex-col items-center space-y-6">
          <img
            src="src/assets/images/profile-user.svg"
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
            <Link
              to="/"
              className="tablet:hidden hover:bg-red-600 px-4 py-2 rounded-lg hover:text-white transition-colors duration-300"
              onClick={closeModal}
            >
              Déconnexion
            </Link>
          </div>
          {/* Couleurs de bordure */}
          <div className="flex flex-row space-x-2 mt-6">
            <span className="w-8 h-8 rounded-full border border-black bg-red-500"></span>
            <span className="w-8 h-8 rounded-full border border-black bg-blue-500"></span>
            <span className="w-8 h-8 rounded-full border border-black bg-orange-500"></span>
            <span className="w-8 h-8 rounded-full border border-black bg-green-500"></span>
            <span className="w-8 h-8 rounded-full border border-black bg-purple-500"></span>
            <span className="w-8 h-8 rounded-full border border-black bg-yellow-500"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalProfil;
