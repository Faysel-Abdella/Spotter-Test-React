import React, { useState } from 'react';
import { Box } from '@mui/material'; // Ensure Box is imported
import FlightSearchBar from './FlightSearchBar';
import RoundTripComponent from './RoundTripComponent';
import OneWayComponent from './OneWayComponent';

const FlightForm = () => {
  const [tripType, setTripType] = useState('roundTrip');
  console.log('Current tripType:', tripType); // Log updated value in parent

  return (
    <div className="mx-auto max-w-[1300px] rounded-md bg-white px-12 pb-8 pt-4 shadow-xl">
      <FlightSearchBar tripType={tripType} setTripType={setTripType} />
      {tripType === 'roundTrip' && <RoundTripComponent />}
      {tripType === 'oneWay' && <OneWayComponent />}
    </div>
  );
};

export default FlightForm;
