import { useState, useEffect } from 'react';

const FeatureStats = () => {
  const [counts, setCounts] = useState({ users: 0, servers: 0, articles: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prevCounts => ({
        users: Math.min(prevCounts.users + 500, 40000),
        servers: Math.min(prevCounts.servers + 1, 50),
        articles: Math.min(prevCounts.articles + 10000, 1000000)
      }));
    }, 100);

    setTimeout(() => setIsVisible(true), 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`p-2 sm:p-4 md:p-6 bg-white text-center rounded-[3px] w-full transition-all duration-600 ease-out ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-16'
      }`}
    >
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-[3px] shadow-[2px_2px_4px_rgba(174,174,174,0.5)] py-3 sm:py-4 md:py-5 hover:shadow-[4px_4px_12px_rgba(174,174,174,0.9)] transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row items-center justify-center relative pb-2 sm:pb-0 sm:pr-2 md:pr-4">
          <img src="./featurestats1.png" alt="Users" className="w-8 h-8 mb-1 sm:mb-0 sm:mr-4" />
          <div className="font-rubik font-bold">
            <h2 className="text-lg sm:text-xl text-gray-800">{counts.users.toLocaleString()}+</h2>
            <p className="text-sm text-gray-500 pr-9">Users</p>
          </div>
          <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-2/3 bg-[#3D5A80]"></div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center relative pb-2 sm:pb-0 sm:pr-2 md:pr-4">
          <img src="./featurestats2.png" alt="Servers" className="w-8 h-8 mb-1 sm:mb-0 sm:mr-2" />
          <div className="font-rubik font-bold">
            <h2 className="text-lg sm:text-xl text-gray-800">{counts.servers}+</h2>
            <p className="text-sm text-gray-500 pl-4">Journals</p>
          </div>
          <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-2/3 bg-[#3D5A80]"></div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <img src="./featurestats3.png" alt="Articles" className="w-8 h-8 mb-1 sm:mb-0 sm:mr-2" />
          <div className="font-rubik font-bold">
            <h2 className="text-lg sm:text-xl text-gray-800 mr-16">
              {counts.articles >= 1000000 ? '1M+' : `${Math.floor(counts.articles / 1000)}K+`}
            </h2>
            <p className="text-sm text-gray-500 pl-4">Published Articles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureStats;