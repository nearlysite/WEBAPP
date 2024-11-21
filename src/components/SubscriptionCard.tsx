import React from 'react';
import { Check, Crown } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface SubscriptionCardProps {
  type: 'free' | 'premium' | 'business';
  price: string;
  features: string[];
  isPopular?: boolean;
  onSubscribe: () => void;
}

export default function SubscriptionCard({
  type,
  price,
  features,
  isPopular,
  onSubscribe
}: SubscriptionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "relative bg-purple-900/50 backdrop-blur-sm rounded-xl p-6 shadow-lg",
        isPopular && "ring-2 ring-yellow-400 shadow-yellow-400/20"
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className={cn(
            "text-xl font-bold",
            type === 'free' ? 'text-white' : 'text-yellow-400'
          )}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </h3>
          <p className="text-purple-300 text-sm">Perfect for {type === 'business' ? 'businesses' : 'individuals'}</p>
        </div>
        {type !== 'free' && <Crown className="h-6 w-6 text-yellow-400" />}
      </div>

      <div className="mb-6">
        <span className="text-3xl font-bold text-white">{price}</span>
        {type !== 'free' && <span className="text-purple-300 ml-2">/month</span>}
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-purple-200">
            <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onSubscribe}
        className={cn(
          "w-full py-2 px-4 rounded-lg font-medium transition-all duration-200",
          type === 'free' 
            ? "bg-white text-purple-900 hover:bg-purple-50"
            : "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white hover:from-yellow-500 hover:to-yellow-700"
        )}
      >
        {type === 'free' ? 'Get Started' : 'Subscribe Now'}
      </motion.button>
    </motion.div>
  );
}