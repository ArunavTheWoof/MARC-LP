import { Bot, Calendar, BarChart2, Zap, Clock, Users } from 'lucide-react';
import { Feature, MockupSlide, Stat } from '../types';

export const FEATURES: Feature[] = [
  {
    icon: Bot,
    title: "AI Content Generation",
    description: "Generate engaging social media content that matches your brand voice with advanced AI algorithms.",
    color: "from-purple-500 to-pink-500"
  },
  // ... other features
];

export const MOCKUP_SLIDES: MockupSlide[] = [
  {
    title: "AI Content Generation",
    description: "Create engaging content that resonates with your audience using our advanced AI algorithms.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    features: ["Multi-platform content generation", "Brand voice customization", "Trending topic suggestions"]
  },
  // ... other slides
];

export const STATS: Stat[] = [
  { number: "300%", label: "Increase in Engagement" },
  { number: "8hrs", label: "Saved per Week" },
  { number: "24/7", label: "AI Assistance" },
  { number: "100+", label: "Integration Options" }
];