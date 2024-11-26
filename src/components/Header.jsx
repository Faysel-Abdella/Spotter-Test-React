import React from 'react';
import { IoAirplaneSharp } from 'react-icons/io5';
import { Button } from '@mui/material';
import FlightSearchBar from './FlightSearchBar';
import FlightForm from './FlightForm';

const Header = () => {
  return (
    <div className="h-[350px] bg-[#181A25] py-1 text-white">
      <nav className="mb-5 border-b-[1px] border-slate-600 py-5">
        <div className="mx-[7%] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-[#FCB300] px-2 py-2 text-2xl text-[#181A25]">
              <IoAirplaneSharp />
            </div>

            <p className="text-2xl font-extrabold leading-relaxed">
              Flight<span className="text-[#FCB300]">-</span>Flare
            </p>
          </div>
          <div>select language</div>
        </div>
      </nav>
      <h1 className="mx-[7%] my-12 text-4xl font-bold">
        Millions of cheap flights with just one search!
      </h1>

      <FlightForm />
    </div>
  );
};

export default Header;
