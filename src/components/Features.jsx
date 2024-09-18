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
    { text: "Powerful and easy protection features", img: "./check.png" },
    { text: "Instant live barrier", img: "./check.png" },
    { text: "Supercharged VPN", img: "./check.png" },
    { text: "No specific time limits", img: "./check.png" }
  ];

  return (
    <section className="rising p-4 sm:p-8 md:p-12 bg-white text-center">
      <div className="mt-4 sm:mt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 md:ml-[80px] mb-8 md:mb-0">
          <img src="./featuresimg.png" alt="Features" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 space-y-4 text-left md:ml-[35px]">
          <div className="text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">We provide many features you can use</h2>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.
            </p>
          </div>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <img src={feature.img} alt="Check" className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4" />
              <p className="text-gray-900 font-bold text-sm sm:text-base">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:flex mt-8 justify-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
      </div>
    </section>
  );
};

export default Features;