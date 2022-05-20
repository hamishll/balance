import * as React from "react";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsPage from "./SettingsPage";
import AccountPage from "./AccountPage";

export default function Header(props) {
  //const [value, setValue] = React.useState(0);
  const pageContent = "";

  const handleClickSettings = () => {
    document.getElementById("Settings").style.top = "0vh";
  };
  const handleClickAccount = () => {
    document.getElementById("Account").style.top = "0vh";
  };
  return (
    <>
      <div className="px-4 pt-6  pb-2 text-4xl font-bold relative flex flex-row">
        {props.name}
        <div className="right-6 absolute flex gap-8 text-2xl top-8 HeaderControls cursor-pointer">
          <SettingsOutlinedIcon onClick={handleClickSettings} />
          <AccountCircleOutlinedIcon onClick={handleClickAccount} />
        </div>
      </div>
      <SettingsPage content={pageContent} name="Settings" />
      <AccountPage content={pageContent} name="Account" />
    </>
  );
}
