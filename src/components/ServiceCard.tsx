import React from 'react';
import { Star, MapPin, Clock, Bookmark, Share2, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAppStore } from '../lib/store';
import toast from 'react-hot-toast';
import { cn } from '../lib/utils';
import VerificationBadge from './VerificationBadge';

interface ServiceCardProps {
  id: string;
  image: string;
  title: string;
  category: string;
  rating: number;
  distance: string;
  status: 'Open' | 'Closed';
  description: string;
  isVerified?: boolean;
  subscriptionRequired?: boolean;
}

export default function ServiceCard({
  id,
  image,
  title,
  category,
  rating,
  distance,
  status,
  description,
  isVerified,
  subscriptionRequired
}: ServiceCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { bookmarks, toggleBookmark, addNotification } = useAppStore();
  const isBookmarked = bookmarks.includes(id);

  const handleBookmark = () => {
    if (subscriptionRequired) {
      toast.error('This feature requires a subscription');
      return;
    }
    toggleBookmark(id);
    addNotification({
      title: isBookmarked ? 'Removed from bookmarks' : 'Added to bookmarks',
      message: `${title} has been ${isBookmarked ? 'removed from' : 'added to'} your bookmarks`,
      type: 'info'
    });
    toast.success(isBookmarked ? 'Removed from bookmarks' : 'Added to bookmarks');
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title,
        text: description,
        url: window.location.href
      });
      addNotification({
        title: 'Shared successfully',
        message: `You shared ${title} with others`,
        type: 'success'
      });
    } catch (error) {
      if ((error as Error).name !== 'AbortError') {
        toast.error('Failed to share');
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-purple-900/50 backdrop-blur-sm rounded-xl shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 overflow-hidden group"
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookmark}
            className="p-2 bg-purple-950/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-purple-900/80 transition-colors"
          >
            <Bookmark
              className={cn(
                "h-5 w-5 transition-colors",
                isBookmarked ? "fill-purple-400 text-purple-400" : "text-white"
              )}
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="p-2 bg-purple-950/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-purple-900/80 transition-colors"
          >
            <Share2 className="h-5 w-5 text-white" />
          </motion.button>
        </div>
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <div className="bg-purple-950/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
            {status === 'Open' ? (
              <span className="text-green-400">Open Now</span>
            ) : (
              <span className="text-red-400">Closed</span>
            )}
          </div>
          {isVerified && (
            <VerificationBadge isVerified={true} type="business" />
          )}
          {subscriptionRequired && (
            <div className="bg-purple-950/80 backdrop-blur-sm p-1 rounded-full">
              <Lock className="h-4 w-4 text-yellow-400" />
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-purple-300">{category}</span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-white">{rating}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        
        <div className="flex items-center text-sm text-purple-300 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{distance}</span>
          <Clock className="h-4 w-4 ml-3 mr-1" />
          <span>Opens 9:00 AM</span>
        </div>
        
        <p className="text-purple-200 text-sm line-clamp-2">{description}</p>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "mt-4 w-full py-2 px-4 rounded-lg transition-all duration-200 shadow-lg",
            subscriptionRequired
              ? "bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 hover:shadow-yellow-500/50"
              : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 hover:shadow-purple-500/50"
          )}
          onClick={() => {
            if (subscriptionRequired) {
              toast.error('This feature requires a subscription');
              return;
            }
            addNotification({
              title: 'Booking Confirmed',
              message: `Your booking at ${title} has been confirmed`,
              type: 'success'
            });
            toast.success('Booking confirmed!');
          }}
        >
          <span className="text-white font-medium">
            {subscriptionRequired ? 'Unlock with Premium' : 'Book Now'}
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
}