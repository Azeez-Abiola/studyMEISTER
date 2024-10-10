import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureStats from './components/FeatureStats';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import EmailVerification from './components/EmailVerification';
import VerificationCode from './components/VerificationCode';
import Pricing from './components/Pricing';
import Checkout from './components/Checkout';
import RelevanceChecker from './components/RelevanceChecker';
import AdminDashboard from './components/AdminDashboard';
import Paraphraser from './components/Paraphraser';

const Preloader = () => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
    <div className="w-16 h-16 rounded-full animate-spin" style={{
      background: 'conic-gradient(from 0deg, #3D5A80, #98C1D9)',
    }}></div>
  </div>
);

const CenteredContent = ({ children }) => (
  <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowContent(true), 100);
    }, 500);
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
    }, 500);
  };

  return (
    <div className="bg-white-100 min-h-screen">
      {loading && <Preloader />}
      {showContent && (
        <>
          <Header onSignUpClick={handleSignUpClick} />
          <main className="flex flex-col">
            <CenteredContent>
              <Hero />
              <FeatureStats />
              <Features />
              <div id="testimonials">
                <Testimonials />
              </div>
              <Subscribe />
              <Footer />
            </CenteredContent>
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
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <CenteredContent>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp loading={loading} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/verification" element={<VerificationCode />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/relevance-checker" element={<RelevanceChecker />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/paraphraser" element={<Paraphraser />} />
      </Routes>
    </CenteredContent>
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