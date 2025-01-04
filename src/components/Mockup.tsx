import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const mockups = [
  {
    title: "Smart Analytics Dashboard",
    description: "Get deep insights into your social media performance with real-time analytics. Understand what works and optimize your strategy with data-driven recommendations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    features: ["Real-time performance tracking", "Engagement analytics", "Audience insights"]
  },
  {
    title: "Intelligent Content Calendar",
    description: "Plan and schedule your content with our intuitive calendar interface. Get suggestions for the best posting times based on your audience's engagement patterns.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    features: ["Visual content planning", "Smart scheduling", "Cross-platform coordination"]
  },
  {
    title: "Lead Management",
    description: "Track and manage leads generated from your social media campaigns with our built-in CRM system.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    features: ["Lead tracking", "Campaign management", "Performance analytics"]
  }
];

const Mockup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mockups.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mockups.length) % mockups.length);
  };

  useEffect(() => {
    if (!isInView || isHovered) return;

    const timer = setInterval(nextSlide, 3000);
    
    return () => clearInterval(timer);
  }, [isInView, isHovered]);

  const currentMockup = mockups[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-4 bg-black relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative rounded-xl overflow-hidden"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black to-black/95">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="relative p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {currentMockup.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-300 mb-6 text-sm md:text-base"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {currentMockup.description}
                    </motion.p>
                    <motion.div 
                      className="flex flex-wrap justify-center lg:justify-start gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {currentMockup.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs md:text-sm border border-purple-500/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                  <motion.div 
                    className="relative mx-auto lg:mx-0 max-w-md w-full"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <img 
                      src={currentMockup.image}
                      alt={currentMockup.title}
                      className="rounded-lg shadow-2xl border border-gray-800 w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            {mockups.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-purple-500' : 'bg-gray-700'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mockup;