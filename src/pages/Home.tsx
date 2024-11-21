import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Connect with People & Places Nearby
        </h1>
        <p className="text-xl text-purple-200 mb-8">
          Discover local connections, experiences, and opportunities in your area. Join Nearly to explore what's around you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/discover">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium flex items-center"
            >
              Start Exploring
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </Link>
          <Link to="/subscription">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white/10 text-white rounded-full font-medium backdrop-blur-sm"
            >
              View Plans
            </motion.button>
          </Link>
        </div>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 bg-purple-900/30 backdrop-blur-sm rounded-xl"
        >
          <h3 className="text-xl font-semibold text-white mb-3">Connect Locally</h3>
          <p className="text-purple-200">Find and connect with people who share your interests in your local area.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 bg-purple-900/30 backdrop-blur-sm rounded-xl"
        >
          <h3 className="text-xl font-semibold text-white mb-3">Discover Places</h3>
          <p className="text-purple-200">Explore verified local businesses, events, and hidden gems near you.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 bg-purple-900/30 backdrop-blur-sm rounded-xl"
        >
          <h3 className="text-xl font-semibold text-white mb-3">Safe & Secure</h3>
          <p className="text-purple-200">Verified profiles and secure messaging to ensure your safety and privacy.</p>
        </motion.div>
      </div>
    </div>
  );
}