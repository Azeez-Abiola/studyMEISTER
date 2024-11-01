import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 w-full">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start md:ml-[60px] pt-16">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <img src="./logo.png" alt="Company Logo" className="mb-4 w-40 h-auto" />
            <p className="font-inter font-semibold text-gray-600 mb-2 text-sm leading-[1.2] mb-8">
            Simplify your research journey with tools <br /> that help you organize, draft, and refine <br /> your articles effortlessly.
            </p>
            <div className="flex space-x-4 mt-2">
              <img src="/facebook-icon.png" alt="Facebook" className="w-8 h-8 mt-2" />
              <img src="/whatsapp-icon.png" alt="Twitter" className="w-8 h-8 mt-2" />
              <img src="/youtube-icon.png" alt="Instagram" className="w-8 h-8 mt-2" />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:w-2/3 lg:w-3/5 md:justify-end">
            <div className="w-full md:w-1/4 mb-8 md:mb-0 pr-4">
              <h3 className="font-inter text-base font-bold mb-2">Home</h3>
              <ul className="font-inter text-gray-600 text-sm space-y-4">
                <li className="mb-2">Pricing</li>
                <li className="mb-2">Testimonials</li>
                <li className="mb-2">Blog</li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-8 md:mb-0 pr-4">
              <h3 className="font-inter text-base font-bold mb-2">About us</h3>
              <ul className="font-inter text-gray-600 text-sm space-y-4">
                <li className="mb-2">FAQ</li>
                <li className="mb-2">Privacy policy</li>
                <li className="mb-2">Terms of service</li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h3 className="font-inter text-base font-bold mb-2">Contact us</h3>
              <ul className="font-inter text-gray-600 text-sm space-y-4">
                <li className="mb-2">Become partner</li>
                <li className="mb-2">Affiliate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;