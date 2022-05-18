// import "./App.css";
import "./Output.css";
import React, { useState, useEffect, useContext, createContext } from "react";

// Sections
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BalanceIcon from "@mui/icons-material/Balance";
import CategoryIcon from "@mui/icons-material/Category";
import FaceIcon from "@mui/icons-material/Face";

import firebase from "firebase/compat/app";
import { useGetUserData } from "./hooks/useGetData";

import { appdata } from "./data/appdata";

const App = () => {
  const [appData, setAppData] = useState(appdata);
  const [userData, setUserData] = useState({});
  // const updatedValues = {};
  // setUserData((prevState) => {
  //   // Object.assign would also work
  //   return { ...prevState, ...updatedValues };
  // });

  // const [documents] = useGetUserData(user.uid);

  // Page state
  const [value, setValue] = React.useState(0);
  const headingDict = {
    0: "My Balance",
    1: "Journey",
    2: "Today",
  };

  return (
    <div className="Screen">
      <Header name={headingDict[value]} />
      <MainContainer value={value} appData={appData} />
      <div className="BottomNavigation">
        <Box>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label={headingDict[0]}
              icon={<BalanceIcon />}
            />
            <BottomNavigationAction
              label={headingDict[1]}
              icon={<CategoryIcon />}
            />
            <BottomNavigationAction
              label={headingDict[2]}
              icon={<FaceIcon />}
            />
          </BottomNavigation>
        </Box>
      </div>
    </div>
  );
};

export default App;
