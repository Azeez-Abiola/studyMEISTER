import { useState } from 'react'
import { ChevronLeft, CreditCard } from 'lucide-react'

export default function Component() {
  const [paymentMethod, setPaymentMethod] = useState('card')

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <button className="flex items-center text-gray-600">
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back
            </button>
            <h1 className="text-2xl font-bold">Checkout</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 max-w-md">
              <h2 className="text-lg font-semibold mb-4">Add your payment information</h2>
              <h3 className='font-semibold mb-2'>Payment Method</h3>
              <div className="flex gap-4 mb-4">
                <button
                  className={`flex-1 py-2 px-4 border rounded-md flex items-center justify-between ${
                    paymentMethod === 'Visa' ? 'bg-gray-100 border-gray-300' : 'border-gray-200'
                  }`}
                  onClick={() => setPaymentMethod('Visa')}
                >
                  <div className="flex items-center">
                  <span className="text-sm mr-4">Card</span>
                    <img src="/Visa.png?height=24&width=40" alt="Visa" className="h-6 w-auto mr-2" />
                   
                  </div>
                  <div className={`w-4 h-4 rounded-full ${paymentMethod === 'Visa' ? 'bg-blue-500' : 'border border-gray-400'}`}></div>
                </button>
                <button
                  className={`flex-1 py-2 px-4 border rounded-md flex items-center justify-between ${
                    paymentMethod === 'paypal' ? 'bg-gray-100 border-gray-300' : 'border-gray-200'
                  }`}
                  onClick={() => setPaymentMethod('paypal')}
                >
                  <img src="/Paypal.png?height=24&width=80" alt="PayPal" className="h-6 w-auto" />
                  <div className={`w-4 h-4 rounded-full ${paymentMethod === 'paypal' ? 'bg-blue-500' : 'border border-gray-400'}`}></div>
                </button>
              </div>
              <form className="space-y-4">
              <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name on card
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="J."
                  />
                </div>
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Card number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="1234 5678"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="123"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP
                  </label>
                  <input
                    type="text"
                    id="zip"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="12345"
                  />
                </div>
                <h3 className="font-semibold mt-6 mb-2">Login details</h3>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Choose a username"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter password"
                  />
                </div>
                <div>
                  <label htmlFor="reenterPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Re-enter Password
                  </label>
                  <input
                    type="password"
                    id="reenterPassword"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Re-enter password"
                  />
                </div>
              </form>
            </div>
            <div className="flex-1 md:max-w-sm">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>$840.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping estimate</span>
                    <span>$5.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax estimate</span>
                    <span>$0.00</span>
                  </div>
                </div>
                <div className="flex justify-between font-semibold text-lg mb-6">
                  <span>To pay now</span>
                  <span>$845.00 USD</span>
                </div>
                <button 
                  className="w-full bg-[#3D5A80] text-white py-2 px-4 rounded-md hover:bg-white hover:text-[#3D5A80] border-2 border-[#3D5A80] transition-all duration-300"
                  onClick={() => {
                    // Show preloader
                    document.querySelector('.preloader').classList.remove('hidden');
                    // Navigate to signup page after a short delay
                    setTimeout(() => {
                      window.location.href = '/signin';
                    }, 1000);
                  }}
                >
                  Subscribe Now!
                </button>
                {/* Preloader */}
                <div className="preloader fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50 hidden">
                  <div className="w-16 h-16 border-4 border-[#3D5A80] border-t-transparent rounded-full animate-spin"></div>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  By continuing, you agree to Stripe's <u><a href="#">terms</a></u> and <u><a href="#">privacy policy</a></u>. You'll be charged $45.00 USD every month until you cancel your subscription
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}