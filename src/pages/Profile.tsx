import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram, Twitter, Link, Edit, Share2, Star } from 'lucide-react';
import VerificationBadge from '../components/VerificationBadge';
import PremiumBadge from '../components/PremiumBadge';

const user = {
  name: 'Sarah Anderson',
  location: 'San Francisco, CA',
  bio: 'Digital nomad & coffee enthusiast. Always exploring new places and meeting new people. Love trying local cafes and sharing hidden gems with the community.',
  interests: ['Coffee', 'Photography', 'Travel', 'Food', 'Art'],
  contact: {
    email: 'sarah@example.com',
    phone: '(555) 123-4567'
  },
  social: {
    instagram: '@sarahanderson',
    twitter: '@sarahanderson',
    website: 'sarahanderson.com'
  },
  isVerified: true,
  subscriptionStatus: 'premium' as const,
  activity: [
    {
      action: 'Reviewed',
      place: 'Artisan Coffee House',
      time: '2 hours ago',
      rating: 5
    },
    {
      action: 'Visited',
      place: 'Golden Gate Park',
      time: '1 day ago',
      rating: 4
    },
    {
      action: 'Shared',
      place: 'Hidden Vintage Shop',
      time: '3 days ago',
      rating: 5
    }
  ]
};

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl overflow-hidden">
        <div className="relative h-48 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="absolute -bottom-16 left-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-purple-900 object-cover"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute bottom-0 right-0 bg-purple-600 p-2 rounded-full border-4 border-purple-900"
              >
                <Edit className="h-4 w-4 text-white" />
              </motion.button>
            </div>
          </div>
          <div className="absolute top-4 right-4 space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm transition"
            >
              <Share2 className="h-4 w-4 inline-block mr-2" />
              Share Profile
            </motion.button>
          </div>
        </div>

        <div className="pt-20 px-8 pb-8">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                {user.isVerified && <VerificationBadge isVerified={true} type="profile" />}
                <PremiumBadge type="gold" />
              </div>
              <p className="text-purple-200 flex items-center mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                {user.location}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-500 hover:to-pink-500 transition-colors"
            >
              Edit Profile
            </motion.button>
          </div>

          <div className="mt-6">
            <p className="text-purple-200">{user.bio}</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-purple-900/30 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {user.interests.map((interest) => (
                  <span
                    key={interest}
                    className="bg-purple-800/50 px-3 py-1 rounded-full text-sm text-purple-200"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-purple-900/30 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Contact</h3>
              <div className="space-y-2">
                <a href={`mailto:${user.contact.email}`} className="flex items-center text-purple-200 hover:text-purple-100">
                  <Mail className="h-4 w-4 mr-2" />
                  {user.contact.email}
                </a>
                <a href={`tel:${user.contact.phone}`} className="flex items-center text-purple-200 hover:text-purple-100">
                  <Phone className="h-4 w-4 mr-2" />
                  {user.contact.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-white mb-3">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-200 hover:text-purple-100">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-purple-200 hover:text-purple-100">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-purple-200 hover:text-purple-100">
                <Link className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-white mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {user.activity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between bg-purple-900/30 backdrop-blur-sm p-4 rounded-lg"
                >
                  <div>
                    <p className="text-white font-medium">{activity.action} {activity.place}</p>
                    <p className="text-purple-300 text-sm">{activity.time}</p>
                  </div>
                  <div className="flex items-center">
                    {Array.from({ length: activity.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}