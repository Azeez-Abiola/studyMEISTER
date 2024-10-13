import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaTwitter } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Sign in with:', email, password, 'Remember me:', rememberMe);
    setIsLoading(false);
    setIsNavigating(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Sign in with Google');
    setIsLoading(false);
    setIsNavigating(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  const handleTwitterSignIn = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Sign in with Twitter');
    setIsLoading(false);
    setIsNavigating(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const Loader = () => (
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  );

  const NavigationLoader = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      <div className="w-16 h-16 border-4 rounded-full animate-spin" style={{
        borderColor: '#98C1D9',
        borderTopColor: '#3D5A80',
        borderRightColor: '#98C1D9',
        borderBottomColor: '#3D5A80'
      }}></div>
    </div>
  );

  return (
    <div className="flex min-h-screen font-inter">
      {isNavigating && <NavigationLoader />}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
        <div className="max-w-sm w-full space-y-6 p-8">
          <div className="text-center">
            <img src="/logo.png" alt="StudyMEISTER" className="mx-auto h-8" />
            <h2 className="mt-3 text-2xl font-bold text-black">Welcome back</h2>
            <p className="mt-2 text-sm text-gray-500">Please enter your details</p>
          </div>
          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm space-y-3">
              <div>
                <Link to="/signup" className="text-xs block mb-8 ">
                  <span className="text-black">Don't have an account? </span>
                  <span className="font-semibold text-red-600">Sign up</span>
                </Link>
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-500 mb-1">Email</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="text-sm font-medium text-gray-500 mb-1">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm pr-10"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash className="h-4 w-4 text-gray-400" /> : <FaEye className="h-4 w-4 text-gray-400" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-xs text-gray-900">
                    Remember me
                  </label>
                </div>
                <div className="text-xs">
                  <Link to="/forgot-password" className="font-bold text-red-600 hover:text-red-500">
                    Forgot password?
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#3D5A80] hover:bg-white hover:text-[#3D5A80] hover:border-[#3D5A80] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3D5A80] transition-colors duration-200"
                disabled={isLoading || isNavigating}
              >
                {isLoading ? <Loader /> : 'Sign in'}
              </button>
              
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <FcGoogle className="h-5 w-5 mr-2" />
                Sign in with Google
              </button>
              
              <button
                type="button"
                onClick={handleTwitterSignIn}
                className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <FaTwitter className="h-5 w-5 mr-2 text-blue-400" />
                Sign in with Twitter
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-[#101828] to-[#475467] flex items-center justify-center">
        <img
          src="/sign-inimg.png"
          alt="Sign In"
          className="w-11/12 h-11/12 object-contain"
        />
      </div>
    </div>
  );
};

export default Login;