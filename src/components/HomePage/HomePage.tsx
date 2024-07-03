import React from 'react';
import CustomSelection from './CustomSelection';
import LastAdditions from './LastAdditions';
import Categories from './Categories';
import NextRelease from './NextRelease';

function HomePage() {
  return (

    <div className="bg-blue-custom-200 min-h-screen flex flex-col items-center justify-start overflow-x-hidden">

      {/* Image de couverture */}
      <div className="relative w-full mb-36 flex justify-center">
        <img
          src="/src/assets/images/Last-Of-Us.jpeg"
          alt="The Last of Us"
          className="w-full max-h-80 object-cover shadow-lg"
        />
        <div className="absolute top-4 md:left-6 lg:left-8">
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            The Last Of Us Part I - $39.99
          </p>
        </div>
      </div>

      {/* Section CustomSelection */}
      <div className="w-full max-w-screen-lg mb-16 md:mb-24 lg:mb-28 xl:mb-32">
        <CustomSelection />
      </div>

      {/* Section LastAdditions */}
      <div className="w-full max-w-screen-lg mb-16 md:mb-24 lg:mb-28 xl:mb-32">
        <LastAdditions />
      </div>

      {/* Section NextRelease */}
      <div className="w-full max-w-screen-lg mb-16 md:mb-24 lg:mb-28 xl:mb-32">
        <NextRelease />
      </div>

      {/* Section Categories */}
      <div className="w-full max-w-screen-lg mb-16 md:mb-24 lg:mb-28 xl:mb-32">
        <Categories />
      </div>
    </div>
  );
}

export default HomePage;




