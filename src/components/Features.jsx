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
    { text: "Powerfull online protection.", img: "./check.png" },
    { text: "Internet with borders", img: "./check.png" },
    { text: "Supercharged VPN", img: "./check.png" },
    { text: "No specific time limits", img: "./check.png" }
  ];

  return (
    <section className="p-4 sm:p-8 md:p-16 bg-white font-rubik">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-[45%] lg:w-[48%] mb-8 md:mb-0">
          <div className="relative w-full pt-[80%]">
            <img 
              src="./featuresimg.png" 
              alt="Features" 
              className="absolute top-0 left-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full md:w-[50%] lg:w-[48%] space-y-6 text-left md:pl-8 lg:pl-20"> {/* Added padding-left */}
          <div className="text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">We provide many <br /> features you can use</h2>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Quis tortor <br /> gravida nibh arcu id purus ullamcorper. Vel vel erat <br /> semper augue.
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
    </section>
  );
};

export default Features;