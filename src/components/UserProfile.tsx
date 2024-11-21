import React from 'react';
import { MapPin, Mail, Phone, Instagram, Twitter, Link, Edit, Share2, Star } from 'lucide-react';

export default function UserProfile() {
  return (
    <div className="bg-white shadow-sm rounded-xl max-w-3xl mx-auto mt-8">
      <div className="relative h-48 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-t-xl">
        <div className="absolute -bottom-16 left-8">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-indigo-600 p-2 rounded-full border-4 border-white">
              <Edit className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 space-x-2">
          <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm transition">
            <Share2 className="h-4 w-4 inline-block mr-2" />
            Share Profile
          </button>
        </div>
      </div>

      <div className="pt-20 px-8 pb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Sarah Anderson</h1>
            <p className="text-gray-600 flex items-center mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              San Francisco, CA
            </p>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
            Connect
          </button>
        </div>

        <div className="mt-6">
          <p className="text-gray-700">
            Digital nomad & coffee enthusiast. Always exploring new places and meeting new people. 
            Love trying local cafes and sharing hidden gems with the community.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Interests</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {['Coffee', 'Photography', 'Travel', 'Food', 'Art'].map((interest) => (
                <span
                  key={interest}
                  className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Contact</h3>
            <div className="mt-2 space-y-2">
              <a href="#" className="flex items-center text-gray-600 hover:text-indigo-600">
                <Mail className="h-4 w-4 mr-2" />
                sarah@example.com
              </a>
              <a href="#" className="flex items-center text-gray-600 hover:text-indigo-600">
                <Phone className="h-4 w-4 mr-2" />
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-gray-900 mb-3">Social Media</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <Link className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
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
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-100">
                <div>
                  <p className="text-gray-900 font-medium">{activity.action} {activity.place}</p>
                  <p className="text-gray-500 text-sm">{activity.time}</p>
                </div>
                <div className="flex items-center">
                  {Array.from({ length: activity.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}