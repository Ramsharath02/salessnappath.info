import React from 'react';
import Container from './Container';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="max-w-md mx-auto text-center">
          <Logo className="text-white mx-auto mb-6" />
          <h3 className="font-semibold text-lg mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400 mb-6">
            Stay updated with the latest features and releases
          </p>
          <form className="space-y-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-400 text-sm mt-8">
            &copy; {currentYear} SalesSnapPath. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;