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
    <section className="rising bg-transparent mt-[-2rem] sm:mt-16 md:mt-24 lg:mt-32 px-4 sm:px-6 md:px-8 relative z-10 mb-[-20px]"> {/* Reduced margin top for screensize of 390px */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 max-w-6xl mx-auto transition-all duration-300 hover:shadow-xl border border-gray-200">
        <div className="flex flex-col items-center justify-between space-y-4 sm:space-y-6 md:space-y-0 md:flex-row md:space-x-4">
          <div className="text-center md:text-left w-full md:w-1/2">
            <h2 className="font-inter text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
              Subscribe now for special student discount!
            </h2>
            <p className="font-inter mt-2 sm:mt-3 md:mt-4 text-xs xs:text-sm sm:text-base text-gray-500 max-[389px]:w-full">
              Unlock exclusive savings and take your research to the next level with our student-friendly pricing.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <button className="font-inter md:mr-12 px-6 sm:px-8 md:px-12 py-2 sm:py-3 w-[244px] rounded-[4px] bg-[#3D5A80] text-white text-xs xs:text-sm sm:text-base border-2 border-[#3D5A80] hover:bg-[#1E3A5F] hover:border-transparent transition-all duration-300 ease-in-out hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
              Subscribe now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;