import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function SimpleBottomNavigation(props) {
  const [value, setValue] = React.useState(0);

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
