function Connexion() {
    return (
    <div>
        <div className="absolute top-0 left-autospace-y-2 flex items-center flex-col tablet:hidden">
        <img
          src="src/assets/images/gamepad.svg"
          alt="Logo page accueil"
          className="w-12"
        />
        <h1 className="text-xl text-white font-bold">O'Play</h1>
        </div>
         <h2>Se connecter</h2>
        <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
        <span>ou</span>
        <form action="">
            <input type="email" name="" id="" />
            <input type="password" name="" id="" />
            <button type="submit">Se connecter</button>
        </form>
        <div>
            <a href="/inscription">S'inscrire</a>
            <a href="">Mot de passe oublié ?</a>
        </div>
    </div>
    );
  }
  
  export default Connexion;