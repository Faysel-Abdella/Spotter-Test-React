import React, { useState } from 'react';
import { Button, Menu, MenuItem, Typography, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const VisitorCount = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [adultCount, setAdultCount] = useState(1);
  const [infantCount, setInfantCount] = useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const increaseCount = (type) => {
    if (type === 'adult') {
      setAdultCount(adultCount + 1);
    } else if (type === 'infant') {
      setInfantCount(infantCount + 1);
    }
  };

  const decreaseCount = (type) => {
    if (type === 'adult' && adultCount > 0) {
      setAdultCount(adultCount - 1);
    } else if (type === 'infant' && infantCount > 0) {
      setInfantCount(infantCount - 1);
    }
  };

  return (
    <div>
      {/* Button with improved layout */}
      <Button
        aria-controls="visitor-count-menu"
        onClick={handleClick}
        variant="outlined"
        sx={{
          color: 'black', // Text color to black
          borderColor: 'gray', // Keep border gray (border-gray-500)
          '&:hover': {
            borderColor: 'gray', // Ensure the border stays gray on hover
            backgroundColor: 'rgba(0, 0, 0, 0.08)', // Slight background color on hover
          },
        }}
        color="black"
        size="large"
        className="h-16 w-[120px] rounded-[7px] border border-gray-500 p-2 text-lg focus:outline-none"
      >
        <div className="flex flex-col items-start gap-[1px]">
          <span className="text-xl font-bold text-black">
            {adultCount + infantCount}
          </span>
          <span className="text-sm text-gray-400">Traveler</span>
        </div>
      </Button>

      {/* Dropdown Menu */}
      <Menu
        id="visitor-count-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '300px', // Custom width for the dropdown
            maxWidth: '100%',
          },
        }}
      >
        {/* Adult Count Section */}
        <MenuItem>
          <div className="flex w-full items-center justify-between">
            <Typography variant="body1" className="flex-grow">
              Adult
            </Typography>
            <IconButton
              onClick={() => decreaseCount('adult')}
              disabled={adultCount === 0}
            >
              <Remove />
            </IconButton>
            <Typography variant="body1" className="mx-4">
              {adultCount}
            </Typography>
            <IconButton onClick={() => increaseCount('adult')}>
              <Add />
            </IconButton>
          </div>
        </MenuItem>

        {/* Infant Count Section */}
        <MenuItem>
          <div className="flex w-full items-center justify-between">
            <Typography variant="body1" className="flex-grow">
              Infant (under 2)
            </Typography>
            <IconButton
              onClick={() => decreaseCount('infant')}
              disabled={infantCount === 0}
            >
              <Remove />
            </IconButton>
            <Typography variant="body1" className="mx-4">
              {infantCount}
            </Typography>
            <IconButton onClick={() => increaseCount('infant')}>
              <Add />
            </IconButton>
          </div>
        </MenuItem>

        {/* Done Button */}
        <MenuItem>
          <Button
            onClick={handleClose}
            fullWidth
            variant="outlined"
            color="primary"
            className="bg-white"
          >
            Done
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default VisitorCount;
