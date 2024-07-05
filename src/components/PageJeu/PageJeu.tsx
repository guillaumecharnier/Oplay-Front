import React from "react";

function PageJeu({ gameData }) {
  //TODO setup redux to avoid same token et searching game data
  console.log(gameData);
  // const gameDetail = gameData.map((game) => console.log(game));
  return (
    <div className="min-h-screen bg-blue-custom-200 flex flex-col items-center justify-center py-12 px-6">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        <img
          src="src/assets/images/Alice.jpeg"
          alt="Alice: Madness Returns"
          className="w-full md:w-1/2 h-auto object-cover"
        />
        <div className="p-8 md:p-12 flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-3xl font-extrabold text-gray-900 mb-4">{game.name}</h1>
            <p className="text-gray-700 text-lg md:text-3l mb-6 leading-relaxed">
              {game.description}
            </p>
            <p className="text-gray-700 text-lg md:text-xl mb-6">
              <strong>Date de sortie:</strong> {game.releaseDate}
            </p>
            <p className="text-gray-700 text-lg md:text-xl mb-6">
              <strong>Genre:</strong> Action / Aventure //TODO get the category/ tag but not in the data yet
            </p>
            <p className="text-gray-700 text-lg md:text-xl mb-6">
              <strong>Développeur:</strong> {game.editor}
            </p>
            <p className="text-gray-700 text-lg md:text-xl mb-6">
              <strong>Plateformes:</strong> PC, Xbox 360, PlayStation 3 //TODO not yet in database maybe remove if no time
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-8">
            <span className="text-3xl md:text-4xl font-bold text-gray-900">{game.price}</span>
            <button className="bg-blue-500 text-white px-5 py-3 rounded-lg text-lg md:text-xl hover:bg-blue-600 transition duration-300 mt-4 md:mt-0">
              Acheter Maintenant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageJeu;


