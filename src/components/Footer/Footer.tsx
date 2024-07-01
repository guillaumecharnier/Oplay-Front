function Footer() {
  return (
    <footer className="bg-red-200 ">
      <div className="flex flex-col items-center py-8 tablet:flex-row">
        <div className="w-1/3 pb-4 flex justify-center flex-col items-center">
          <a href="/">
            <img
              src="src/assets/images/gamepad.svg"
              alt="Logo page accueil"
              className="w-8"
            />
          </a>
          <a href="/">
            <h1 className="text-xl ml-2">O'Play</h1>
          </a>
        </div>
        <div className="flex flex-col tablet:flex-row">
          <div className="flex flex-col pl-10">
            <a href="/jeux-personnalise">Sélection personnalisée</a>
            <a href="/derniere-sortie">Dernieres sorties</a>
            <a href="/derniere-ajout">Derniers ajouts</a>
            <a href="/categories">Catégories</a>
          </div>
          <div className="flex flex-col pl-10">
            <a href="/conditions-generales">Conditions générales</a>
            <a href="/mentions-légales">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
