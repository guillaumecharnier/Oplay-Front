import ModalProfil from '../ModalProfil/ModalProfil';

interface HeaderProps {
  isModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ isModal, openModal, closeModal }) => {
  return (
    <header className="bg-blue-200 relative">
      <div className="flex items-center justify-center py-5 ">
        <div className="w-1/3 flex justify-center">
          <a href="/connexion" className="text-l pt-8">
            Se connecter
          </a>
        </div>
        <div className="w-1/3 flex justify-center flex-col items-center">
          <a href="/">
            <img
              src="public\Logo_Page_Principale\gamepad.svg"
              alt="Logo page accueil"
              className="w-8"
            />
          </a>
          <a href="/">
            <h1 className="text-xl ml-2">O'Play</h1>
          </a>
        </div>

        <div className="flex flex-row w-1/3 justify-center">
          {/* If connected don't show "Se connecter" */}

          <a href="/panier" className="px-4">
            <img
              src="public\Logo_Page_Principale\shop.svg"
              alt="panier"
              className="w-10"
            />
          </a>

          {/* Add click to this profil picture that open the modal */}
          <img
            onClick={
              openModal
              // <ModalProfil />
            }
            src="public\Logo_Page_Principale\profile-user.svg"
            alt="Profil"
            className="w-10"
          />
        </div>
      </div>
      <div className="flex justify-center pb-2 px-8">
        {/* Event prevent default */}
        <form action="" className="relative">
          <input
            type="text"
            name="gameSearch"
            placeholder="Recherche ton jeu"
            className="rounded pl-2"
          />
          <button type="submit">
            <img
              src="src/assets/images/loupe.svg"
              alt="Boutton de lancement de recherche"
              className="w-8 p-2.5 rounded-full absolute inset-0 m-auto left-56 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            />
          </button>
        </form>
      </div>
      {isModal && <ModalProfil closeModal={closeModal} />}
    </header>
  );
};

export default Header;