import { Link } from "react-router-dom";

function ModalProfil({ closeModal }) {
  return (
    <div className="fixed top-0 text-white h-screen w-full bg-blue-custom-200
     p-1 z-10 flex flex-col items-center justify-center
      laptop:w-80 laptop:h-[30rem] laptop:right-0 laptop:border-[0.1rem]">
      <span className="absolute text-4xl top-5 right-10 " onClick={closeModal}>
        x
      </span>
      <div className="absolute top-0 left-autospace-y-2 flex items-center flex-col tablet:hidden">
        <img
          src="src/assets/images/gamepad.svg"
          alt="Logo page accueil"
          className="w-12"
        />
        <h1 className="text-xl text-white font-bold">O'Play</h1>
      </div>
      <div className="leading-[5rem] text-4xl flex items-center flex-col">
        <img src="src/assets/images/profile-user.svg" alt="image de profil" className="w-24"/>
        <Link to="/profil/[id]"> Profil </Link>
        <Link to="/parametre"> Parametre </Link>
        <Link to="/" className="tablet:hidden"> Deconnexion </Link>
      </div>
      <div className="flex flex-row h-8 w-60 mt-6 justify-between">
        <span className="rounded-full w-8 border-1 border-solid border-black bg-red-500"></span>
        <span className="rounded-full w-8 border-1 border-solid border-black bg-blue-500"></span>
        <span className="rounded-full w-8 border-1 border-solid border-black bg-orange-500"></span>
        <span className="rounded-full w-8 border-1 border-solid border-black bg-green-500"></span>
        <span className="rounded-full w-8 border-1 border-solid border-black bg-purple-500"></span>
        <span className="rounded-full w-8 border-1 border-solid border-black bg-yellow-500"></span>
      </div>
    </div>
  );
}

export default ModalProfil;