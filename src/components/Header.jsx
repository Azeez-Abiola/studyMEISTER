import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
      setIsNavOpen(false);
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <header className="bg-white p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <img src={"./logo.png"} alt="StudyMeister Logo" width={150} height={42} className="z-20" />
        <button
          className="z-20 p-2 lg:hidden"
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isNavOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300 ${isNavOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300 ${isNavOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
        <nav className={`fixed inset-0 z-10 bg-white transform transition-transform duration-300 ease-in-out ${isNavOpen ? 'translate-x-0' : 'translate-x-full'} lg:relative lg:inset-auto lg:transform-none lg:transition-none lg:flex lg:items-center`}>
          <div className="flex flex-col lg:flex-row items-center justify-center h-full space-x-4 text-md font-rubik">
            <div className="flex flex-col lg:flex-row lg:space-x-5 justify-center">
              <div className="flex justify-center">
                <div className="flex flex-col lg:flex-row lg:space-x-4 justify-center ">
                  <a href="#pricing" className="relative group text-[#2B2B2B] hover:text-gray-900 py-2 pr-8">
                    Pricing
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E16741] 
                                     transform scale-x-0 transition-transform duration-300 
                                     group-hover:scale-x-100 origin-left"></span>
                  </a>
                  <a href="#testimonials" className="relative group text-[#2B2B2B] hover:text-gray-900 py-2 pr-8">
                    Testimonial
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E16741] 
                                     transform scale-x-0 transition-transform duration-300 
                                     group-hover:scale-x-100 origin-left"></span>
                  </a>
                  <a href="#help" className="relative group text-[#2B2B2B] hover:text-gray-900 py-2 pr-8">
                    Help
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E16741] 
                                     transform scale-x-0 transition-transform duration-300 
                                     group-hover:scale-x-100 origin-left"></span>
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-8 pl-32"> {/* Added flex container for spacing */}
                <Link to="/signin" className="relative group text-[#2B2B2B] hover:text-gray-900 py-2">
                  Sign in
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E16741] 
                                 transform scale-x-0 transition-transform duration-300 
                                 group-hover:scale-x-100 origin-left"></span>
                </Link>
                <Link to="signup" className="px-4 py-2 font-semibold text-[#E16741] bg-white 
                      border border-[#E16741] rounded-lg hover:bg-[#E16741] hover:text-white 
                      transition-colors duration-300">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;