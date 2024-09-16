import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft, FaChevronDown, FaBars } from 'react-icons/fa';

const Dashboard = () => {
  console.log("Dashboard component is rendering");

  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [showCompletedArticles, setShowCompletedArticles] = useState(false);
  const [showProfileContent, setShowProfileContent] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-['Poppins']">
      {/* Mobile Header */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <button onClick={toggleMobileMenu} className="text-[#3D5A80]">
          <FaBars size={24} />
        </button>
      </div>

      {/* Left Sidebar */}
      <div className={`w-full md:w-64 shadow-md bg-white flex flex-col ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        {/* Logo (hidden on mobile) */}
        <div className="p-4 hidden md:block">
          <img src="/logo.png" alt="Logo" className="h-8" />
        </div>

        {/* Divider */}
        <hr className="border-gray-200 border-t-2" />

        {/* Menu Items */}
        <nav className="space-y-3 px-4 flex-grow mt-6">
          <Link 
            to="/dashboard" 
            className={`flex items-center px-2 py-2 text-sm font-semibold text-[#3D5A80] hover:text-white hover:bg-[#3D5A80] hover:rounded-md transition-all duration-200 ${activeMenuItem === 'dashboard' ? 'bg-[#3D5A80] text-white rounded-md' : ''}`}
            onClick={() => handleMenuItemClick('dashboard')}
          >
            <img src="/Dashboard.png" alt="Dashboard" className={`w-4 h-4 mr-3 ${activeMenuItem === 'dashboard' ? 'filter brightness-0 invert' : ''}`} />
            <span>Dashboard</span>
            <FaChevronRight className="ml-auto text-xs" />
          </Link>
          <Link 
            to="/relevance-checker" 
            className={`flex items-center px-2 py-2 text-sm font-semibold text-[#3D5A80] hover:text-white hover:bg-[#3D5A80] hover:rounded-md transition-all duration-200 ${activeMenuItem === 'relevance-checker' ? 'bg-[#3D5A80] text-white rounded-md' : ''}`}
            onClick={() => handleMenuItemClick('relevance-checker')}
          >
            <img src="/Relevance.png" alt="Relevance Checker" className={`w-4 h-4 mr-3 ${activeMenuItem === 'relevance-checker' ? 'filter brightness-0 invert' : ''}`} />
            <span>Relevance Checker</span>
            <FaChevronRight className="ml-auto text-xs" />
          </Link>
          <Link 
            to="/research-lab" 
            className={`flex items-center px-2 py-2 text-sm font-semibold text-[#3D5A80] hover:text-white hover:bg-[#3D5A80] hover:rounded-md transition-all duration-200 ${activeMenuItem === 'research-lab' ? 'bg-[#3D5A80] text-white rounded-md' : ''}`}
            onClick={() => handleMenuItemClick('research-lab')}
          >
            <img src="/ResearchLab.png" alt="Research Lab" className={`w-4 h-4 mr-3 ${activeMenuItem === 'research-lab' ? 'filter brightness-0 invert' : ''}`} />
            <span>Research Lab</span>
            <FaChevronRight className="ml-auto text-xs" />
          </Link>
          <Link 
            to="/paraphraser" 
            className={`flex items-center px-2 py-2 text-sm font-semibold text-[#3D5A80] hover:text-white hover:bg-[#3D5A80] hover:rounded-md transition-all duration-200 ${activeMenuItem === 'paraphraser' ? 'bg-[#3D5A80] text-white rounded-md' : ''}`}
            onClick={() => handleMenuItemClick('paraphraser')}
          >
            <img src="/Paraphraser.png" alt="Paraphraser" className={`w-4 h-4 mr-3 ${activeMenuItem === 'paraphraser' ? 'filter brightness-0 invert' : ''}`} />
            <span>Paraphraser</span>
            <FaChevronRight className="ml-auto text-xs" />
          </Link>
          <Link 
            to="/peer-review" 
            className={`flex items-center px-2 py-2 text-sm font-semibold text-[#3D5A80] hover:text-white hover:bg-[#3D5A80] hover:rounded-md transition-all duration-200 ${activeMenuItem === 'peer-review' ? 'bg-[#3D5A80] text-white rounded-md' : ''}`}
            onClick={() => handleMenuItemClick('peer-review')}
          >
            <img src="/PeerReview.png" alt="Peer Review" className={`w-4 h-4 mr-3 ${activeMenuItem === 'peer-review' ? 'filter brightness-0 invert' : ''}`} />
            <span>Peer Review</span>
            <FaChevronRight className="ml-auto text-xs" />
          </Link>
          <Link 
            to="/help" 
            className={`flex items-center px-2 py-2 text-sm font-semibold text-[#3D5A80] hover:text-white hover:bg-[#3D5A80] hover:rounded-md transition-all duration-200 ${activeMenuItem === 'help' ? 'bg-[#3D5A80] text-white rounded-md' : ''}`}
            onClick={() => handleMenuItemClick('help')}
          >
            <img src="/help.png" alt="Help" className={`w-4 h-4 mr-3 ${activeMenuItem === 'help' ? 'filter brightness-0 invert' : ''}`} />
            <span>Help</span>
            <FaChevronRight className="ml-auto text-xs" />
          </Link>
        </nav>

        {/* Upgrade to PRO box */}
        <div className="mx-4 mt-auto mb-4 p-3 rounded-lg bg-gradient-to-r from-[#98C1D9] to-[#3D5A80] flex flex-col justify-center items-center h-28">
          <p className="text-white text-xs font-semibold mb-2 text-center pb-2">Upgrade to PRO to get access to all Features!</p>
          <button className="w-full bg-white text-[#3D5A80] px-3 py-1 rounded text-sm hover:bg-[#3D5A80] hover:text-white transition-colors duration-200 hover:border-2 hover:border-[#98C1D9]">
            Get Pro Now!
          </button>
        </div>

        {/* Profile Section */}
        <div className="mx-4 mb-3 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/profile.png" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
            <div>
              <p className="text-black font-semibold text-sm">Evano</p>
              <p className="text-gray-600 text-xs">Project Manager</p>
            </div>
          </div>
          <button onClick={() => setShowProfileContent(!showProfileContent)}>
            {showProfileContent ? <FaChevronDown className="text-xs" /> : <FaChevronLeft className="text-xs" />}
          </button>
        </div>

        {showProfileContent && (
          <div className="mx-4 mb-3 p-2 bg-gray-100 rounded">
            <p className="text-xs text-gray-600">Random profile content here...</p>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4 md:p-10 bg-[#f1f4f9] overflow-y-auto">
        <div className="text-left">
          <h2 className="text-xl md:text-2xl font-bold text-black">Hello Evano 👋🏼,</h2>
          <p className="text-sm text-gray-600">Welcome to your personal space. Here you'll find resources to help you write articles</p>
          <h1 className="text-xl md:text-2xl font-bold text-black mt-6 md:mt-9 mb-4 md:mb-6">Dashboard</h1>
          <div className="flex flex-col md:flex-row justify-start mt-2 space-y-2 md:space-y-0 md:space-x-4">
            <div className="relative">
              <button
                className="w-full md:w-auto text-sm bg-[#3D5A80] text-white px-4 py-2 rounded hover:bg-white hover:text-[#3D5A80] transition-colors duration-200"
                onClick={() => setShowCompletedArticles(true)}
              >
                Completed Articles
              </button>
              {showCompletedArticles && (
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ top: '100px' }}>
                  <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-full md:w-2/3 max-w-2xl transform transition-all duration-300 ease-out origin-top" style={{ animation: 'slideIn 0.3s ease-out' }}>
                    <div className="bg-gradient-to-r from-[#98C1D9] to-[#3D5A80] text-white p-3 md:p-4 rounded-t-lg">
                      <h2 className="text-xl md:text-2xl font-bold">Completed Articles</h2>
                    </div>
                    <div className="mt-4 flex flex-col md:flex-row items-center">
                      <img src="/achievement.png" alt="Achievement" className="w-12 h-12 mb-2 md:mb-0 md:mr-4" />
                      <p className="text-gray-600 text-center md:text-left">Showcase Your Expertise: Publish Your Articles and Gain the Recognition You Deserve!</p>
                    </div>
                    <button onClick={() => setShowCompletedArticles(false)} className="mt-4 w-full md:w-auto bg-[#3D5A80] text-white px-4 py-2 rounded hover:bg-[#2C4A6B] transition-colors duration-200">Close</button>
                  </div>
                </div>
              )}
              <style jsx>{`
                @keyframes slideIn {
                  from {
                    opacity: 0;
                    transform: translateY(-20px) scale(0.95);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                  }
                }
              `}</style>
            </div>
            <button className="w-full md:w-auto text-sm bg-[#3D5A80] text-white px-4 py-2 rounded hover:bg-white hover:text-[#3D5A80] transition-colors duration-200">
              In-progress Articles
            </button>
          </div>
        </div>
        {/* Add your main dashboard content here */}
        <p className="mt-4 text-gray-600"></p>
      </div>
    </div>
  );
};

export default Dashboard;
