import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  icon?: boolean;
}

const Button = ({ 
  children, 
  loading, 
  disabled, 
  onClick, 
  type = 'button',
  variant = 'primary',
  icon = true 
}: ButtonProps) => {
  const baseStyles = "px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 justify-center";
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90",
    secondary: "bg-gray-800 text-white hover:bg-gray-700"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${(disabled || loading) ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {loading ? 'Loading...' : children}
      {icon && !loading && <ArrowRight className="w-4 h-4" />}
    </motion.button>
  );
};

export default Button;