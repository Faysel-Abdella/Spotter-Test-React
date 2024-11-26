import React from 'react';
import imageSrc from '../assets/imageWorld.png';

const WorldMap = () => {
  return (
    <div className="flex items-center justify-center bg-white">
      <img
        src={imageSrc}
        alt="world map"
        className="h-auto max-h-[60%] w-[60%]"
      />
    </div>
  );
};

export default WorldMap;
