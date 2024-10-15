import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureStats from './components/FeatureStats';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import EmailVerification from './components/EmailVerification';
import VerificationCode from './components/VerificationCode';
import Pricing from './components/Pricing';
import Checkout from './components/Checkout';
import RelevanceChecker from './components/RelevanceChecker';
import AdminDashboard from './components/AdminDashboard';
import Paraphraser from './components/Paraphraser';

// CenteredContent ensures max-width scaling across various viewports
const CenteredContent = ({ children }) => (
  <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

// Home Component that contains the main layout
const Home = () => (
  <>
    <div className="flex flex-col items-center w-full">
      <CenteredContent>
        <Header />
        <main className="w-full">
          <div className="w-full max-w-full mx-auto">
            <Hero />
          </div>
          <FeatureStats />
          <Features />
          <div id="testimonials" className="w-full">
            <Testimonials />
          </div>
          <Subscribe />
        </main>
      </CenteredContent>
    </div>
    <Footer />
  </>
);

// App Component with routes
const App = () => {
  return (
    <Router>
      <div className="min-h-screen w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/verification" element={<VerificationCode />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/relevance-checker" element={<RelevanceChecker />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/paraphraser" element={<Paraphraser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
