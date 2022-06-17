import * as React from "react";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsPage from "./SettingsPage";
import AccountPage from "./AccountPage";
import Page from "./Page";

export default function Header({
  name,
  onboarding,
  setOnboarding,
  theme,
  colorMode,
  ...props
}) {
  //const [value, setValue] = React.useState(0);
  const pageContent = "";

  const [openSettings, setOpenSettings] = React.useState(false);

  const handleClickSettings = () => {
    setOpenSettings(true);
    // console.log(selected);
  };
  const handleCloseSettings = () => {
    setOpenSettings(false);
  };

  const [openAccount, setOpenAccount] = React.useState(false);

  const handleClickAccount = () => {
    setOpenAccount(true);
    // console.log(selected);
  };
  const handleCloseAccount = () => {
    setOpenAccount(false);
  };

  return (
    <React.Fragment>
      <div className="font-bold px-4 pt-6 pb-2 text-4xl grow-0 flex-none font-bold relative flex flex-row">
        {name}
        <div className="right-6 absolute flex gap-8 text-2xl top-8 HeaderControls cursor-pointer">
          <SettingsOutlinedIcon onClick={handleClickSettings} />
          <AccountCircleOutlinedIcon onClick={handleClickAccount} />
        </div>
      </div>
      <Page open={openSettings} setOpen={setOpenSettings}>
        <SettingsPage
          theme={theme}
          colorMode={colorMode}
          content={pageContent}
          name="Settings"
        />
      </Page>
      <Page open={openAccount} setOpen={setOpenAccount}>
        <AccountPage
          content={pageContent}
          onboarding={onboarding}
          setOnboarding={setOnboarding}
          name="Account"
        />
      </Page>
    </React.Fragment>
  );
}
