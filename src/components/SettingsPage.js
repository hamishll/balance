import * as React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ThemeSelector from "./ThemeSelector";
import Page from "./Page";

export default function SettingsPage({ theme, colorMode, ...props }) {
  return (
    <div className="PageCardContent">
      <h1>{props.name}</h1>
      Balance is an open-source app designed to help you find happiness and
      meaning in your life.
      <h2>Data Privacy</h2>
      All data is stored locally on your device. You can opt-in to backing up
      your data by signing in.
      <h2>Theme</h2>
      <ThemeSelector theme={theme} colorMode={colorMode} />
    </div>
  );
}
