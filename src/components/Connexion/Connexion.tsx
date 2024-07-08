import React from "react";
import { Link } from "react-router-dom";

function Connexion({ userData }) {
console.log(userData);
    const user = userData.map((element) => console.log(element));

  function handleSubmit (event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    const found = user.find((element) => element.email = email);
    console.log(found);

    console.log(email);
    console.log('grg', user);
    
    // if email && password
  }

    return (
    <div className="bg-blue-custom-200 text-white min-h-screen flex flex-col items-center py-28">
       <div className="absolute top-4 left-4 flex items-center">
        <Link to="/">
          <img
            src="/src/assets/images/gamepad.svg"
            alt="Logo"
            className="w-10 h-10"
          />
        </Link>
        <Link to="/">
            <h1 className="text-2xl text-white ml-2">O'Play</h1>
        </Link>
      </div>
         <h2 className="font-bold">Connexion</h2>
        <div className="flex flex-row w-56 py-10 justify-between">
            <Link to=""><img src="/src/assets/images/gmail-nouveau.svg" alt="Gmail" /></Link>
            <Link to=""><img src="/src/assets/images/discorde.svg" alt="Discord" /></Link>
            <Link to=""><img src="/src/assets/images/facebook-nouveau.svg" alt="Facebook" /></Link>
        </div>
        <span className="font-bold">ou</span>
        <form className="flex flex-col items-center py-10 " onSubmit={handleSubmit}>
            <input type="email" name="email" id="email" placeholder="Email" className="pl-4 rounded-full mb-10 w-80 text-black" />
            <input type="password" name="password" id="password" placeholder="Mot de passe" className="pl-4 rounded-full mb-10 w-80 text-black"/>
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