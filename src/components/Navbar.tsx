import React from 'react';
import { MessageCircle, Bell, User, Search } from 'lucide-react';
import { useAppStore } from '../lib/store';
import { motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';
import Logo from './Logo';

export default function Navbar() {
  const { 
    setShowProfile, 
    setSearchQuery, 
    setShowNotifications, 
    setShowChat,
    isDarkMode 
  } = useAppStore();

  return (
    <nav className={`fixed top-0 w-full ${isDarkMode ? 'bg-purple-950/80' : 'bg-white'} backdrop-blur-sm shadow-lg z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className={`h-5 w-5 ${isDarkMode ? 'text-purple-400' : 'text-gray-400'}`} />
              </div>
              <input
                type="text"
                className={`block w-full pl-10 pr-3 py-2 border rounded-full 
                  ${isDarkMode 
                    ? 'bg-purple-900/50 border-purple-700 text-white placeholder-purple-400 focus:ring-purple-500' 
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-purple-500'
                  } focus:outline-none focus:ring-2 focus:border-transparent`}
                placeholder="Search nearby places and services..."
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowChat(true)}
              className={`p-2 rounded-full ${isDarkMode ? 'text-purple-300 hover:bg-purple-800' : 'text-purple-600 hover:bg-purple-100'}`}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowNotifications(true)}
              className={`p-2 rounded-full ${isDarkMode ? 'text-purple-300 hover:bg-purple-800' : 'text-purple-600 hover:bg-purple-100'}`}
            >
              <Bell className="h-6 w-6" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowProfile(true)}
              className={`p-2 rounded-full ${isDarkMode ? 'text-purple-300 hover:bg-purple-800' : 'text-purple-600 hover:bg-purple-100'}`}
            >
              <User className="h-6 w-6" />
            </motion.button>

            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}