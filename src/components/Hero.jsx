import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const textElement = textRef.current;
    const imgElement = imgRef.current;

    textElement.style.transform = 'translateX(-100%)';
    imgElement.style.transform = 'translateX(100%)';
    textElement.style.opacity = '0';
    imgElement.style.opacity = '0';

    setTimeout(() => {
      textElement.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out';
      imgElement.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out';
      textElement.style.transform = 'translateX(0)';
      imgElement.style.transform = 'translateX(0)';
      textElement.style.opacity = '1';
      imgElement.style.opacity = '1';
    }, 100);
  }, []);

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 20;
    const rotateX = ((centerY - y) / centerY) * 20;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section 
       className="relative p-4 sm:p-8 bg-white flex flex-col md:flex-row justify-between items-center mt-24 md:mt-2 max-w-[1322px] mx-auto
                 md:p-8 lg:p-16
                 min-[775px]:mb-[12rem]
                 min-[768px]:mt-20
                 min-[972px]:mt-2
                 min-[1024px]:mt-16
                 min-[1072px]:mt-2
                 min-[1251px]:mb-[-12rem]
                 max-[767px]:min-[639px]:mb-4
                 max-[639px]:mb-8
                 [@media(min-width:3840px)]:max-w-[1922px]"  // Added max-width for 4K
      style={{ 
        zIndex: 0,
      }}
    >
      <div 
        ref={textRef} 
        className="text-left w-full mb-8 px-4 sm:px-0
                   md:w-[45%] md:mb-0 md:mr-4 md:ml-8
                   lg:w-1/2 lg:mr-8 lg:ml-16
                   min-[768px]:max-w-[360px]
                   min-[820px]:max-w-[380px]
                   min-[1024px]:max-w-[500px]
                   min-[1025px]:max-w-[460px]
                   min-[1072px]:max-w-[450px]
                   xl:max-w-[700px]
                   [@media(width=834px)]:ml-0 [@media(width=834px)]:px-0
                   [@media(width=390px)]:w-[370px]"
      >
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-gray-800 mb-4 sm:mb-8
                       min-[768px]:text-2xl
                       min-[820px]:text-3xl
                       [@media(width=834px)]:mt-6">
          <span className="font-semibold">Write articles quickly with Study</span>
          <span className="font-bold">MEISTER</span>
        </h1>
        <p className="mt-4 sm:mt-8 text-gray-500 font-medium text-sm sm:text-base
                      min-[768px]:text-sm
                      min-[820px]:text-base
                      min-[1024px]:pr-8
                      min-[1072px]:pr-0">
          <div className="[@media(width=3840px)]:w-[466px] [@media(width=1920px)]:w-[466px] [@media(width=1920px)]:text-[16px] [@media(width=1440px)]:w-[466px] [@media(width=834px)]:w-[392px] [@media(width=834px)]:text-[14px] min-[1400px]:max-[3839px]:w-[466px]">
          Streamline your writing process with tools designed to help you organize ideas, generate content, and refine your research efficiently. Create high-quality articles with ease, tailored to your academic needs.
          </div>
        </p>
        <button className="w-full sm:w-full md:w-auto px-4 sm:px-6 md:px-8 lg:px-10 py-2 mt-6 text-white bg-[#3D5A80] rounded-[3px] text-sm sm:text-base hover:bg-[#1E3A5F] border-2 border-[#3D5A80] hover:border-transparent transition-all duration-300 ease-in-out hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)]
                   min-[768px]:text-sm
                   min-[820px]:text-base
                   [@media(width=390px)]:w-[350px] [@media(width=390px)]:h-[40px]
                   [@media(width=834px)]:w-[186px] [@media(width=834px)]:h-[50px] [@media(width=834px)]:rounded-[5px]
                   [@media(width=1920px)]:w-[355px] [@media(width=1920px)]:h-[64px] [@media(width=1920px)]:rounded-[6.32px] [@media(width=1920px)]:font-semibold [@media(width=1920px)]:text-[20.23px]
                   min-[1920px]:max-[3839px]:w-[355px] min-[1920px]:max-[3839px]:h-[64px] min-[1920px]:max-[3839px]:rounded-[6.32px] min-[1920px]:max-[3839px]:font-semibold min-[1920px]:max-[3839px]:text-[20.23px]
                   [@media(width=3840px)]:w-[355px] [@media(width=3840px)]:h-[82px] [@media(width=3840px)]:rounded-[8.12px] [@media(width=3840px)]:text-[26px]">
      Try it now!
        </button>
      </div>
      
      <div 
        ref={imgRef} 
        className="w-full mt-8 px-4 sm:px-0 mb-16
                   md:w-[50%] md:mt-4 md:mr-8 md:-ml-4 md:mb-0
                   lg:w-1/2 lg:mr-40 lg:-ml-8
                   min-[768px]:w-[45%]
                   min-[820px]:w-[48%]
                   min-[1024px]:w-[45%] min-[1024px]:mr-0
                   min-[1025px]:w-[485px]
                   min-[1072px]:w-1/2 min-[1072px]:mr-40
                   min-[1400px]:mr-0 min-[1400px]:translate-x-20
                   min-[1600px]:translate-x-32
                   min-[1920px]:translate-x-40
                   min-[2560px]:translate-x-52
                   min-[3840px]:translate-x-64
                   min-[640px]:max-[767px]:w-[75%]
                   min-[640px]:max-[767px]:mx-auto
                   min-[640px]:max-[767px]:mb-16"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        <img 
          src="./hero-img.png" 
          alt="StudyMEISTER" 
          className="w-full h-auto max-w-[100%] sm:max-w-[110%] mx-auto
                     min-[640px]:max-[767px]:max-w-[95%]
                     min-[640px]:max-[767px]:mb-8
                     min-[768px]:max-w-[110%]
                     min-[820px]:max-w-[120%]
                     min-[1024px]:max-w-[140%] min-[1024px]:ml-8
                     min-[1025px]:w-[485px] min-[1025px]:h-[444.24px]
                     min-[1072px]:max-w-[130%] min-[1072px]:ml-0
                     min-[1400px]:ml-0
                     min-[1440px]:w-[485px] min-[1440px]:h-[444.24px]
                     min-[1920px]:w-[613.25px] min-[1920px]:h-[561.72px]
                     min-[3840px]:w-[650.1px] min-[3840px]:h-[650.87px]
                     [@media(width=834px)]:mt-[-1rem] [@media(width=834px)]:ml-12 [@media(width=834px)]:w-[385.3px] [@media(width=834px)]:h-[400px]
                     [@media(width=390px)]:w-[369.92px] [@media(width=390px)]:h-[338.83px] [@media(width=390px)]:mt-[-40px] [@media(width=390px)]:mb-[-110px]"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: 'transform 0.2s ease-out'
          }}
        />
      </div>
    </section>
  );
};

export default Hero;