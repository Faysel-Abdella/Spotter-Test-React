import { LocationOn } from '@mui/icons-material';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import React, { useState } from 'react'; // Import useState
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import styles
import VisitorCount from './VisitorCount';

const OneWayComponent = () => {
  const [startDate, setStartDate] = useState(null); // Declare state for start date

  return (
    <div>
      <div className="my-3 flex items-center gap-2">
        <div className="flex flex-1 items-center rounded-[7px] border border-gray-500 px-4">
          <LocationOn color="action" />
          <input
            type="text"
            placeholder="From?"
            className="h-16 p-2 text-lg text-black focus:outline-none"
          />
        </div>
        <div className="flex flex-1 items-center rounded-[7px] border border-gray-500 px-4">
          <LocationOn color="action" />
          <input
            type="text"
            placeholder="To?"
            className="h-16 p-2 text-lg text-black focus:outline-none"
          />
        </div>

        {/* Single Date Picker for One-Way Date */}
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Select Date"
          dateFormat="yyyy/MM/dd"
          className="h-16 w-[120px] rounded-[7px] border border-gray-500 p-2 text-lg text-black focus:outline-none" // Set a static width
        />

        {/* Visitor Count Component */}
        <div>
          <VisitorCount />
        </div>

        {/* Search Flights Button */}
        <button className="flex h-[68px] w-[220px] items-center justify-center whitespace-nowrap rounded-[7px] bg-[#FCB300] px-8 py-4 text-xl font-bold text-black hover:bg-[#FFA500]">
          Search Flights
        </button>
      </div>

      {/* Direct Flights Checkbox */}
      <div className="flex items-center">
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography variant="body2" sx={{ color: 'gray' }}>
              <p className="text-base text-gray-600">Direct Flights</p>
            </Typography>
          }
        />
      </div>
    </div>
  );
};

export default OneWayComponent;
