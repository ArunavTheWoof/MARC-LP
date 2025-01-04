import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { handleWaitlistSubmission } from '../utils/waitlist';

const WaitlistCTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setError('');

    try {
      await handleWaitlistSubmission(email);
      setSubmitted(true);
      setEmail('');
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes('already on the waitlist')) {
          setSubmitted(true); // Still show success state for existing subscribers
        } else {
          setError(err.message || 'Failed to join waitlist. Please try again.');
          setSubmitted(false);
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
          Ready to Transform Your Social Media?
        </h2>
        <p className="text-gray-400 text-xl mb-12">
          Join the waitlist today and be among the first to experience the future of social media management.
        </p>

        {!submitted ? (
          <motion.form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2 justify-center"
            >
              {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-green-400 font-medium"
          >
            Thanks for joining! We'll keep you updated.
          </motion.div>
        )}
      </motion.div>

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default WaitlistCTA;