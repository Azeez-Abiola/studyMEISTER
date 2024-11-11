import { useState, useEffect } from 'react';

const Features = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.75) {
          element.classList.add('animate');
        } else {
          element.classList.remove('animate');
        }
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    { text: "Faster Research Process.", img: "./check.png" },
    { text: "Improved Organization", img: "./check.png" },
    { text: "Effortless Drafting", img: "./check.png" },
    { text: "Increased Productivity", img: "./check.png" }
  ];

  return (
    <section className="p-4 sm:p-8 md:p-12 bg-white text-center max-w-7xl mx-auto mb-8 min-[768px]:mb-8">
      <div className="mt-1 sm:mt-16 md:mt-[-3rem] lg:mt-2 flex flex-col md:flex-row justify-between items-center min-[775px]:mb-8 min-[768px]:mt-2">
        {/* Image container */}
        <div className="w-full md:w-[48%] px-4 sm:px-8 mb-8 md:mb-0 md:mt-16 lg:mt-8 order-2 md:order-1 md:flex md:justify-center lg:justify-end min-[640px]:max-[767px]:px-12">
          <img 
            src="./featuresimg.png" 
            alt="Features" 
            className="w-[536px] h-[358px] object-contain
                       min-[390px]:w-[370.95px] min-[390px]:h-[247.76px]
                       min-[640px]:max-[767px]:w-[480px]
                       min-[640px]:max-[767px]:h-[320px]
                       min-[768px]:max-w-none
                       min-[768px]:w-[387.27px] min-[768px]:h-[258.66px]
                       min-[900px]:scale-125
                       min-[1024px]:scale-100
                       lg:w-[536px] lg:h-[358px]
                       min-[640px]:max-[767px]:mx-auto
                       ml-[-2rem] min-[640px]:max-[767px]:ml-0"
          />
        </div>

        {/* Text container */}
        <div className="w-full md:w-[50%] space-y-4 sm:space-y-5 text-left 
                        px-4 sm:px-12 md:px-0 
                        md:pr-8 lg:pr-14 
                        md:mt-8 lg:mt-8 order-1 md:order-2
                        min-[768px]:mt-16
                        min-[768px]:pl-8
                        min-[640px]:max-[767px]:px-12
                        lg:w-[544px] lg:h-[334px]">
          <div className="text-left sm:max-w-[500px] mx-auto md:mx-0">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-800 leading-tight sm:leading-snug
                           min-[768px]:text-xl
                           min-[768px]:w-[367px] min-[768px]:h-[48px] 
                           min-[768px]:ml-1
                           min-[1025px]:w-[480px] mb-8
                           ml-[-2rem] min-[640px]:max-[767px]:ml-0 mt-[2rem]">
              Discover a range of tools designed to 
              enhance your writing experience
            </h2>
            <p className="mt-3 sm:mt-5 text-gray-500 leading-relaxed text-sm sm:text-base
                          min-[768px]:text-sm
                          min-[768px]:w-[380px] min-[768px]:h-[51px] 
                          min-[768px]:ml-1 min-[390px]:w-[368px] mr-[20px]
                          min-[1025px]:w-[480px] mb-12
                          ml-[-2rem] min-[640px]:max-[767px]:ml-0
                          min-[640px]:max-[767px]:w-full
                          min-[640px]:max-[767px]:mr-0">
              Our features are designed to support every stage of your writing
              journey. Discover tools that make research faster, more organized, and more productive.
            </p>
          </div>

          {/* Features list */}
          <div className="space-y-8 sm:space-y-5 mt-6 sm:mt-8 sm:max-w-[206px] mx-auto md:mx-0 
                         ml-[-2rem] min-[640px]:max-[767px]:ml-0
                         min-[640px]:max-[767px]:max-w-[300px]">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-start hover:transform hover:translate-x-2 transition-transform duration-300
                           min-[768px]:py-1
                           min-[1025px]:w-[232px]`}
              >
                <img 
                  src={feature.img} 
                  alt="Check" 
                  className="w-5 sm:w-6 h-5 sm:h-6 mr-3 sm:mr-4 
                             min-[768px]:w-5 min-[768px]:h-5" 
                />
                <p className="text-gray-900 font-bold text-sm sm:text-base
                             min-[768px]:text-sm">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;