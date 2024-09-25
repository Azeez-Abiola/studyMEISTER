import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Brooklyn Simmons',
    subName: 'Warsaw pland',
    rating: 4.5,
    avatar: './testimonials1.png',
    testimonial: '""wow...iam very happy to use this vpn,iturned out to be more than my expectations and so far there have been no problems.laslesvpn always the best"."',
  },
  {
    name: 'Darlene Robertson',
    subName: 'Warsaw pland',
    rating: 4.5,
    avatar: './testimonials2.png',
    testimonial: '""wow...iam very happy to use this vpn,it turned out to be more than my expectations and so far there have been no problems.laslesvpn always the best"."',
  },
  {
    name: 'Darrell Steward',
    subName: 'Warsaw pland',
    rating: 4.5,
    avatar: './testimonials3.png',
    testimonial: '"wow...iam very happy to use this vpn,iturned out to be more than my expectations and so far there have been no problems.laslesvpn always the best"."',
  },
  {
    name: 'John Doe',
    subName: 'Warsaw pland',
    rating: 4.5,
    avatar: './testimonials4.jpg',
    testimonial: '"Twow...iam very happy to use this vpn,iturned out to be more than my expectations and so far there have been no problems.laslesvpn always the best"."',
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFourth, setShowFourth] = useState(false);

  const nextSlide = () => {
    if (currentSlide === testimonials.length - 2) {
      setShowFourth(true);
    }
    setCurrentSlide((prev) => (prev + 1) % (showFourth ? testimonials.length : testimonials.length - 1));
  };

  const prevSlide = () => {
    if (showFourth && currentSlide === testimonials.length - 1) {
      setShowFourth(false);
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide((prev) => (prev - 1 + testimonials.length) % (showFourth ? testimonials.length : testimonials.length - 1));
    }
  };

  return (
    <section className="rising p-12 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold text-gray-800">Trusted by thousands of <br /> happy customers</h2>
      <p className="mt-4 text-gray-500 max-w-lg mx-auto">
        Lorem ipsum dolor sit amet consectetur. Dui tortor gravida nibh arcu id purus et loremque. Nulla sed semper augue.
      </p>
      <div className="relative pb-24 overflow-hidden max-w-7xl mx-auto">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}>
          {testimonials.slice(0, 3).map((testimonial, index) => ( // Show only 3 testimonials by default
            <div 
              key={`${testimonial.name}-${index}`}
              className="min-w-1/3 bg-white p-6 rounded-lg shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg mr-4" // Added padding right
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-3" />
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-black">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">
                      {testimonial.subName}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-1">{testimonial.rating}</span>
                  <svg className="w-4 h-4 text-yellow-400 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 text-left">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between">
          <div className="flex space-x-2">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`h-3 rounded-full transition-all duration-300 ${
                  (showFourth && index === 3) || (!showFourth && index === currentSlide)
                    ? 'bg-[#3D5A80] w-12'
                    : 'bg-gray-300 w-3'
                }`}
              ></div>
            ))}
          </div>
          <div className="flex space-x-8">
            <button 
              onClick={prevSlide} 
              className={`p-2 rounded-full ${currentSlide === 0 && !showFourth ? 'bg-gray-300' : 'bg-[#3D5A80]'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide} 
              className={`p-2 rounded-full ${showFourth ? 'bg-gray-300' : 'bg-[#3D5A80]'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;