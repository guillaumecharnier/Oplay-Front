
import React from "react";
import { Link } from "react-router-dom";

function Profil() {
  return (
    <div className="bg-blue-custom-200 text-white py-32 px-[7rem] min-h-[40rem] relative">
        <div className="absolute right-[5rem] flex flex-rox bg-red-400">
            <Link to="/profil/edit" className=" px-2"><img className="w-8" src="/src/assets/images/edit.svg" alt="boutton editer sont profil" /></Link>
            <Link to="/parametre" className=" px-2"><img className="w-8" src="/src/assets/images/setter.svg" alt="boutton parametre" /></Link>
        </div>
        <div className="flex  bg-black min-w-[25rem]">
            <img src="/src/assets/images/profile-user.svg" className="min-w-32" alt="photo de profil" />
            <h2 className="text-[3rem] pl-10">Pseudo</h2>
        </div>
    </div>
  );
}

export default Profil;