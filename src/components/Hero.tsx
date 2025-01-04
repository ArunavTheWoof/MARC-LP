import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center max-w-4xl mx-auto z-10"
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-purple-500" />
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-medium">
            Introducing MARC
          </span>
        </div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Your Marketing Command Center
        </motion.h1>
        
        <motion.p 
          className="text-gray-400 text-xl mb-6 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Schedule posts, analyze performance, and manage your social media presence with automated excellence
        </motion.p>

        <motion.p
          className="text-xl mb-12 max-w-2xl mx-auto bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Join our waitlist below to be among the first to experience the future of marketing
        </motion.p>
      </motion.div>

      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </motion.div>
  );
};

export default Hero;