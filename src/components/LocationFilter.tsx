import React from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const distances = ['1km', '5km', '10km', '25km', '50km', 'Worldwide'];
const countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Japan', 'Global'];

export default function LocationFilter() {
  const [showDistances, setShowDistances] = React.useState(false);
  const [showCountries, setShowCountries] = React.useState(false);
  const [selectedDistance, setSelectedDistance] = React.useState('10km');
  const [selectedCountry, setSelectedCountry] = React.useState('Global');

  return (
    <div className="flex space-x-4">
      <div className="relative">
        <button
          onClick={() => setShowDistances(!showDistances)}
          className="flex items-center space-x-2 px-4 py-2 bg-purple-900/50 rounded-lg text-white hover:bg-purple-800/50 transition-colors"
        >
          <MapPin className="h-4 w-4" />
          <span>{selectedDistance}</span>
          <ChevronDown className="h-4 w-4" />
        </button>

        {showDistances && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full mt-2 w-48 bg-purple-900 rounded-lg shadow-lg py-2 z-50"
          >
            {distances.map((distance) => (
              <button
                key={distance}
                onClick={() => {
                  setSelectedDistance(distance);
                  setShowDistances(false);
                }}
                className="w-full px-4 py-2 text-left text-white hover:bg-purple-800 transition-colors"
              >
                {distance}
              </button>
            ))}
          </motion.div>
        )}
      </div>

      <div className="relative">
        <button
          onClick={() => setShowCountries(!showCountries)}
          className="flex items-center space-x-2 px-4 py-2 bg-purple-900/50 rounded-lg text-white hover:bg-purple-800/50 transition-colors"
        >
          <span>{selectedCountry}</span>
          <ChevronDown className="h-4 w-4" />
        </button>

        {showCountries && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full mt-2 w-48 bg-purple-900 rounded-lg shadow-lg py-2 z-50"
          >
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => {
                  setSelectedCountry(country);
                  setShowCountries(false);
                }}
                className="w-full px-4 py-2 text-left text-white hover:bg-purple-800 transition-colors"
              >
                {country}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}