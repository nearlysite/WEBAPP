import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import { useAppStore } from './lib/store';

// Pages
import Home from './pages/Home';
import Discover from './pages/Discover';
import Subscription from './pages/Subscription';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Help from './pages/Help';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

export default function App() {
  const { isDarkMode } = useAppStore();
  
  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'bg-purple-950' : 'bg-gray-50'}`}>
        <Navbar />
        <Toaster position="bottom-right" toastOptions={{ 
          style: isDarkMode ? { background: '#1a103d', color: '#fff' } : undefined 
        }} />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="mt-20 py-8 bg-purple-900/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">About Nearly</h3>
                <ul className="space-y-2 text-purple-200">
                  <li><a href="/about" className="hover:text-white">About Us</a></li>
                  <li><a href="/careers" className="hover:text-white">Careers</a></li>
                  <li><a href="/press" className="hover:text-white">Press</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
                <ul className="space-y-2 text-purple-200">
                  <li><a href="/help" className="hover:text-white">Help Center</a></li>
                  <li><a href="/safety" className="hover:text-white">Safety Center</a></li>
                  <li><a href="/community" className="hover:text-white">Community Guidelines</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                <ul className="space-y-2 text-purple-200">
                  <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
                  <li><a href="/cookies" className="hover:text-white">Cookie Policy</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                <ul className="space-y-2 text-purple-200">
                  <li><a href="/blog" className="hover:text-white">Blog</a></li>
                  <li><a href="/social" className="hover:text-white">Social Media</a></li>
                  <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-purple-800 text-center text-purple-200">
              <p>© {new Date().getFullYear()} Nearly. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}