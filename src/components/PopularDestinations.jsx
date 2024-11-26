import React from 'react';
import DestinationCard from './DestinationCard';

// Import a single image
import destinationImage from '../assets/image.jpg';

const destinations = [
  { name: 'Berlin Brandenburg', image: destinationImage },
  { name: 'Amsterdam', image: destinationImage },
  { name: 'Lisbon', image: destinationImage },
  { name: 'Barcelona', image: destinationImage },
  { name: 'London', image: destinationImage },
  { name: 'Madrid', image: destinationImage },
  { name: 'Paris', image: destinationImage },
  { name: 'Bangkok', image: destinationImage },
  { name: 'Rome', image: destinationImage },
];

const PopularDestinations = () => {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">Popular Destinations</h2>

      <div className="grid grid-cols-3 gap-x-8 gap-y-8">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
