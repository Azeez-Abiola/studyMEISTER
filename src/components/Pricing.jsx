import { useState } from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa';

const plans = [
  {
    name: 'Basic',
    price: { monthly: 0, annual: 0 },
    features: [
      'For your hobby projects',
      'Free to use',
      'Unlimited credits',
      'Automatic data enrichment',
      '10 metrics',
      'Up to 3 users',
    ],
    cta: 'Get started for free',
  },
  {
    name: 'Pro',
    price: { monthly: 45, annual: 39 },
    features: [
      'Great for small businesses',
      'Unlimited credits',
      '30 second credits',
      'Single user account',
      '20 metrics',
      'Up to 5 users',
    ],
    cta: 'Get started with Pro',
    popular: true,
  },
  {
    name: 'Advanced',
    price: { monthly: 'Custom', annual: 'Custom' },
    features: [
      'For medium teams',
      'Everything in Pro',
      'Up to 10 team members',
      '50 metrics',
      '10 data sources',
      'Custom integrations',
    ],
    cta: 'Get started with Enterprise',
  },
]

export default function Component() {
  const [billingCycle, setBillingCycle] = useState('monthly')

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto p-6 relative">
        <button className="absolute top-0 left-0 flex items-center text-gray-600 mb-4">
          <FaLongArrowAltLeft className="w-4 h-4 mr-2" />
          Back
        </button>
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Plans and Pricing</h1>
          <p className="text-gray-600">Receive unlimited credits when you pay yearly, <br /> and save on your plan.</p>
        </div>
        
        <div className="flex justify-center items-center space-x-4 mb-8">
          <div className="relative w-64 h-8 rounded-[5px] overflow-hidden border-2 border-[#9fb0cc]">
            <div 
              className={`absolute top-0 left-0 w-1/2 h-full bg-[#9fb0cc] transition-transform duration-300 ease-in-out ${
                billingCycle === 'annual' ? 'translate-x-full' : ''
              }`}
            ></div>
            <button
              className="absolute top-0 left-0 w-1/2 h-full flex items-center justify-center z-10 transition-colors duration-300 rounded-[5px]"
              onClick={() => setBillingCycle('monthly')}
            >
              <span className={billingCycle === 'monthly' ? 'text-white' : 'text-[#3D5A80]'}>Monthly</span>
            </button>
            <button
              className="absolute top-0 right-0 w-1/2 h-full flex items-center justify-center z-10 transition-colors duration-300 rounded-[5px]"
              onClick={() => setBillingCycle('annual')}
            >
              <span className={billingCycle === 'annual' ? 'text-white' : 'text-[#3D5A80]'}>Annual</span>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className="rounded-lg p-6 relative transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-2 hover:border-[#3D5A80]"
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
                  Popular
                </span>
              )}
              <h2 className="text-xl font-bold mb-4">{plan.name}</h2>
              <p className="text-3xl font-bold mb-4">
                ${typeof plan.price[billingCycle] === 'number' ? plan.price[billingCycle].toFixed(2) : plan.price[billingCycle]}
                {typeof plan.price[billingCycle] === 'number' && <span className="text-sm font-normal">/{billingCycle === 'monthly' ? 'mo' : 'year'}</span>}
              </p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <img src="/checkmark.png" alt="Checkmark" className="w-4 h-4 mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 rounded-md bg-[#3D5A80] text-white hover:bg-white hover:text-[#3D5A80] transition-colors duration-300">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-8">
          Plug ($18) + Plug ($8.4)
        </p>
      </div>
    </div>
  )
}