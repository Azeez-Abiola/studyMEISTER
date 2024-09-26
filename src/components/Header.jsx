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
          <div className="flex flex-col lg:flex-row items-center justify-center h-full space-y-4 lg:space-y-0 lg:space-x-4 text-md font-rubik">
            <div className="lg:pr-48 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 ">
              <a href="#pricing" className="text-[#2B2B2B] hover:text-gray-900 lg:pr-16">Pricing</a>
              <a href="#testimonials" className="text-[#2B2B2B] hover:text-gray-900 lg:pr-16">Testimonial</a>
              <a href="#help" className="text-[#2B2B2B] hover:text-gray-900">Help</a>
            </div>
            <Link to="/signin" className="text-[#2B2B2B] hover:text-gray-900">Sign in</Link>
            <Link to="signup" className="px-4 py-2 font-semibold text-[#E16741] bg-white 
                  border border-[#E16741] rounded-lg hover:bg-[#E16741] hover:text-white 
                  transition-colors duration-300">
              Sign up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;