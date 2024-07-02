// HomePage.tsx
import React from 'react';
import CustomSelection from './CustomSelection';
import LastAdditions from './LastAdditions';
import Categories from './Categories';
import NextRelease from './NextRelease';

function HomePage() {
  return (
    <div className="bg-blue-950 min-h-screen flex flex-col items-center justify-center p-4 overflow-x-hidden">
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-6 flex justify-center">
        <img
          src="/images/Last-Of-Us.jpeg"
          alt="The Last of Us"
          className="w-72 sm:w-56 md:w-64 lg:w-72 max-h-80 h-auto object-cover rounded-lg shadow-lg"
        />
        <div className="absolute top-2 left-8">
          <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            The Last Of Us Part I - $39.99
          </p>
        </div>
      </div>


{/* <div className="mb-24">
<Header />
</div> */}

<div className="mb-24">
<CustomSelection />
</div>

<div className="mb-24">
<LastAdditions />
</div>

<div className="mb-24">
<NextRelease />
</div>
<div className="mb-24">
<Categories />
</div>

{/* <div className="mb-24">
<Footer />
</div> */}

    </div>
  );
}

export default HomePage;

