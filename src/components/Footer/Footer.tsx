function Footer() {
  return (
    <footer className="bg-black-custom-800 ">
      <div className="flex flex-col items-center py-8 tablet:flex-row">

      <div className="pb-4 flex flex-col items-center w-full tablet:w-1/3">
        <a href="/" className="flex flex-col items-center">
          <img
            src="src/assets/images/gamepad.svg"
            alt="Logo page accueil"
            className="w-12 mb-2"
           />
          <h1 className="text-xl text-white">O'Play</h1>
        </a>
      </div>


        <div className="flex flex-col items-center tablet:items-start tablet:flex-row w-2/3  text-white">
          <div className="flex flex-col leading-9 tablet: w-1/2">
            <a href="/jeux-personnalise">Sélection personnalisée</a>
            <a href="/derniere-sortie">Dernieres sorties</a>
            <a href="/derniere-ajout">Derniers ajouts</a>
            <a href="/categories">Catégories</a>
          </div>
<h1 className="w-48"> Julien 2</h1>
          <div className="flex flex-col align-baseline leading-9 tablet: w-1/2 ">
            <a href="/conditions-generales">Conditions générales</a>
            <a href="/mentions-légales">Mentions légales</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;