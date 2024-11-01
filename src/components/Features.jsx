import { useState, useEffect } from 'react';

const Features = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    { text: "Faster Research Process.", img: "./check.png" },
    { text: "Improved Organization", img: "./check.png" },
    { text: "Effortless Drafting", img: "./check.png" },
    { text: "Increased Productivity", img: "./check.png" }
  ];

  return (
    <section className="rising p-4 sm:p-8 md:p-12 bg-white text-center max-w-7xl mx-auto mb-0">
      <div className="mt-1 sm:mt-[-3rem] flex flex-col md:flex-row justify-between items-center">
        {/* Mobile-optimized image container */}
        <div className="w-full md:w-[48%] px-4 sm:pl-8 mb-8 md:mb-0 md:mt-16 order-2 md:order-1">
          <img 
            src="./featuresimg.png" 
            alt="Features" 
            className="w-full max-w-[280px] xs:max-w-[300px] mx-auto sm:max-w-none h-auto md:h-[450px] object-contain"
          />
        </div>
        <div className="w-full md:w-[50%] space-y-4 sm:space-y-6 text-left px-4 sm:px-6 md:px-0 md:pr-14 md:mt-8 order-1 md:order-2">
          <div className="text-left">
            <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-800 leading-tight">
              Discover a range of tools designed to 
              <br className="hidden sm:block" />
              enhance your writing experience
            </h2>
            <p className="mt-3 sm:mt-4 text-gray-500 leading-relaxed text-xs xs:text-sm sm:text-base">
              Our features are designed to support every stage of your writing
              <br className="hidden sm:block" /> 
              journey. Discover tools that make research faster, more organized, and more productive.
            </p>
          </div>
          <div className="space-y-3 sm:space-y-4 md:space-y-6 mt-6 sm:mt-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-start">
                <img src={feature.img} alt="Check" className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 mr-2 xs:mr-3 sm:mr-4" />
                <p className="text-gray-900 font-bold text-xs xs:text-sm sm:text-base">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
