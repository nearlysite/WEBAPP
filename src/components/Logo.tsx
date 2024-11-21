import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart } from 'lucide-react';

export default function Logo() {
  return (
    <motion.div 
      className="flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        <div className="relative">
          <MapPin className="h-8 w-8 text-purple-400" />
          <Heart className="h-4 w-4 text-pink-500 absolute -bottom-1 -right-1" />
        </div>
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-30 filter blur-sm animate-pulse" />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
        NEARLY
      </span>
    </motion.div>
  );
}