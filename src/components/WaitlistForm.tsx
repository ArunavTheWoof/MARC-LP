import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { handleWaitlistSubmission } from '../utils/waitlist';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setError('');
    setSuccessMessage('');

    try {
      await handleWaitlistSubmission(email);
      setSuccessMessage('Thanks for joining! We\'ll keep you updated.');
      setEmail('');
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes('already on the waitlist')) {
          setSuccessMessage(err.message);
        } else {
          setError(err.message || 'Failed to join waitlist. Please try again.');
        }
      } else {
        setError('Failed to join waitlist. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
          required
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting || !email}
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2 justify-center"
        >
          {isSubmitting ? 'Joining...' : 'Join Waitlist'}
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      {successMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-400 font-medium mt-4 text-center"
        >
          {successMessage}
        </motion.div>
      )}

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 mt-4 text-sm text-center"
        >
          {error}
        </motion.div>
      )}
    </div>
  );
};

export default WaitlistForm;