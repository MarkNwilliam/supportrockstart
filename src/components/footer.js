// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-wrap md:flex-no-wrap justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
            <Link to="/" className="px-5 py-2 text-sm leading-5 text-gray-300 hover:text-white">Home</Link>
            <Link to="/about" className="px-5 py-2 text-sm leading-5 text-gray-300 hover:text-white">About</Link>
            <Link to="/pricing" className="px-5 py-2 text-sm leading-5 text-gray-300 hover:text-white">Pricing</Link>
            <Link to="/features" className="px-5 py-2 text-sm leading-5 text-gray-300 hover:text-white">Features</Link>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SupportSalesRockstar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
