import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureStats from './components/FeatureStats';
import Features from './components/Features';
import Testimonials from './components/testimonials';
import Subscribe from './components/subscribe';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import EmailVerification from './components/EmailVerification';
import VerificationCode from './components/VerificationCode';
import Pricing from './components/Pricing';
import Checkout from './components/Checkout';
import RelevanceChecker from './components/RelevanceChecker'; // Added RelevanceChecker
import AdminDashboard from './components/AdminDashboard'; // Added AdminDashboard

const Preloader = () => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
    <div className="w-16 h-16 rounded-full animate-spin" style={{
      background: 'conic-gradient(from 0deg, #3D5A80, #98C1D9)',
    }}></div>
  </div>
);

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowContent(true), 100); // Slight delay before showing content
    }, 500); // Reduced preloader time to 500ms
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleSmoothScroll = (e) => {
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
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  const handleSignUpClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/signup');
    }, 500); // Reduced loading time to 500ms
  };

  return (
    <div className="bg-white-100 min-h-screen">
      {loading && <Preloader />}
      {showContent && (
        <>
          <Header onSignUpClick={handleSignUpClick} />
          <main className="flex flex-col">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <Hero />
            </div>
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <FeatureStats />
            </div>
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <Features />
            </div>
            <div id="testimonials" className="w-full px-4 sm:px-6 lg:px-8">
              <Testimonials />
            </div>
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <Subscribe />
            </div>
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <Footer />
            </div>
          </main>
        </>
      )}
    </div>
  );
};

const AppContent = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // Reduced loading time to 500ms
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp loading={loading} />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/email-verification" element={<EmailVerification />} />
      <Route path="/verification" element={<VerificationCode />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/relevance-checker" element={<RelevanceChecker />} /> {/* Added RelevanceChecker route */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Added AdminDashboard route */}
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
