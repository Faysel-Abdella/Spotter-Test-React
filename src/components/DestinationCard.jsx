import React from 'react';

const DestinationCard = ({ name, image }) => (
  <div className="flex items-center justify-start gap-4 rounded-lg border border-gray-100 bg-white shadow-md">
    <img
      src={image}
      alt={name}
      className="h-[92px] w-[90px] rounded-l-md object-cover"
    />

    <h3 className="text-lg font-semibold">{name}</h3>
  </div>
);

export default DestinationCard;
