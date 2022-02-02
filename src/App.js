import './App.css';
import React, {useState} from 'react';

// Sections
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import SimpleBottomNavigation from './components/SimpleBottomNavigation';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BalanceIcon from '@mui/icons-material/Balance';
import CategoryIcon from '@mui/icons-material/Category';
import FaceIcon from '@mui/icons-material/Face';

function App() {
  const [value, setValue] = React.useState(0);
  const headingDict = {
    0: "My Balance",
    1: "Dimensions",
    2: "AIdra",
  };
  
  return (
    <div className="Screen">
    <Header name={headingDict[value]} />
    <MainContainer value={value} />

    <div className="BottomNavigation">
        <Box sx={{ width: 390 }}>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
        >
            <BottomNavigationAction label="My Balance" icon={<BalanceIcon/>} />
            <BottomNavigationAction label="Dimensions" icon={<CategoryIcon />} />
            <BottomNavigationAction label="AIdra" icon={<FaceIcon />} />
        </BottomNavigation>
        </Box>
    </div>
    </div>
  );
}


export default App;
