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
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 mt-2">
          <img src={"./logo.png"} alt="StudyMeister Logo" width={150} height={42} className="z-20 ml-24" />
          <button
            className="z-20 p-2 lg:hidden"
            onClick={toggleNav}
            aria-label="Toggle navigation"
          >
            <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isNavOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300 ${isNavOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300 ${isNavOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
          <nav className={`fixed inset-0 z-10 bg-white transform transition-transform duration-300 ease-in-out ${isNavOpen ? 'translate-x-0' : 'translate-x-full'} lg:relative lg:inset-auto lg:transform-none lg:transition-none lg:flex lg:items-center lg:justify-end lg:flex-1 mr-16`}>
            <div className="flex flex-col lg:flex-row items-center justify-center h-full space-y-4 lg:space-y-0 lg:space-x-6 xl:space-x-8 2xl:space-x-12 text-sm font-rubik">
              <div className="lg:flex lg:items-center lg:space-x-6 xl:space-x-8 2xl:space-x-12">
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
              </div>
              <div className="lg:flex lg:items-center lg:space-x-4 xl:space-x-6 2xl:space-x-8">
                <button onClick={handleLoginClick} className="text-[#2B2B2B] hover:text-gray-900 relative group inline-block pl-4 pr-2 font-semibold">
                  <span className="relative">Login</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E16741] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
                <Link to="signup" className="px-4 py-[2px] font-semibold text-[#E16741] bg-white 
                      border border-[#E16741] rounded-[4px] hover:bg-[#E16741] hover:text-white 
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