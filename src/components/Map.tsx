import React from 'react';
import { MapPin } from 'lucide-react';

interface MapProps {
  markers?: Array<{
    lat: number;
    lng: number;
    title: string;
  }>;
}

export default function Map({ markers = [] }: MapProps) {
  return (
    <div className="relative h-[400px] bg-purple-900/50 backdrop-blur-sm rounded-xl overflow-hidden group">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-purple-300 animate-pulse" />
          <p className="mt-4 text-purple-200">Interactive map view is currently in maintenance.</p>
          <p className="text-purple-300 text-sm mt-2">Try the grid view for now!</p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse delay-700" />
      </div>
    </div>
  );
}