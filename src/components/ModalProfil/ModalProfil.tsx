function ModalProfil({ closeModal }) {
  //TODO typer closeModal
  return (
    <div className="absolute top-0 h-screen bg-slate-500 z-10">
      <span className="absolute right-3" onClick={closeModal}>
        x
      </span>
      <img src="src/assets/images/profile-user.svg" alt="image de profil" />
      <a href="">
        <h3>Profil</h3>
      </a>
      <a href="">
        <h3>Parametre</h3>
      </a>
      <a href="">
        <h3>Whishlist</h3>
      </a>
      <h3>Deconnexion</h3>
    </div>
  );
}

export default ModalProfil;