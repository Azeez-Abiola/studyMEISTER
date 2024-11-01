import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Brooklyn Simmons',
    subName: 'Warsaw pland',
    rating: 4.5, 
    avatar: './testimonials1.png',
    testimonial: '"The tools are user-friendly, and I love how they help me organize my thoughts more clearly. I can finally finish my papers faster"."',
  },
  {
    name: 'Darlene Robertson',
    subName: 'Warsaw pland',
    rating: 4.5,
    avatar: './testimonials2.png',
    testimonial: '"I was struggling with structuring my articles until I found Study Meister. It makes the entire process very easy and stress-free"',
  },
  {
    name: 'Darrell Steward',
    subName: 'Warsaw pland',
    rating: 4.5,
    avatar: './testimonials3.png',
    testimonial: '"Study Meister has completely transformed how I approach research. Its intuitive and saves me so much time."',
  },
  {
    name: 'John Doe',
    subName: 'Warsaw pland',
    rating: 4.5,
    avatar: './testimonials4.jpg',
    testimonial: '"wow...iam very happy to use this vpn, it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best."',
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: (currentSlide + 1) * scrollContainerRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
    setActiveButton('next');
    setTimeout(() => setActiveButton(null), 300);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: (currentSlide - 1) * scrollContainerRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
    setActiveButton('prev');
    setTimeout(() => setActiveButton(null), 300);
  };

  const renderTestimonial = (testimonial, index) => (
    <div 
      key={`${testimonial.name}-${index}`}
      className={`${isMobile ? 'w-full' : 'w-full md:w-1/2 lg:w-1/3'} flex-shrink-0 bg-white p-4 md:p-6 rounded-lg shadow-md transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105 ${isMobile ? 'snap-center' : 'mr-4'} border border-gray-200 hover:border-[#E16741] ${!isMobile && 'max-h-[250px] overflow-y-auto'}`}
    >
      <div className="flex items-center mb-4">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3" />
        <div className="text-left flex-grow">
          <h3 className="text-base md:text-lg font-bold text-black">{testimonial.name}</h3>
          <div className="flex items-center justify-between">
            <p className="text-xs md:text-sm text-gray-500">{testimonial.subName}</p>
            <div className="flex items-center">
              <span className="text-xs md:text-sm text-gray-500 mr-1 font-semibold">{testimonial.rating}</span>
              <svg className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm md:text-base text-gray-600 text-left">{testimonial.testimonial}</p>
    </div>
  );

  return (
    <section className="rising p-4 md:p-8 text-center max-w-6xl mx-auto mt-8 md:mt-[-6rem]">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800">Trusted by thousands of <br className="hidden md:block" /> happy customers</h2>
      <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-500 max-w-lg mx-auto px-4 md:px-0">
        Join a community of users who have transformed their writing process with our reliable tools and features.
      </p>
      <div className="relative pb-16 md:pb-24 overflow-hidden mt-4 md:mt-8">
        <div 
          ref={scrollContainerRef}
          className={`flex transition-transform duration-500 ease-in-out ${isMobile ? 'overflow-x-auto snap-x snap-mandatory scrollbar-hide' : ''}`}
          style={{ 
            transform: isMobile ? 'none' : `translateX(-${currentSlide * (100 / 3)}%)`,
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {isMobile
            ? testimonials.map(renderTestimonial)
            : [...testimonials, ...testimonials.slice(0, 2)].map(renderTestimonial)}
        </div>

        {/* Desktop: Arrows and Dots positioning */}
        {!isMobile && (
          <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 md:px-0">
            <div className="flex space-x-1 md:space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-[#3D5A80] w-8 md:w-12'
                      : 'bg-gray-300 w-2 md:w-3'
                  }`}
                ></div>
              ))}
            </div>
            <div className="flex space-x-6 md:space-x-12">
              <button 
                onClick={prevSlide} 
                className={`p-1.5 md:p-2 rounded-full transition-colors duration-300 ${activeButton === 'prev' ? 'bg-[#3D5A80]' : 'bg-gray-300'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide} 
                className={`p-1.5 md:p-2 rounded-full transition-colors duration-300 ${activeButton === 'next' ? 'bg-[#3D5A80]' : 'bg-gray-300'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Mobile: Arrows below cards and above dots */}
        {isMobile && (
          <>
            <div className="flex justify-between px-8 mt-4">
              <button 
                onClick={prevSlide} 
                className={`p-1.5 rounded-full transition-colors duration-300 ${activeButton === 'prev' ? 'bg-[#3D5A80]' : 'bg-gray-300'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide} 
                className={`p-1.5 rounded-full transition-colors duration-300 ${activeButton === 'next' ? 'bg-[#3D5A80]' : 'bg-gray-300'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex justify-center mt-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 mx-1 ${
                    index === currentSlide
                      ? 'bg-[#3D5A80] w-8'
                      : 'bg-gray-300 w-2'
                  }`}
                ></div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
