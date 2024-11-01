import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 mt-2 mb-8 lg:mb-2">
          <img src={"./logo.png"} alt="StudyMeister Logo" width={150} height={42} className="z-20 ml-2 lg:ml-24" />
          
          {/* Hamburger button for mobile */}
          <button
            className="z-20 p-2 lg:hidden"
            onClick={toggleNav}
            aria-label="Toggle navigation"
          >
            <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isNavOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300 ${isNavOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300 ${isNavOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>

          {/* Nav Menu */}
          <nav className={`fixed inset-0 z-10 lg:bg-transparent transform transition-transform duration-300 ease-in-out lg:relative lg:inset-auto lg:transform-none lg:transition-none lg:flex lg:items-center lg:justify-end lg:flex-1 mr-2 lg:mr-16 ${
            isNavOpen ? 'translate-x-0 bg-white bg-opacity-95' : 'translate-x-full'
          } ${
            isScrolled ? 'lg:backdrop-blur-lg' : ''
          }`}>
            <div className="flex flex-col lg:flex-row items-center justify-center h-full lg:h-auto space-y-8 lg:space-y-0 lg:space-x-6 xl:space-x-8 2xl:space-x-12 text-lg lg:text-base font-rubik">
              {/* Links */}
              <a href="#pricing" className="text-[#2B2B2B] hover:text-gray-900 relative group inline-block pl-4 font-semibold">
                <span className="relative">Pricing</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E16741] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <a href="#testimonials" className="text-[#2B2B2B] hover:text-gray-900 relative group inline-block pl-4 font-semibold">
                <span className="relative">Testimonial</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E16741] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <a href="#help" className="text-[#2B2B2B] hover:text-gray-900 relative group inline-block pl-4 font-semibold">
                <span className="relative">Help</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E16741] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              
              {/* Login and Sign up */}
              <div className="flex flex-col items-center lg:flex-row lg:space-x-4 xl:space-x-6 2xl:space-x-8">
                <button onClick={handleLoginClick} className="text-[#2B2B2B] hover:text-gray-900 relative group inline-block pl-4 pr-2 font-semibold mb-8 lg:mb-0">
                  <span className="relative">Login</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E16741] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
                <Link to="signup" className="px-5 py-[3px] font-semibold text-[#E16741] bg-white 
                      border-2 border-[#E16741] rounded-[6px] hover:bg-[white] hover:text-[#3D5A80] hover:border-[#3D5A80]
                      transition-colors duration-300">
                  Sign up
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      
    </header>
  );
};

export default Header;