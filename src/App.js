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
import LandscapeIcon from "@mui/icons-material/Landscape";
import InterestsIcon from "@mui/icons-material/Interests";
import TodayIcon from "@mui/icons-material/Today";
import Onboarding from "./components/Onboarding";

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
  const [onboarding, setOnboarding] = React.useState(
    localStorage.getItem("onboarding") == "complete" ? false : true
  );

  const headingDict = {
    0: "Goals",
    1: "Today",
    2: "Learn",
  };

  {
    if (onboarding) {
      return (
        <div className="Screen">
          <Onboarding onboarding={onboarding} setOnboarding={setOnboarding} />
        </div>
      );
    } else {
      return (
        <div className="Screen flex flex-col">
          <Header
            name={headingDict[value]}
            onboarding={onboarding}
            setOnboarding={setOnboarding}
          />
          <MainContainer value={value} appData={appData} />
          <div className="BottomNavigation h-[85px] grow-0 flex-none">
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
                  icon={<LandscapeIcon />}
                />
                <BottomNavigationAction
                  label={headingDict[1]}
                  icon={<TodayIcon />}
                />
                <BottomNavigationAction
                  label={headingDict[2]}
                  icon={<InterestsIcon />}
                />
              </BottomNavigation>
            </Box>
          </div>
        </div>
      );
    }
  }
};

export default App;
