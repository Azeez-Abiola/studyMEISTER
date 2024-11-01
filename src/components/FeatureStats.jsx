import { useState, useEffect } from 'react';

const FeatureStats = () => {
  const [counts, setCounts] = useState({ users: 0, servers: 0, articles: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prevCounts => ({
        users: Math.min(prevCounts.users + 2000, 140000),
        servers: Math.min(prevCounts.servers + 2, 50),
        articles: Math.min(prevCounts.articles + 20000, 1000000)
      }));
    }, 50);

    setTimeout(() => setIsVisible(true), 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`p-1 sm:p-3 md:p-4 text-center rounded-[3px] w-[95%] transition-all duration-600 ease-out mt-2 mb-8 xs:mt-8 sm:mt-[-13rem] sm:mb-0 md:mt-14 mr-16 
        min-[775px]:mt-[-8rem] 
        min-[972px]:mt-[-10rem]
        min-[1024px]:mt-[-12rem]
        min-[1072px]:mt-[-13rem]
        min-[1251px]:mt-14 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-16'
      }`}
    >
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-1 rounded-[3px] shadow-[2px_2px_4px_rgba(174,174,174,0.5)] py-1 sm:py-2 md:py-3 hover:shadow-[4px_4px_12px_rgba(174,174,174,0.9)] transition-shadow duration-300 bg-white border border-gray-200">
        {/* Users Stat */}
        <div className="flex flex-col sm:flex-row items-center justify-center relative pb-1 sm:pb-0 px-2">
          <img src="./featurestats1.png" alt="Users" className="w-8 h-8 mb-1 sm:mb-0 sm:mr-2" />
          <div className="font-inter text-center sm:text-left">
            <h2 className="text-base sm:text-sm text-gray-800"><span className="font-bold">{counts.users.toLocaleString()}</span>+</h2>
            <p className="text-xs text-gray-500">Users</p>
          </div>
          <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[1px] h-3/4 bg-gray-300"></div>
        </div>

        {/* Servers Stat */}
        <div className="flex flex-col sm:flex-row items-center justify-center relative pb-1 sm:pb-0 px-2">
          <img src="./featurestats2.png" alt="Servers" className="w-8 h-8 mb-1 sm:mb-0 sm:mr-2" />
          <div className="font-inter text-center sm:text-left">
            <h2 className="text-base sm:text-sm text-gray-800"><span className="font-bold">{counts.servers}</span>+</h2>
            <p className="text-xs text-gray-500">Journals</p>
          </div>
          <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[1px] h-3/4 bg-gray-300"></div>
        </div>

        {/* Articles Stat */}
        <div className="flex flex-col sm:flex-row items-center justify-center pb-1 sm:pb-0 px-2">
          <img src="./featurestats3.png" alt="Articles" className="w-8 h-8 mb-1 sm:mb-0 sm:mr-2" />
          <div className="font-inter text-center sm:text-left">
            <h2 className="text-base sm:text-sm text-gray-800">
              <span className="font-bold">
                {counts.articles >= 1000000 ? '1M' : `${Math.floor(counts.articles / 1000)}K`}
              </span>+
            </h2>
            <p className="text-xs text-gray-500">Published Articles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureStats;
