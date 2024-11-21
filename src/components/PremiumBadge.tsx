import React from 'react';
import { Crown } from 'lucide-react';
import { motion } from 'framer-motion';

interface PremiumBadgeProps {
  type: 'gold' | 'platinum' | 'diamond';
  className?: string;
}

export default function PremiumBadge({ type, className = '' }: PremiumBadgeProps) {
  const colors = {
    gold: 'from-yellow-400 to-yellow-600',
    platinum: 'from-purple-400 to-purple-600',
    diamond: 'from-blue-400 to-blue-600'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center px-2 py-1 rounded-full bg-gradient-to-r ${colors[type]} ${className}`}
    >
      <Crown className="h-4 w-4 text-white mr-1" />
      <span className="text-xs font-medium text-white capitalize">{type}</span>
    </motion.div>
  );
}