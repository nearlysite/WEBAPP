import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { services, users } from '../lib/data';
import ServiceCard from '../components/ServiceCard';
import UserCard from '../components/UserCard';
import CategoryFilter from '../components/CategoryFilter';
import LocationFilter from '../components/LocationFilter';
import { useAppStore } from '../lib/store';
import toast from 'react-hot-toast';

export default function Discover() {
  const [viewMode, setViewMode] = useState<'services' | 'people'>('services');
  const { addNotification } = useAppStore();

  const handleLike = (name: string) => {
    toast.success(`You liked ${name}!`);
    addNotification({
      title: 'New Like',
      message: `You liked ${name}`,
      type: 'success'
    });
  };

  const handlePass = (name: string) => {
    toast.success(`You passed on ${name}`);
  };

  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Discover</h1>
          <p className="text-purple-200">Find people and places near you</p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => setViewMode('services')}
            className={`px-4 py-2 rounded-lg ${
              viewMode === 'services'
                ? 'bg-purple-600 text-white'
                : 'bg-purple-900/50 text-purple-200'
            }`}
          >
            Places
          </button>
          <button
            onClick={() => setViewMode('people')}
            className={`px-4 py-2 rounded-lg ${
              viewMode === 'people'
                ? 'bg-purple-600 text-white'
                : 'bg-purple-900/50 text-purple-200'
            }`}
          >
            People
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <CategoryFilter />
        <LocationFilter />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {viewMode === 'services' ? (
          services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))
        ) : (
          users.map((user) => (
            <UserCard
              key={user.id}
              {...user}
              onLike={() => handleLike(user.name)}
              onPass={() => handlePass(user.name)}
            />
          ))
        )}
      </div>
    </div>
  );
}