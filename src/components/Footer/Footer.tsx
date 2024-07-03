import { Link, useLocation } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black-custom-800 py-8">
      <div className="flex flex-col items-center py-10 tablet:flex-row">
        <div className="pb-4 flex flex-col items-center w-full tablet:w-1/3">
          <Link to="/" className="flex flex-col items-center">
            <img
              src="src/assets/images/gamepad.svg"
              alt="Logo page accueil"
              className="w-12 mb-2"
            />
            <h1 className="text-xl text-white">O'Play</h1>
          </Link>
        </div>

        <div className="flex flex-col items-center tablet:items-start tablet:flex-row w-2/3 text-white">
          <div className="flex flex-col leading-9 pl-10 tablet:w-1/2">
            <Link to="/jeux-personnalise">Sélection personnalisée</Link>
            <Link to="/derniere-sortie">Dernières sorties</Link>
            <Link to="/derniere-ajout">Derniers ajouts</Link>
            <Link to="/categories">Catégories</Link>
          </div>
          <div className="flex flex-col align-baseline leading-9 pl-10 tablet:w-1/2">
            <Link to="/conditions-generales">Conditions générales</Link>
            <Link to="/mentions-légales">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
