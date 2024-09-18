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

    // Set isVisible to true after a short delay to trigger the animation
    setTimeout(() => setIsVisible(true), 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`p-4 sm:p-8 md:p-12 bg-white text-center rounded-[3px] w-full transition-all duration-600 ease-out ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-16'
      }`}
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 rounded-[3px] shadow-[4px_4px_8px_rgba(174,174,174,0.5)] py-6 sm:py-8 md:py-10 hover:shadow-[8px_8px_16px_rgba(174,174,174,0.8)] transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row items-center justify-center relative pb-4 sm:pb-0 sm:pr-4 md:pr-8">
          <img src="./featurestats1.png" alt="Users" className="w-12 h-12 mb-2 sm:mb-0 sm:mr-4" />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{counts.users.toLocaleString()}+</h2>
            <p className="text-gray-500">Users</p>
          </div>
          <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-3/4 bg-[#3D5A80]"></div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center relative pb-4 sm:pb-0 sm:pr-4 md:pr-8">
          <img src="./featurestats2.png" alt="Servers" className="w-12 h-12 mb-2 sm:mb-0 sm:mr-4" />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{counts.servers}+</h2>
            <p className="text-gray-500">Servers</p>
          </div>
          <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-3/4 bg-[#3D5A80]"></div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <img src="./featurestats3.png" alt="Articles" className="w-12 h-12 mb-2 sm:mb-0 sm:mr-4" />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{(counts.articles / 1000000).toFixed(1)}M+</h2>
            <p className="text-gray-500">Published Articles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureStats;