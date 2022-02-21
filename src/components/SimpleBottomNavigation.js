import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BalanceIcon from "@mui/icons-material/Balance";
import CategoryIcon from "@mui/icons-material/Category";
import FaceIcon from "@mui/icons-material/Face";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="BottomNavigation">
      <Box sx={{ width: 380 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label={value} icon={<BalanceIcon />} />
          <BottomNavigationAction label="Dimensions" icon={<CategoryIcon />} />
          <BottomNavigationAction label="AIdra" icon={<FaceIcon />} />
        </BottomNavigation>
      </Box>
    </div>
  );
}
