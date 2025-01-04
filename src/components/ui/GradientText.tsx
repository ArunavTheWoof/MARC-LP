import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

const GradientText = ({ 
  children, 
  className = '', 
  from = 'white', 
  to = 'gray-300' 
}: GradientTextProps) => {
  return (
    <span className={`bg-gradient-to-r from-${from} to-${to} text-transparent bg-clip-text ${className}`}>
      {children}
    </span>
  );
};