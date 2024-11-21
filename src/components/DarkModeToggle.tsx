import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAppStore } from '../lib/store';

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useAppStore();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-purple-900 hover:bg-purple-800 transition-colors"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-purple-300" />
      )}
    </motion.button>
  );
}