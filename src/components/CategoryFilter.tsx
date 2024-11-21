import React from 'react';
import { Coffee, Utensils, ShoppingBag, Dumbbell, Scissors, Flower, Music, Film } from 'lucide-react';
import { useAppStore } from '../lib/store';
import { cn } from '../lib/utils';

const categories = [
  { name: 'Cafes', icon: Coffee },
  { name: 'Restaurants', icon: Utensils },
  { name: 'Shopping', icon: ShoppingBag },
  { name: 'Fitness', icon: Dumbbell },
  { name: 'Beauty', icon: Scissors },
  { name: 'Wellness', icon: Flower },
  { name: 'Entertainment', icon: Film },
  { name: 'Nightlife', icon: Music },
];

export default function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useAppStore();

  return (
    <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
      {categories.map((category) => {
        const Icon = category.icon;
        const isSelected = selectedCategory === category.name;
        
        return (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(isSelected ? null : category.name)}
            className={cn(
              "flex flex-col items-center min-w-[80px] p-3 rounded-xl transition-colors duration-200",
              isSelected 
                ? "bg-indigo-600 text-white" 
                : "bg-white hover:bg-indigo-50"
            )}
          >
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center mb-2",
              isSelected 
                ? "bg-white/20" 
                : "bg-indigo-100"
            )}>
              <Icon className={cn(
                "h-5 w-5",
                isSelected 
                  ? "text-white" 
                  : "text-indigo-600"
              )} />
            </div>
            <span className={cn(
              "text-sm whitespace-nowrap",
              isSelected 
                ? "text-white" 
                : "text-gray-700"
            )}>
              {category.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}