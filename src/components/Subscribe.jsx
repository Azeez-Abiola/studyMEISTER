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
    <section className="rising bg-white mt-16 sm:mt-24 md:mt-32 lg:mt-48 px-4 sm:px-8 md:px-12">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 transform -translate-y-6 max-w-4xl mx-auto transition-all duration-300 hover:-translate-y-8 hover:shadow-xl mt-8 sm:mt-0" style={{ marginBottom: 0, paddingTop: '2rem' }}>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="text-center md:text-left w-full md:w-1/2">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Subscribe now for special{isMobile ? ' ' : <br />}student discount!
            </h2>
            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet 
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col sm:flex-row w-full">
              <input type="email" placeholder="Your email" className="py-3 px-2 w-full sm:w-3/5 mb-2 sm:mb-0 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent" />
              <button className="p-3 w-full sm:w-2/5 rounded-lg bg-[#3D5A80] text-white sm:ml-2 hover:bg-white hover:text-[#3D5A80] hover:border-2 hover:border-[#3D5A80] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
