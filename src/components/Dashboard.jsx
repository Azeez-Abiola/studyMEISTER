import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft, FaChevronDown, FaBars } from 'react-icons/fa';
import { Award, Eye, Download, Send } from 'lucide-react';
import AdminDashboard from './AdminDashboard';
import RelevanceChecker from './RelevanceChecker';
import Paraphraser from './Paraphraser';

const ArticlePreview = ({ title, status }) => (
  <div className="bg-white p-4 rounded-lg shadow-md w-48 h-64">
    <img src="/Article.png?height=150&width=250" alt="Article thumbnail" className="w-full h-full object-cover rounded" />
    <div className="mt-4 text-black">
      <p>Research Title</p>
      <div className="flex justify-between mt-2 space-x-2">
        <button className="bg-white text-[#3D5A80] px-2 py-1 rounded-[3px] border border-[#3D5A80] hover:bg-[#3D5A80] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">Preview</button>
        <button className="bg-[#3D5A80] text-white px-2 py-1 rounded-md hover:bg-white hover:text-[#3D5A80] border border-[#3D5A80] transition-all duration-300 ease-in-out transform hover:scale-105">Download</button>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [showProfileContent, setShowProfileContent] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const unpublishedArticles = [
    { id: 1, title: "10 Tips for Effective Time Management" },
    { id: 2, title: "The Future of Artificial Intelligence in Healthcare" },
  ];

  const inProgressArticles = [
    { id: 3, title: "Sustainable Living: Small Changes, Big Impact" },
    { id: 4, title: "Mastering the Art of Public Speaking" },
  ];

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { id: 'admin-dashboard', label: 'Dashboard', icon: '/Dashboard.png' },
    { id: 'relevance-checker', label: 'Relevance Checker', icon: '/Relevance.png' },
    { id: 'research-lab', label: 'Research Lab', icon: '/ResearchLab.png' },
    { id: 'paraphraser', label: 'Paraphraser', icon: '/Paraphraser.png' },
    { id: 'peer-review', label: 'Peer Review', icon: '/PeerReview.png' },
    { id: 'help', label: 'Help', icon: '/help.png' },
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
              onClick={() => handleMenuItemClick(item.id)}
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
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
          {activeMenuItem === 'admin-dashboard' ? (
            <AdminDashboard />
          ) : activeMenuItem === 'relevance-checker' ? (
            <RelevanceChecker />
          ) : activeMenuItem === 'paraphraser' ? (
            <Paraphraser />
          ) : (
            <>
              <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Dashboard</h1>
              
              <div className="mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">Hello Evana 👋</h2>
                <p className="text-gray-600">Welcome to your personal space. Here's what's happening with your articles</p>
              </div>
              <div className="flex mb-4 space-x-1">
                <span 
                  className="text-black cursor-pointer hover:underline" 
                  onClick={() => setShowCompletedArticles(true)}
                >
                  Completed Articles
                </span>
                <span 
                  className="text-black cursor-pointer hover:underline" 
                  onClick={() => setShowCompletedArticles(false)}
                >
                  In-progress Articles
                </span>
              </div>
              <div className="bg-gradient-to-r from-[#98C1D9] to-[#3D5A80] text-white p-4 md:p-6 rounded-lg mb-6 md:mb-8">
                <div className="flex items-center mb-2 md:mb-4">
                  <Award className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3" />
                  <h2 className="text-lg md:text-xl font-bold">Showcase Your Expertise: Publish Your Articles and Gain the Recognition You Deserve!</h2>
                </div>
              </div>
              <div className="flex flex-wrap justify-between">
                {unpublishedArticles.map(article => (
                  <ArticlePreview key={article.id} title={article.title} status="unpublished" />
                ))}
                {inProgressArticles.map(article => (
                  <ArticlePreview key={article.id} title={article.title} status="in-progress" />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;