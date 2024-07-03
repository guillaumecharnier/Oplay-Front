function Profil() {
  return (
    <div className="bg-blue-custom-200 text-white py-80">
        <div className="flex justify-end">
            <span><img className="w-8" src="src/assets/images/edit.svg" alt="boutton editer sont profil" /></span>
            <span><img className="w-8" src="src/assets/images/setter.svg" alt="boutton parametre" /></span>
        </div>
        <div>
            <img src="src/assets/images/profile-user.svg" className="w-40" alt="photo de profil" />
            <h2 className="text" >Pseudo</h2>
        </div>
    </div>
  );
}

export default Profil;