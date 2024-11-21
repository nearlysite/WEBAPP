import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-purple-400">404</h1>
          <p className="text-2xl text-white mt-4">Page Not Found</p>
          <p className="text-purple-200 mt-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-purple-600 text-white rounded-xl flex items-center"
            >
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </motion.button>
          </Link>
          <Link to="/help">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-purple-900/50 text-white rounded-xl flex items-center"
            >
              <Search className="mr-2 h-5 w-5" />
              Search Help
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}