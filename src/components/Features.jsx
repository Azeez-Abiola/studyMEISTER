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
    { text: "Powerful online protection.", img: "./check.png" },
    { text: "Internet with borders", img: "./check.png" },
    { text: "Supercharged VPN", img: "./check.png" },
    { text: "No specific time limits", img: "./check.png" }
  ];

  return (
    <section className="rising p-4 sm:p-8 md:p-12 bg-white text-center md:ml-32">
      <div className="mt-4 sm:mt-8 flex flex-col md:flex-row justify-between items-center">
        {/* Adjusted padding for the image container */}
        <div className="w-full md:w-[50%] md:pr-8 mb-8 md:mb-0 md:pl-4 lg:pl-0">
          <img 
            src="./featuresimg.png" 
            alt="Features" 
            className="w-full h-auto md:h-[450px] object-contain"
          />
        </div>
        <div className="w-full md:w-[50%] space-y-6 text-left md:pl-16 md:mt-8">
          <div className="text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">We provide many <br /> features you can use</h2>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Quis tortor <br /> gravida nibh arcu id purus ullamcorper. Vel vel erat <br /> semper augue.
            </p>
          </div>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-start">
              <img src={feature.img} alt="Check" className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4" />
              <p className="text-gray-900 font-bold text-sm sm:text-base">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
