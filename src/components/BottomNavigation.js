import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

//   function loadpage(pageName) {
//     try {
//       document.querySelectorAll('.Container').forEach(item => {item.style.zIndex = -3});
//       document.getElementById(pageName).style.zIndex = 1;
//     }
//     catch {
//     }
//     console.log("Ran")
//   }


  return (
    <div className="BottomNavigation">
        <Box sx={{ width: 390 }}>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
        >
            <BottomNavigationAction label="My Balance" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Dimensions" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="AIdra" icon={<LocationOnIcon />} />
        </BottomNavigation>
        </Box>
    </div>
  );
}
