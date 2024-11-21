export interface Service {
  id: string;
  image: string;
  title: string;
  category: string;
  rating: number;
  distance: string;
  status: 'Open' | 'Closed';
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  hours: {
    open: string;
    close: string;
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  isVerified?: boolean;
  subscriptionRequired?: boolean;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
  read: boolean;
}

export interface User {
  id: string;
  name: string;
  age?: number;
  bio: string;
  distance: string;
  image: string;
  interests: string[];
  isVerified: boolean;
  subscriptionStatus: 'free' | 'premium' | 'business';
  contact?: {
    phone: string;
    email: string;
  };
  social?: {
    instagram?: string;
    twitter?: string;
    website?: string;
  };
}