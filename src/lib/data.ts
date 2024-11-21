export const services = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'Cafe Artemis',
    category: 'Cafes',
    rating: 4.8,
    distance: '0.3 miles away',
    status: 'Open' as const,
    description: 'Artisanal coffee shop with freshly baked pastries and a cozy atmosphere perfect for work or casual meetups.',
    location: { lat: 37.7858, lng: -122.4065 },
    hours: {
      open: '7:00 AM',
      close: '8:00 PM'
    },
    contact: {
      phone: '(415) 555-0123',
      email: 'hello@cafeartemis.com',
      website: 'https://cafeartemis.com'
    },
    isVerified: true,
    subscriptionRequired: false
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'Fitness First',
    category: 'Fitness',
    rating: 4.6,
    distance: '0.5 miles away',
    status: 'Open' as const,
    description: 'Modern gym facility with state-of-the-art equipment and professional trainers available.',
    location: { lat: 37.7694, lng: -122.4862 },
    hours: {
      open: '6:00 AM',
      close: '10:00 PM'
    },
    contact: {
      phone: '(415) 555-0124',
      email: 'info@fitnessfirst.com',
      website: 'https://fitnessfirst.com'
    },
    isVerified: true,
    subscriptionRequired: true
  }
];

export const subscriptionPlans = [
  {
    type: 'free',
    price: '$0',
    features: [
      'Basic profile creation',
      'Browse nearby users',
      'Limited swipes per day',
      'Basic search filters'
    ]
  },
  {
    type: 'premium',
    price: '$9.99',
    features: [
      'Verified badge',
      'Unlimited swipes',
      'Advanced filters',
      'See who likes you',
      'Message anyone',
      'Boost your profile'
    ],
    isPopular: true
  },
  {
    type: 'business',
    price: '$29.99',
    features: [
      'All Premium features',
      'Business verification',
      'Analytics dashboard',
      'Priority support',
      'Promoted listings',
      'Custom branding'
    ]
  }
];

export const users = [
  {
    id: '1',
    name: 'Sarah Anderson',
    age: 28,
    bio: 'Coffee enthusiast & digital nomad. Always exploring new places! 📸 ✈️',
    distance: '2.5 km away',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    interests: ['Travel', 'Photography', 'Coffee'],
    isVerified: true,
    subscriptionStatus: 'premium' as const
  },
  {
    id: '2',
    name: 'Michael Chen',
    age: 31,
    bio: 'Local food guide & restaurant owner. Let me show you the best spots in town! 🍜',
    distance: '3.8 km away',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    interests: ['Food', 'Cooking', 'Music'],
    isVerified: true,
    subscriptionStatus: 'business' as const
  }
];