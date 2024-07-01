function HomePage() {
  return (
    <div className="bg-blue-900 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-6">
        <img
          src="/images/Last-Of-Us.jpeg"  // Chemin vers l'image avec majuscules
          alt="The Last of Us"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-500 text-center">
        The Last Of Us Part 1 - $39.99
      </h2>
    </div>
  );
}

export default HomePage;



