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
    <section className="rising bg-transparent mt-16 sm:mt-24 md:mt-32 lg:mt-48 px-4 sm:px-8 md:px-12 relative z-10 mb-[-20px]">
      <div className="bg-white rounded-lg shadow-lg p-8 sm:p-10 md:p-12 max-w-6xl mx-auto transition-all duration-300 hover:shadow-xl"> {/* Changed max-w-4xl to max-w-6xl */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-4">
          <div className="text-center md:text-left w-full">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Subscribe now for special student discount!
            </h2>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet 
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <button className="px-16 py-3 w-full sm:w-auto rounded-[4px] bg-[#3D5A80] text-white hover:bg-white hover:text-[#3D5A80] hover:border-2 hover:border-[#3D5A80] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
              Subscribe now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;