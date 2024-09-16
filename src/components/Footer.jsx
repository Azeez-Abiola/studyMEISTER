import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start md:ml-[120px]">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <img src="./logo.png" alt="Company Logo" className="mb-4 mt-6 w-24 h-auto" />
            <p className="text-gray-600 mb-4 text-sm">
              Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.
            </p>
            <div className="flex space-x-3">
              <img src="/facebook-icon.png" alt="Facebook" className="w-5 h-5" />
              <img src="/whatsapp-icon.png" alt="Twitter" className="w-5 h-5" />
              <img src="/youtube-icon.png" alt="Instagram" className="w-5 h-5" />
            </div>
          </div>
          
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0 md:pl-40">
            <h3 className="text-base font-semibold mb-2">Features</h3>
            <ul className="text-gray-600 text-sm">
              <li className="mb-2">Features</li>
              <li className="mb-2">Pricing</li>
              <li className="mb-2">Locations</li>
              <li className="mb-2">Blog</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0 md:pl-20">
            <h3 className="text-base font-semibold mb-2">Engage</h3>
            <ul className="text-gray-600 text-sm">
              <li className="mb-2">FAQ</li>
              <li className="mb-2">Tutorials</li>
              <li className="mb-2">About us</li>
              <li className="mb-2">Privacy policy</li>
              <li className="mb-2">Terms of service</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-base font-semibold mb-2">Earn money</h3>
            <ul className="text-gray-600 text-sm">
              <li className="mb-2">Become partner</li>
              <li className="mb-2">Affiliate</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p className="text-gray-600 text-sm">&copy; 2024 StudyMeister. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
