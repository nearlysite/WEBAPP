import React from 'react';
import { Heart, X, MessageCircle, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAppStore } from '../lib/store';
import VerificationBadge from './VerificationBadge';
import PremiumBadge from './PremiumBadge';
import toast from 'react-hot-toast';

interface UserCardProps {
  id: string;
  name: string;
  age?: number;
  bio: string;
  distance: string;
  image: string;
  interests: string[];
  isVerified: boolean;
  subscriptionStatus: 'free' | 'premium' | 'business';
  onLike?: () => void;
  onPass?: () => void;
}

export default function UserCard({
  id,
  name,
  age,
  bio,
  distance,
  image,
  interests,
  isVerified,
  subscriptionStatus,
  onLike,
  onPass
}: UserCardProps) {
  const { setShowChat } = useAppStore();

  const handleMessage = () => {
    if (subscriptionStatus === 'free') {
      toast.error('Messaging requires a premium subscription');
      return;
    }
    setShowChat(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-purple-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative h-96">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            {age && <span className="text-xl text-white">• {age}</span>}
            {isVerified && <VerificationBadge isVerified={true} type="profile" />}
            {subscriptionStatus !== 'free' && (
              <PremiumBadge type={subscriptionStatus === 'business' ? 'diamond' : 'gold'} />
            )}
          </div>

          <div className="flex items-center text-white/80 mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{distance}</span>
          </div>

          <p className="text-white/90 mb-3">{bio}</p>

          <div className="flex flex-wrap gap-2">
            {interests.map((interest, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 flex justify-between items-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onPass}
          className="p-3 bg-red-500/20 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleMessage}
          className="p-3 bg-blue-500/20 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
        >
          <MessageCircle className="h-6 w-6" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onLike}
          className="p-3 bg-green-500/20 rounded-full text-green-500 hover:bg-green-500 hover:text-white transition-colors"
        >
          <Heart className="h-6 w-6" />
        </motion.button>
      </div>
    </motion.div>
  );
}