import { LocationOn } from '@mui/icons-material';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import React, { useState } from 'react'; // Import useState
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import styles
import VisitorCount from './VisitorCount';

const RoundTripComponent = () => {
  const [startDate, setStartDate] = useState(null); // Declare state for start date
  const [endDate, setEndDate] = useState(null); // Declare state for end date

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

        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Start Date"
          dateFormat="yyyy/MM/dd"
          className="h-16 w-[120px] rounded-[7px] border border-gray-500 p-2 text-lg text-black focus:outline-none" // Set a static width
        />

        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="End Date"
          dateFormat="yyyy/MM/dd"
          className="h-16 w-[120px] rounded-[7px] border border-gray-500 p-2 text-lg text-black focus:outline-none" // Set a static width
        />
        <div>
          <VisitorCount />
        </div>

        <button className="flex h-[68px] flex-1 items-center justify-center whitespace-nowrap rounded-[7px] bg-[#FCB300] px-8 py-4 text-xl font-bold text-black hover:bg-[#FFA500]">
          Search Flights
        </button>
      </div>
      {/* Direct Flights Checkbox */}
      <div className="flex items-center">
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography variant="body2" sx={{ color: 'gray' }}>
              <p className="text-base text-gray-600"> Direct Flights</p>
            </Typography>
          }
        />
      </div>
    </div>
  );
};

export default RoundTripComponent;
