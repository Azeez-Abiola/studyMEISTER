import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft, FaChevronDown, FaBars } from 'react-icons/fa';
import AdminDashboard from './AdminDashboard'; // Import the AdminDashboard component
import RelevanceChecker from './RelevanceChecker'; // Import the RelevanceChecker component

const Dashboard = () => {
  console.log("Dashboard component is rendering");

  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [showCompletedArticles, setShowCompletedArticles] = useState(false);
  const [showProfileContent, setShowProfileContent] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mainContent, setMainContent] = useState(''); // New state for main content

  const handleMenuItemClick = (menuItem, content) => {
    setActiveMenuItem(menuItem);
    setMainContent(content); // Set the main content based on the menu item clicked
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDashboardClick = () => {
    setMainContent(<AdminDashboard />); // Set the main content to AdminDashboard component
    setActiveMenuItem('admin-dashboard'); // Set active menu item
  };

  const handleRelevanceCheckerClick = () => {
    setMainContent(<RelevanceChecker />); // Set the main content to RelevanceChecker component
    setActiveMenuItem('relevance-checker'); // Set active menu item
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
          <img src="/logo.png" alt="Logo" className="h-6" />
        </div>

        {/* Menu Items */}
        <nav className="space-y-3 px-4 flex-grow mt-6">
          <button 
            className={`flex items-center justify-between px-2 py-2 text-xs font-semibold text-[#3D5A80] hover:text-white hover:bg-[#3D5A80] rounded-md transition-all duration-200 ${activeMenuItem === 'admin-dashboard' ? 'bg-[#3D5A80] text-white' : ''}`}
            onClick={handleDashboardClick} // Call the function to switch to AdminDashboard
          >
            <span className="flex items-center">
              <img src="/Dashboard.png" alt="Admin Dashboard" className={`w-4 h-4 mr-3`} />
              <span>Dashboard</span>
            </span>
            <FaChevronRight className="ml-4 text-xs" />
          </button>

          <button 
            className={`flex items-center justify-between px-2 py-2 text-xs font-semibold text-[#3D5A80] hover:text-white hover:bg-[#3D5A80] rounded-md transition-all duration-200 ${activeMenuItem === 'relevance-checker' ? 'bg-[#3D5A80] text-white' : ''}`}
            onClick={handleRelevanceCheckerClick} // Call the function to switch to RelevanceChecker
          >
            <span className="flex items-center">
              <img src="/Relevance.png" alt="Relevance Checker" className={`w-4 h-4 mr-3`} />
              <span>Relevance Checker</span>
            </span>
            <FaChevronRight className="ml-4 text-xs" />
          </button>

          <button 
            className={`flex items-center justify-between px-2 py-2 text-xs font-semibold text-[#3D5A80] hover:text-white hover:bg-[#3D5A80] rounded-md transition-all duration-200 ${activeMenuItem === 'research-lab' ? 'bg-[#3D5A80] text-white' : ''}`}
            onClick={() => handleMenuItemClick('research-lab', 'Explore various research topics here.')}
          >
            <span className="flex items-center">
              <img src="/ResearchLab.png" alt="Research Lab" className={`w-4 h-4 mr-3`} />
              <span>Research Lab</span>
            </span>
            <FaChevronRight className="ml-4 text-xs" />
          </button>

          <button 
            className={`flex items-center justify-between px-2 py-2 text-xs font-semibold text-[#3D5A80] hover:text-white hover:bg-[#3D5A80] rounded-md transition-all duration-200 ${activeMenuItem === 'paraphraser' ? 'bg-[#3D5A80] text-white' : ''}`}
            onClick={() => handleMenuItemClick('paraphraser', 'Use our paraphraser tool to rewrite your text.')}
          >
            <span className="flex items-center">
              <img src="/Paraphraser.png" alt="Paraphraser" className={`w-4 h-4 mr-3`} />
              <span>Paraphraser</span>
            </span>
            <FaChevronRight className="ml-4 text-xs" />
          </button>

          <button 
            className={`flex items-center justify-between px-2 py-2 text-xs font-semibold text-[#3D5A80] hover:text-white hover:bg-[#3D5A80] rounded-md transition-all duration-200 ${activeMenuItem === 'peer-review' ? 'bg-[#3D5A80] text-white' : ''}`}
            onClick={() => handleMenuItemClick('peer-review', 'Get feedback on your articles from peers.')}
          >
            <span className="flex items-center">
              <img src="/PeerReview.png" alt="Peer Review" className={`w-4 h-4 mr-3`} />
              <span>Peer Review</span>
            </span>
            <FaChevronRight className="ml-4 text-xs" />
          </button>

          <button 
            className={`flex items-center justify-between px-2 py-2 text-xs font-semibold text-[#3D5A80] hover:text-white hover:bg-[#3D5A80] rounded-md transition-all duration-200 ${activeMenuItem === 'help' ? 'bg-[#3D5A80] text-white' : ''}`}
            onClick={() => handleMenuItemClick('help', 'Find help and support here.')}
          >
            <span className="flex items-center">
              <img src="/help.png" alt="Help" className={`w-4 h-4 mr-3`} />
              <span>Help</span>
            </span>
            <FaChevronRight className="ml-4 text-xs" />
          </button>
        </nav>

        {/* Box Below Menu Items */}
        <div className="p-4 bg-gray-200 rounded-md mt-4">
          <p className="text-sm text-gray-700">This is a box below the menu items.</p>
        </div>

        {/* Profile Section */}
        <div className="mx-4 mb-3 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/profile.png" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
            <div>
              <p className="text-black font-semibold text-xs">Evano</p>
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
      <div className="flex-1 p-4 md:p-10 bg-[#f1f4f9] overflow-y-auto mb-12">
        <div className="text-left">
          <h2 className="text-lg md:text-xl font-bold text-black">Hello Evano 👋🏼,</h2>
          <p className="text-xs text-gray-600">Welcome to your personal space. Here you'll find resources to help you write articles</p>
          <h1 className="text-lg md:text-xl font-bold text-black mt-6 md:mt-9 mb-4 md:mb-6">Dashboard</h1>
          <div className="mt-4 text-gray-600">{mainContent}</div> {/* Display the main content here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;