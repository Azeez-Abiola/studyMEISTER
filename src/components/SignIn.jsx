import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignIn = () => {
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
    <div className="flex min-h-screen">
      {isNavigating && <NavigationLoader />}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="max-w-sm w-full space-y-6 p-8">
          <div className="text-center">
            <h3 className="text-lg font-normal text-black">Study<span className="font-bold">MEISTER</span></h3>
            <h2 className="mt-2 text-2xl font-bold text-black">Welcome back</h2>
            <p className="mt-2 text-xs text-gray-500">Please enter your details</p>
          </div>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm space-y-3">
              <div>
                <Link to="/signup" className="text-xs block mb-3">
                  <span className="text-black">Don't have an account? </span>
                  <span className="font-bold text-red-600">Sign up</span>
                </Link>
                <label htmlFor="email-address" className="block text-xs font-medium text-black mb-1">Email</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-2 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="text-xs font-medium text-black">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-md relative block w-full px-2 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs pr-10"
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
                    className="h-3 w-3 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
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

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-1 px-3 border border-transparent text-xs font-medium rounded-md text-white bg-[#3D5A80] hover:bg-white hover:text-[#3D5A80] hover:border-[#3D5A80] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3D5A80] transition-colors duration-200"
                disabled={isLoading || isNavigating}
              >
                {isLoading ? <Loader /> : 'Sign in'}
              </button>
            </div>
          </form>

          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div>
                <button
                  onClick={handleGoogleSignIn}
                  className="w-full inline-flex items-center justify-center py-1 px-3 border border-gray-300 rounded-md shadow-sm bg-white text-xs font-medium text-gray-500 hover:bg-gray-50"
                  disabled={isLoading || isNavigating}
                >
                  {isLoading ? <Loader /> : (
                    <>
                      <img src="/google.png" alt="Google" className="w-4 h-4 mr-2" />
                      <span>Sign in with Google</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <button
                  onClick={handleTwitterSignIn}
                  className="w-full inline-flex items-center justify-center py-1 px-3 border border-gray-300 rounded-md shadow-sm bg-white text-xs font-medium text-gray-500 hover:bg-gray-50"
                  disabled={isLoading || isNavigating}
                >
                  {isLoading ? <Loader /> : (
                    <>
                      <img src="/twitter.png" alt="Twitter" className="w-4 h-4 mr-2" />
                      <span>Sign in with Twitter</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-gradient-to-br from-[#101828] to-[#475467] bg-cover bg-center relative">
        <img
          src="/sign-inimg.png"
          alt="Sign In"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignIn;
