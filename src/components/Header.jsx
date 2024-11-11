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
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-8 xl:px-0">
        <div className="flex items-center justify-between py-2 mt-2 mb-4 lg:mb-2">
          <img 
            src={"./logo.png"} 
            alt="StudyMeister Logo" 
            width={120} 
            height={32} 
            className="z-20 ml-2 lg:ml-0 xl:ml-[174px]" 
          />
          
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
          <nav className={`fixed inset-0 z-10 lg:bg-transparent transform transition-transform duration-300 ease-in-out lg:relative lg:inset-auto lg:transform-none lg:transition-none lg:flex lg:items-center lg:justify-end lg:flex-1 lg:mr-48 ${
            isNavOpen ? 'translate-x-0 bg-white bg-opacity-95' : 'translate-x-full'
          } ${
            isScrolled ? 'lg:backdrop-blur-lg' : ''
          }`}>
            <div className="flex flex-col lg:flex-row items-center justify-center h-full lg:h-auto space-y-4 lg:space-y-0 lg:space-x-4 text-lg lg:text-base font-rubik">
              {/* Links */}
<a href="#pricing" className="text-[#2B2B2B] hover:text-gray-900 relative group inline-block pl-2 font-semibold lg:mr-4">
  <span className="relative">Pricing</span>
  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E16741] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
</a>
<a href="#testimonials" className="text-[#2B2B2B] hover:text-gray-900 relative group inline-block font-semibold lg:mr-4">
  <span className="relative">Testimonial</span>
  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E16741] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
</a>

{/* Login and Sign up */}
<div className="flex flex-col items-center lg:flex-row lg:space-x-2 lg:pl-24 xl:pl-16 xl:pr-8">
                <button onClick={handleLoginClick} className="text-[#2B2B2B] hover:text-gray-900 relative group inline-block pl-2 pr-2 font-semibold mb-4 lg:mb-0 lg:mr-2">
                  <span className="relative">Login</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E16741] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
                <Link to="signup" className="px-4 py-[2px] font-semibold text-[#E16741] bg-white 
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