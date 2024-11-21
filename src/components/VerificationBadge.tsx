import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ShieldCheck } from 'lucide-react';

interface VerificationBadgeProps {
  isVerified: boolean;
  type?: 'profile' | 'business';
  className?: string;
}

export default function VerificationBadge({ 
  isVerified, 
  type = 'profile',
  className = ''
}: VerificationBadgeProps) {
  if (!isVerified) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`inline-flex items-center ${className}`}
      title={`Verified ${type === 'business' ? 'Business' : 'Profile'}`}
    >
      {type === 'business' ? (
        <ShieldCheck className="h-5 w-5 text-blue-500" />
      ) : (
        <Shield className="h-5 w-5 text-green-500" />
      )}
    </motion.div>
  );
}