function ModalProfil({ closeModal }) {
  //TODO typer closeModal
  return (
    <div className="fixed top-0 h-screen w-full bg-slate-300 z-10 flex flex-col items-center justify-center ">
      <span className="absolute text-4xl top-5 right-10 " onClick={closeModal}>
        x
      </span>
      <div className="absolute top-0">
        <img
          src="src/assets/images/gamepad.svg"
          alt="Logo page accueil"
          className="w-8"
        />
        <h1 className="text-xl ml-2">O'Play</h1>
      </div>
      <img src="src/assets/images/profile-user.svg" alt="image de profil" className="w-24"/>
      <a href="">
        <h3 className="text-4xl">Profil</h3>
      </a>
      <a href="">
        <h3 className="text-4xl">Parametre</h3>
      </a>
      <a href="">
        <h3 className="text-4xl">Whishlist</h3>
      </a>
      <h3 className="text-4xl">Deconnexion</h3>
      <div className="flex flex-row h-8 w-60 justify-between">
        <span className="rounded-full w-8 border-2 border-solid border-black bg-red-500"></span>
        <span className="rounded-full w-8 border-2 border-solid border-black bg-blue-500"></span>
        <span className="rounded-full w-8 border-2 border-solid border-black bg-orange-500"></span>
        <span className="rounded-full w-8 border-2 border-solid border-black bg-green-500"></span>
        <span className="rounded-full w-8 border-2 border-solid border-black bg-purple-500"></span>
        <span className="rounded-full w-8 border-2 border-solid border-black bg-yellow-500"></span>
      </div>
    </div>
  );
}

export default ModalProfil;