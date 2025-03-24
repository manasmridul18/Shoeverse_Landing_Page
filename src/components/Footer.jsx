import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 w-full">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm">&copy; 2025 ShoeVerse. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2 text-sm">
          <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-400 transition-colors">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
