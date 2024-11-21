import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bell, 
  Lock, 
  User, 
  Globe, 
  CreditCard, 
  Smartphone,
  Moon,
  Volume2
} from 'lucide-react';
import { useAppStore } from '../lib/store';

export default function Settings() {
  const { isDarkMode, toggleDarkMode } = useAppStore();

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Settings</h1>

        <div className="space-y-6">
          {/* Account Settings */}
          <section className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <User className="h-5 w-5 mr-2" />
              Account Settings
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Profile Visibility</h3>
                  <p className="text-purple-200 text-sm">Control who can see your profile</p>
                </div>
                <select className="bg-purple-800 text-white rounded-lg px-4 py-2">
                  <option>Everyone</option>
                  <option>Friends Only</option>
                  <option>Private</option>
                </select>
              </div>
            </div>
          </section>

          {/* Privacy Settings */}
          <section className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Lock className="h-5 w-5 mr-2" />
              Privacy
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Location Sharing</h3>
                  <p className="text-purple-200 text-sm">Show your location to others</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-purple-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                </label>
              </div>
            </div>
          </section>

          {/* Notification Settings */}
          <section className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              Notifications
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Push Notifications</h3>
                  <p className="text-purple-200 text-sm">Receive alerts on your device</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-purple-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                </label>
              </div>
            </div>
          </section>

          {/* Appearance Settings */}
          <section className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Moon className="h-5 w-5 mr-2" />
              Appearance
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Dark Mode</h3>
                  <p className="text-purple-200 text-sm">Toggle dark theme</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                  />
                  <div className="w-11 h-6 bg-purple-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                </label>
              </div>
            </div>
          </section>

          {/* Payment Settings */}
          <section className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Payment Methods
            </h2>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors">
              Add Payment Method
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}