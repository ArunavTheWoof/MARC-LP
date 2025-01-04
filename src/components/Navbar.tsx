import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import marcLogo from '../assets/images/marc-logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img 
              src={marcLogo} 
              alt="MARC Logo" 
              className="w-8 h-8 object-contain rounded-full"
            />
            <span className="text-xl font-bold text-white">MARC</span>
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              onClick={scrollToFeatures}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#waitlist"
              onClick={scrollToWaitlist}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-gray-700"
          >
            <a 
              href="#features" 
              onClick={scrollToFeatures}
              className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a 
              href="#waitlist" 
              onClick={scrollToWaitlist}
              className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Join Waitlist
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;