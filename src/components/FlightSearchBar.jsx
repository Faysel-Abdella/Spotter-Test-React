import {
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from '@mui/material';
import React, { useState } from 'react';

const FlightSearchBar = ({ tripType, setTripType }) => {
  console.log('tripType type:', typeof tripType);
  console.log('tripType value:', tripType);

  // console.log('setTripType:', setTripType); // Should be a function

  const [classType, setClassType] = useState('Economy');

  const handleClassChange = (event) => {
    setClassType(event.target.value);
  };
  return (
    <div className="flex items-center gap-2">
      <RadioGroup
        row
        value={tripType}
        onChange={(e) => {
          // console.log('Selected:', e.target.value); // Log the new value
          setTripType(e.target.value); // Update state
        }}
        sx={{
          '& .MuiFormControlLabel-label': {
            color: 'black',
          },
        }}
      >
        <FormControlLabel
          value="roundTrip"
          control={<Radio />}
          label="Round Trip"
          sx={{
            color: tripType === 'roundTrip' ? '#1255AE' : 'black', // Dynamic color
          }}
        />
        <FormControlLabel
          value="oneWay"
          control={<Radio />}
          label="One Way"
          sx={{
            color: tripType === 'oneWay' ? '#1255AE' : 'black', // Dynamic color
          }}
        />
      </RadioGroup>
      {/* Class Dropdown */}
      <FormControl fullWidth variant="standard" sx={{ maxWidth: 120 }}>
        <Select
          value={classType}
          onChange={handleClassChange}
          sx={{
            backgroundColor: 'transparent',
            fontSize: '1rem',
            fontWeight: '500',
            color: '#1255AE',
          }}
        >
          <MenuItem value="Economy">Economy</MenuItem>
          <MenuItem value="Business">Business</MenuItem>
          <MenuItem value="First">First Class</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FlightSearchBar;
