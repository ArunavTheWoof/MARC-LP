import React from 'react';
import { motion } from 'framer-motion';
import marcLogo from '../assets/images/marc-logo.png';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img 
              src={marcLogo} 
              alt="MARC Logo" 
              className="w-8 h-8 object-contain rounded-full"
            />
            <span className="text-xl font-bold text-white">MARC</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              Transform your social media presence with automated excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;