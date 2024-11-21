import React, { useState } from 'react';
import { useSprings, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { Heart, X, MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    id: 1,
    name: 'Sarah Anderson',
    age: 28,
    distance: 2.5,
    bio: 'Coffee enthusiast & digital nomad',
    interests: ['Travel', 'Photography', 'Coffee'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    rating: 4.8
  },
  {
    id: 2,
    name: 'The Coffee House',
    type: 'Café',
    distance: 1.2,
    description: 'Artisanal coffee & fresh pastries',
    tags: ['Coffee', 'Breakfast', 'Wifi'],
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    rating: 4.9
  },
  {
    id: 3,
    name: 'Michael Chen',
    age: 31,
    distance: 3.8,
    bio: 'Local food guide & restaurant owner',
    interests: ['Food', 'Cooking', 'Music'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    rating: 4.7
  }
];

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

export default function SwipeDiscovery() {
  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2;
    const dir = xDir < 0 ? -1 : 1;
    if (!down && trigger) gone.add(index);
    api.start(i => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
      const scale = down ? 1.1 : 1;
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      };
    });
  });

  return (
    <div className="relative h-[600px] w-full">
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div
          key={i}
          style={{
            transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
            position: 'absolute',
            width: '100%',
            height: '100%',
            willChange: 'transform',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <animated.div
            {...bind(i)}
            style={{
              transform: rot.to(rot => `rotate(${rot}deg)`),
              backgroundImage: `url(${cards[i].image})`,
              backgroundColor: 'white',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '300px',
              maxWidth: '300px',
              height: '400px',
              borderRadius: '10px',
              position: 'relative',
            }}
            className="cursor-grab active:cursor-grabbing shadow-2xl"
          >
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 rounded-b-lg">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-white">{cards[i].name}</h2>
                {'age' in cards[i] && (
                  <span className="text-xl text-white">{cards[i].age}</span>
                )}
              </div>
              
              <div className="flex items-center text-white/80 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{cards[i].distance} km away</span>
                <Star className="h-4 w-4 ml-3 mr-1 text-yellow-400" />
                <span>{cards[i].rating}</span>
              </div>

              {'bio' in cards[i] ? (
                <>
                  <p className="text-white/90 mb-2">{cards[i].bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {cards[i].interests.map((interest, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <p className="text-white/90 mb-2">{cards[i].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cards[i].tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </animated.div>
        </animated.div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 pb-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-4 bg-red-500 rounded-full shadow-lg"
        >
          <X className="h-8 w-8 text-white" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-4 bg-green-500 rounded-full shadow-lg"
        >
          <Heart className="h-8 w-8 text-white" />
        </motion.button>
      </div>
    </div>
  );
}