import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const Preloader = () => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50">
    <div className="w-12 h-12 rounded-full animate-spin" style={{
      background: 'conic-gradient(from 0deg, #3D5A80, #98C1D9)',
    }}></div>
  </div>
);

const EmailVerification = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Handle email verification logic here
    console.log('Email submitted for verification:', email);
    // Simulate API call or processing time
    setTimeout(() => {
      setLoading(false);
      // Navigate to the Pricing page
      navigate('/pricing');
    }, 1000); // 1 second delay for demonstration
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 relative">
      {loading && <Preloader />}
      <div className="absolute top-10 left-10 mt-4 ml-4">
        <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800">
          <FaLongArrowAltLeft className="mr-2 text-xl" />
          <span className='font-bold' >Back</span>
        </Link>
      </div>
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-lg p-8">
          <div className="text-center mb-6">
            <img src="/email.png" alt="Email Icon" className="mx-auto w-20 h-20 mb-4" />
            <h2 className="text-2xl font-bold text-black mb-2">Verify your email</h2>
            <p className="text-sm text-gray-600">We will send a 6-digit verification code to the email entered below.</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D5A80]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#3D5A80] text-white py-2 rounded-md hover:bg-white hover:text-[#3D5A80] hover:border-2 hover:border-[#3D5A80] transition-all duration-200"
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Verify Email'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <span className="text-gray-600">Already have an account? </span>
            <Link to="/signin" className="text-red-500 hover:text-red-700">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
