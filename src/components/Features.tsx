import { motion } from 'framer-motion';
import { Bot, Calendar, BarChart2, Zap, Clock, Users } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Agents",
      description: "Empower Marketing with Specialized AI for SEO, Copywriting, Designing and More.",
      color: "from-purple-700/40 to-indigo-900/40"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Scheduling",
      description: "Schedule your posts at optimal times for maximum engagement with data-driven insights.",
      color: "from-violet-700/40 to-purple-900/40"
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Deep insights into your social media performance with actionable recommendations.",
      color: "from-indigo-700/40 to-violet-900/40"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Workflows",
      description: "Create custom automation workflows to streamline your social media management.",
      color: "from-purple-800/40 to-indigo-800/40"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Content Calendar",
      description: "Visual calendar interface for planning and organizing your content strategy.",
      color: "from-violet-800/40 to-purple-800/40"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Lead Management",
      description: "Built-in CRM to track and manage leads generated from your social media campaigns.",
      color: "from-indigo-800/40 to-violet-800/40"
    }
  ];

  return (
    <section id="features" className="py-24 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Powerful Features
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Everything you need to optimize your social media presence
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Features;