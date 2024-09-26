import { useEffect, useRef } from 'react';

const Hero = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);

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

  return (
    <section className="p-4 sm:p-8 md:p-16 bg-white flex flex-col md:flex-row justify-between items-center mt-8 font-rubik">
      <div ref={textRef} className="text-left w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
        <h1 className="text-3xl sm:text-4xl text-gray-800">
          <span className="font-normal">Write articles quickly <br /> with Study</span>
          <span className="font-bold">MEISTER</span>
        </h1>
        <p className="mt-4 sm:mt-6 text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Dui tortor gravida nibh arcu id <br /> purus et loremque. Nulla sed semper augue.
        </p>
        <button className="w-full sm:w-auto px-6 sm:px-10 py-2 mt-6 sm:mt-8 text-white bg-[#3D5A80] rounded-[3px] hover:bg-white hover:text-[#3D5A80] border-2 border-[#3D5A80] transition-colors duration-300 ease-in-out">Try it now!</button>
      </div>
      <div ref={imgRef} className="w-full md:w-1/2">
        <img src="./heroimg.png" alt="StudyMEISTER" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default Hero;