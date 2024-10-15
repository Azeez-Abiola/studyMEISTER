import { useState, useEffect } from 'react';

const Subscribe = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="rising bg-transparent mt-8 sm:mt-16 md:mt-24 lg:mt-32 px-4 sm:px-6 md:px-8 relative z-10 mb-[-20px]">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 max-w-6xl mx-auto transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col items-center justify-between space-y-6 md:space-y-0 md:flex-row md:space-x-4">
          <div className="text-center md:text-left w-full md:w-1/2">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
              Subscribe now for special student discount!
            </h2>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-500">
              Lorem ipsum dolor sit amet 
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <button className=" md:mr-12 px-8 sm:px-12 md:px-12 py-2 sm:py-3 w-full sm:w-auto rounded-[4px] bg-[#3D5A80] text-white text-sm sm:text-base hover:bg-white hover:text-[#3D5A80] hover:border-2 hover:border-[#3D5A80] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
              Subscribe now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;