import { Link } from "react-router-dom";

function Edit() {
  return (
    <div className="bg-blue-custom-200 text-white py-40">
        <div className="flex justify-end">
            <Link to="/profil/edit" className=" px-2"><img className="w-8" src="/src/assets/images/edit.svg" alt="boutton editer sont profil" /></Link>
            <Link to="/parametre" className=" px-2"><img className="w-8" src="/src/assets/images/setter.svg" alt="boutton parametre" /></Link>
        </div>
        <div className="flex flex-row items-center ml-[4rem]">
            <img src="/src/assets/images/profile-user.svg" className="w-32 " alt="photo de profil" />
            <h2 className="text-[3rem] pl-20">Pseudo</h2>
        </div>
    </div>
  );
}

export default Edit;