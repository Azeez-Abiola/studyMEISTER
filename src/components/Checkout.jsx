import { useState } from 'react'
import { ChevronLeft, CreditCard } from 'lucide-react'

export default function Component() {
  const [paymentMethod, setPaymentMethod] = useState('card')

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 md:p-6">
          <button className="flex items-center text-gray-600 mb-6">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back
          </button>
          <h1 className="text-2xl font-bold mb-8">Checkout</h1>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-4">Add your payment information</h2>
              <div className="flex gap-2 mb-4">
                <button
                  className={`flex-1 py-2 px-4 border rounded-md ${
                    paymentMethod === 'card' ? 'bg-gray-100 border-gray-300' : 'border-gray-200'
                  }`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <CreditCard className="w-6 h-6 mx-auto" />
                </button>
                <button
                  className={`flex-1 py-2 px-4 border rounded-md ${
                    paymentMethod === 'paypal' ? 'bg-gray-100 border-gray-300' : 'border-gray-200'
                  }`}
                  onClick={() => setPaymentMethod('paypal')}
                >
                  <img src="/placeholder.svg?height=24&width=24" alt="PayPal" className="w-6 h-6 mx-auto" />
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Card number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="1234 5678 9012 3456"
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
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name on card
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country or region
                  </label>
                  <select id="country" className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                  </select>
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
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Confirm order
                </button>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  By confirming your order you agree to our Terms and Conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}