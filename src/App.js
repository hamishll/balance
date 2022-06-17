// import "./App.css";
import "./Output.css";
import React, { useState, useEffect } from "react";

// Sections
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LandscapeIcon from "@mui/icons-material/Landscape";
import InterestsIcon from "@mui/icons-material/Interests";
import TodayIcon from "@mui/icons-material/Today";
import Onboarding from "./components/Onboarding";

import { appdata } from "./data/appdata";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import PWAPrompt from "./components/PWAPrompt";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const App = ({ mode }) => {
  const [appData, setAppData] = useState(appdata);
  // const [userData, setUserData] = useState({});

  // Theme state items
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  // Page state
  const [value, setValue] = React.useState(0);
  const [onboarding, setOnboarding] = React.useState(
    localStorage.getItem("onboarding") === "complete" ? false : true
  );

  const headingDict = {
    0: "Goals",
    1: "Today",
    2: "Learn",
  };

  if (onboarding) {
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <div className={`Screen dark:text-gray-50 dark:bg-slate-800`}>
            <Onboarding onboarding={onboarding} setOnboarding={setOnboarding} />
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  } else {
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <div
            className={`Screen flex flex-col dark:text-gray-50 bg-white dark:bg-slate-800 touch-none`}
          >
            <Header
              name={headingDict[value]}
              onboarding={onboarding}
              setOnboarding={setOnboarding}
              theme={theme}
              colorMode={colorMode}
            />
            <MainContainer value={value} appData={appData} />
            {/* <div className="h-[85px] flex grow-0 border-t border-black border-opacity-10 dark:bg-slate-800"></div> */}
            <div className="fixed -bottom-px h-[85px] w-full max-w-screen-lg border-t border-black border-opacity-20 bg-white dark:bg-slate-800">
              <BottomNavigation
                sx={{ backgroundColor: "inherit" }}
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
              <PWAPrompt />
            </div>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }
};

export default function ThemedApp() {
  // Tailwind - listening for OS prefered dark/light mode
  let newColorScheme = "light";
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      newColorScheme = event.matches ? "dark" : "light";
      if (newColorScheme == "dark") {
        colorMode.setMode("dark");
      }
    });

  // MUI
  const [mode, setMode] = React.useState(
    localStorage.getItem("theme") ??
      (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );
  useEffect(() => {
    localStorage.setItem("theme", mode);
    if (mode == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    const newColor = mode === "light" ? "#FFFFFF" : "#1e293b";
    document
      .querySelector("meta[name=theme-color]")
      .setAttribute("content", newColor);
  }, [mode]);
  // colorMode.toggleColorMode is the method called by our toggle button. It toggles the state of mode
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          const newColor = newMode === "light" ? "#FFFFFF" : "#1e293b";
          document
            .querySelector("meta[name=theme-color]")
            .setAttribute("content", newColor);
          return prevMode === "light" ? "dark" : "light";
        });
        document.documentElement.classList.contains("dark")
          ? document.documentElement.classList.remove("dark")
          : document.documentElement.classList.add("dark");
        localStorage.setItem("theme", mode);
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App mode={mode} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
