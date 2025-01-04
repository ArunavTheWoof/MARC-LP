import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, color, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group p-6 rounded-2xl bg-gradient-to-br ${color} 
        transition-all duration-500 ease-out min-h-[240px] 
        hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20
        border border-purple-900/20 hover:border-purple-700/30
        from-gray-900 via-gray-900 to-gray-900
        backdrop-blur-xl backdrop-filter
        relative overflow-hidden`}
    >
      <div className="relative z-10">
        <div className={`mb-4 text-white transition-transform duration-500 group-hover:translate-x-0.5`}>{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-white/90 transition-transform duration-500 group-hover:translate-x-0.5">{title}</h3>
        <p className="text-gray-300/80">{description}</p>
      </div>
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 
        transition-opacity duration-500 bg-gradient-to-br ${color}`} />
    </motion.div>
  );
};

export default FeatureCard;