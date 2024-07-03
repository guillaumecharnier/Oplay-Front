import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  // Vérifie si l'URL actuelle est '/inscription'
  if (location.pathname === '/inscription') {
    return null; // Ne pas afficher le Footer
  }

  return (
    <footer className="bg-black-custom-800 py-8">
      <div className="container mx-auto flex flex-col items-center py-10">
        {/* Logo et titre */}
        <div className="pb-4 flex flex-col items-center w-full text-center mb-8">
          <Link to="/" className="flex flex-col items-center">
            <img
              src="src/assets/images/gamepad.svg"
              alt="Logo page accueil"
              className="w-12 mb-2"
            />
            <h1 className="text-xl text-white">O'Play</h1>
          </Link>
        </div>

        {/* Liens de navigation */}
        <div className="flex flex-col tablet:flex-row tablet:justify-around w-full text-white text-center leading-9">
          <div className="flex flex-col gap-2 mb-8 tablet:mb-0 tablet:pr-8">
            <Link to="/jeux-personnalise" className="hover:text-blue-300">Sélection personnalisée</Link>
            <Link to="/derniere-sortie" className="hover:text-blue-300">Dernières sorties</Link>
            <Link to="/derniere-ajout" className="hover:text-blue-300">Derniers ajouts</Link>
            <Link to="/categories" className="hover:text-blue-300">Catégories</Link>
          </div>
          <div className="flex flex-col gap-2 mb-8 tablet:mb-0 tablet:pl-8">
            <Link to="/conditions-generales" className="hover:text-blue-300">Conditions générales</Link>
            <Link to="/mentions-légales" className="hover:text-blue-300">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
