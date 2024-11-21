import React from 'react';
import { Search, Book, MessageCircle, Shield } from 'lucide-react';

export default function Help() {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Help Center</h1>
        <p className="text-purple-200 max-w-2xl mx-auto">
          Find answers to common questions and learn how to make the most of Nearly.
        </p>
        
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search help articles..."
              className="w-full pl-12 pr-4 py-3 bg-purple-900/50 border border-purple-700 rounded-xl text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="p-6 bg-purple-900/30 backdrop-blur-sm rounded-xl">
          <Book className="h-8 w-8 text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold text-white mb-3">Getting Started</h2>
          <ul className="space-y-2 text-purple-200">
            <li><a href="#" className="hover:text-white">Creating an account</a></li>
            <li><a href="#" className="hover:text-white">Profile verification</a></li>
            <li><a href="#" className="hover:text-white">Basic features guide</a></li>
          </ul>
        </div>

        <div className="p-6 bg-purple-900/30 backdrop-blur-sm rounded-xl">
          <MessageCircle className="h-8 w-8 text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold text-white mb-3">Communication</h2>
          <ul className="space-y-2 text-purple-200">
            <li><a href="#" className="hover:text-white">Messaging basics</a></li>
            <li><a href="#" className="hover:text-white">Connection requests</a></li>
            <li><a href="#" className="hover:text-white">Blocking users</a></li>
          </ul>
        </div>

        <div className="p-6 bg-purple-900/30 backdrop-blur-sm rounded-xl">
          <Shield className="h-8 w-8 text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold text-white mb-3">Safety & Privacy</h2>
          <ul className="space-y-2 text-purple-200">
            <li><a href="#" className="hover:text-white">Privacy settings</a></li>
            <li><a href="#" className="hover:text-white">Reporting issues</a></li>
            <li><a href="#" className="hover:text-white">Safety guidelines</a></li>
          </ul>
        </div>
      </div>

      <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">Still need help?</h2>
        <p className="text-purple-200 mb-6">Our support team is available 24/7 to assist you with any questions.</p>
        <button className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-500 transition-colors">
          Contact Support
        </button>
      </div>
    </div>
  );
}