import { useState, useEffect } from "react";

const Features = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.75) {
          element.classList.add("animate");
        } else {
          element.classList.remove("animate");
        }
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    { text: "Faster Research Process.", img: "./check.png" },
    { text: "Improved Organization", img: "./check.png" },
    { text: "Effortless Drafting", img: "./check.png" },
    { text: "Increased Productivity", img: "./check.png" },
  ];

  return (
    <section className="p-4 sm:p-8 md:p-12 bg-white text-center max-w-7xl mx-auto mb-8 min-[768px]:mb-8">
      <div className="grid lg:grid-cols-2 grid-flow-row gap-16">
        {/* Image container */}
        <div className="col-span-1 lg:mt-6 xl:mt-0">
          <img
            src="./featuresimg.png"
            alt="Features"
            className="w-full"
            // className="w-[536px] h-[358px] object-contain
            //            min-[390px]:w-[370.95px] min-[390px]:h-[247.76px]
            //            min-[640px]:max-[767px]:w-[480px]
            //            min-[640px]:max-[767px]:h-[320px]
            //            min-[768px]:max-w-none
            //            min-[768px]:w-[387.27px] min-[768px]:h-[258.66px]
            //            min-[900px]:scale-125
            //            min-[1024px]:scale-100
            //            lg:w-[536px] lg:h-[358px]
            //            min-[640px]:max-[767px]:mx-auto
            //            ml-[-2rem] min-[640px]:max-[767px]:ml-0"
          />
        </div>

        {/* Text container */}
        <div className="col-span-1">
          <div className="text-left w-full mx-auto md:mx-0 space-y-5">
            <h2
              className="text-lg sm:text-2xl font-bold text-gray-800 leading-tight sm:leading-snug
                           "
            >
              Discover a range of tools designed to enhance your writing
              experience
            </h2>
            <p
              className=" text-gray-500 leading-relaxed text-sm sm:text-base
                          "
            >
              Our features are designed to support every stage of your writing
              journey. Discover tools that make research faster, more organized,
              and more productive.
            </p>
          </div>

          {/* Features list */}
          <div
            className="space-y-8 sm:space-y-7 mt-6 mx-auto md:mx-0 
                         "
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center justify-start hover:transform hover:translate-x-2 transition-transform duration-300
                          `}
              >
                <img
                  src={feature.img}
                  alt="Check"
                  className="w-5 sm:w-6 h-5 sm:h-6 mr-3 sm:mr-4 
                             "
                />
                <p
                  className="text-gray-900 font-bold text-sm sm:text-base
                             "
                >
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