import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft, FaChevronDown, FaBars } from 'react-icons/fa';
import AdminDashboard from './AdminDashboard';
import RelevanceChecker from './RelevanceChecker';
import Paraphraser from './Paraphraser';

const Dashboard = () => {
  console.log("Dashboard component is rendering");

  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [showProfileContent, setShowProfileContent] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mainContent, setMainContent] = useState('');

  const handleMenuItemClick = (menuItem, content) => {
    setActiveMenuItem(menuItem);
    setMainContent(content);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDashboardClick = () => {
    setMainContent(<AdminDashboard />);
    setActiveMenuItem('admin-dashboard');
  };

  const handleRelevanceCheckerClick = () => {
    setMainContent(<RelevanceChecker />);
    setActiveMenuItem('relevance-checker');
  };

  const handleParaphraserClick = () => {
    setMainContent(<Paraphraser />);
    setActiveMenuItem('paraphraser');
  };

  const menuItems = [
    { id: 'admin-dashboard', label: 'Dashboard', icon: '/Dashboard.png', onClick: handleDashboardClick },
    { id: 'relevance-checker', label: 'Relevance Checker', icon: '/Relevance.png', onClick: handleRelevanceCheckerClick },
    { id: 'research-lab', label: 'Research Lab', icon: '/ResearchLab.png', onClick: () => handleMenuItemClick('research-lab', 'Explore various research topics here.') },
    { id: 'paraphraser', label: 'Paraphraser', icon: '/Paraphraser.png', onClick: handleParaphraserClick },
    { id: 'peer-review', label: 'Peer Review', icon: '/PeerReview.png', onClick: () => handleMenuItemClick('peer-review', 'Get feedback on your articles from peers.') },
    { id: 'help', label: 'Help', icon: '/help.png', onClick: () => handleMenuItemClick('help', 'Find help and support here.') },
  ];

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
          {menuItems.map((item) => (
            <button 
              key={item.id}
              className={`relative flex items-center w-full px-2 py-2 text-xs font-semibold text-[#3D5A80] hover:text-white hover:bg-[#3D5A80] rounded-md transition-all duration-200 ${activeMenuItem === item.id ? 'bg-[#3D5A80] text-white' : ''}`}
              onClick={item.onClick}
            >
              <span className="flex items-center">
                <img src={item.icon} alt={item.label} className="w-4 h-4 mr-3" />
                <span>{item.label}</span>
              </span>
              <FaChevronRight className="absolute right-2 text-xs" />
            </button>
          ))}
        </nav>
        <div className="mx-4 mb-4 mt-64 mb-16">
          <div className="p-4 rounded-lg bg-gradient-to-br from-[#98C1D9] to-[#3D5A80] text-white">
            <p className="text-sm font-semibold text-center">
              Upgrade to PRO to get access to all Features!
            </p>
            <div className="mt-3 text-center">
              <button className="bg-white text-[#3D5A80] px-4 py-2 rounded-md font-medium text-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
                Get Pro Now!
              </button>
            </div>
          </div>
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
        {activeMenuItem === null ? (
          <div className="text-left">
            <h1 className="text-lg md:text-xl font-bold text-black mt-6 md:mt-9 mb-4 md:mb-6">Dashboard</h1>
            <h2 className="text-lg md:text-xl font-bold text-black">Hello Evano 👋🏼,</h2>
            <p className="text-xs text-gray-600">Welcome to your personal space. Here you'll find resources to help you write articles</p>
          </div>
        ) : (
          <div className="mt-4 text-gray-600">{mainContent}</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;