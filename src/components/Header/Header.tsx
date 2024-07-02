import ModalProfil from '../ModalProfil/ModalProfil';

interface HeaderProps {
  isModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ isModal, openModal, closeModal }) => {
  return (
    <header className="bg-blue-custom-200 relative">
      <div className="flex items-center justify-center py-5 ">
      <div className="w-1/3 flex justify-center">
        <a 
          href="/connexion" 
          className="text-lg pt-8 text-white font-bold font-sans hover:text-gray-300 transition duration-300"
        >
          Se connecter
        </a>
      </div>


        <div className="w-1/3 flex flex-col items-center justify-center space-y-2">
          <a href="/">
            <img
              src="src/assets/images/gamepad.svg"
              alt="Logo page accueil"
              className="w-12 h-12"
            />
          </a>
          <a href="/">
            <h1 className="text-xl text-white font-bold">O'Play</h1>
          </a>
        </div>

        <div className="flex flex-row w-1/3 justify-center">
          {/* If connected don't show "Se connecter" */}

          <a href="/panier" className="px-4">
            <img
              src="src/assets/images/shop.svg"
              alt="panier"
              className="w-10"
            />
          </a>

          {/* Add click to this profil picture that open the modal */}
          <img
            onClick={openModal}
            src="src/assets/images/profile-user.svg"
            alt="Profil"
            className="w-10"
          />
        </div>
      </div>
      <div className="flex justify-center pb-8 px-8">
  <form action="" className="relative w-full max-w-md">
    <input
      type="text"
      name="gameSearch"
      placeholder="Recherche ton jeu"
      className="w-full py-2 pl-6 pr-4 rounded-full border border-gray-300 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
    <button
      type="submit"
      className="absolute inset-y-0  right-[-1rem] flex items-center pl-3"
    >
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-5 rounded-full">
        <img
          src="src/assets/images/loupe.svg"
          alt="Bouton de recherche"
          className="w-5 h-5 text-white"
        />
      </div>
    </button>
  </form>
</div>

      {isModal && <ModalProfil closeModal={closeModal} />} 
    </header>
  );
};

export default Header;
