import { Link } from "react-router-dom";

function Connexion() {
    return (
    <div className="bg-blue-custom-200 text-white flex flex-col items-center py-28">
        <div className="absolute top-0 left-autospace-y-2 flex items-center flex-col tablet:hidden">
        <img
          src="src/assets/images/gamepad.svg"
          alt="Logo page accueil"
          className="w-12"
        />
        <h1 className="text-xl text-white font-bold">O'Play</h1>
        </div>
         <h2 className="font-bold">Connexion</h2>
        <div className="flex flex-row w-56 py-10 justify-between">
            <Link to=""><img src="src/assets/images/gmail-nouveau.svg" alt="Gmail" /></Link>
            <Link to=""><img src="src/assets/images/discorde.svg" alt="Discord" /></Link>
            <Link to=""><img src="src/assets/images/facebook-nouveau.svg" alt="Facebook" /></Link>
        </div>
        <span className="font-bold">ou</span>
        <form action="" className="flex flex-col items-center py-10">
            <input type="email" name="" id="" placeholder="Email" className="pl-4 rounded-full mb-10 w-80" />
            <input type="password" name="" id=""placeholder="Mot de passe" className="pl-4 rounded-full mb-10 w-80"/>
            <button type="submit" className="w-40 h-10 rounded-full font-bold bg-slate-500">Se connecter</button>
        </form>
        <div className="w-80 flex justify-between">
            <Link to="/inscription">S'inscrire</Link>
            <Link to="">Mot de passe oublié ?</Link>
        </div>
    </div>
    );
  }
  
  export default Connexion;