import React from 'react';
import { Bot } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Bot className="w-8 h-8 text-purple-500" />
      <span className="text-xl font-bold text-white">MARC</span>
    </div>
  );
};

export default Logo;