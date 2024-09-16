import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const VerificationCode = () => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);

  const handleCodeChange = (index, value) => {
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);
  };

  const handleVerify = () => {
    setIsLoading(true);
    // Simulate API call or verification process
    setTimeout(() => {
      setIsLoading(false);
      navigate('/pricing');
    }, 2000); // 2 seconds delay to simulate loading
  };

  const handleResend = () => {
    // Implement resend logic here
  };

  return (
    <div className="flex flex-col min-h-screen p-4">
      <div className="flex items-center mb-8 cursor-pointer" onClick={() => navigate('/email-verification')}>
        <FaArrowLeft className="mr-2" />
        <span>Back</span>
      </div>
      
      <div className="flex flex-col items-center flex-grow">
        <img src="/email.png" alt="Email" className="w-24 h-24 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Check your email</h2>
        <p className="text-gray-600 mb-6 text-center">
          We sent a verification link to abiolaquadri111@gmail.com
        </p>
        
        <div className="flex mb-6">
          {verificationCode.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-12 h-12 mx-1 text-center border-2 border-[#3D5A80] rounded"
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
            />
          ))}
        </div>
        
        <button
          className="bg-[#3D5A80] text-white px-6 py-2 rounded hover:bg-white hover:text-[#3D5A80] hover:border-2 hover:border-[#3D5A80] transition-colors"
          onClick={handleVerify}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Verifying...
            </div>
          ) : (
            'Verify email'
          )}
        </button>
        <div className="mt-4 text-center">
          <p className="text-gray-600 inline-block mr-2">Didn't receive the email?</p>
          <span className="text-red-500 cursor-pointer inline-block" onClick={handleResend}>Click to resend</span>
        </div>
        
        <div className="mt-8 flex items-center text-red-500 cursor-pointer" onClick={() => navigate('/signin')}>
          <FaArrowLeft className="mr-2" />
          <span>Back to log in</span>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;

